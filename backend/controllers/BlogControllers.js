import { pool } from '../server.js';

// export const sendblogs = async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM blog_posts WHERE published = TRUE;');
        
//         if (result.rows.length === 0) {
//             console.log("No record found");
//             res.status(404).send({
//                 success: false,
//                 message: 'No records found'
//             });
//         } else {
//             res.status(200).json({
//                 success: true,
//                 data: result.rows
//             });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: "Error in Get All Blog Posts API",
//             error
//         });
//     }
// };

export const sendblogs = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM blog_posts WHERE published = TRUE;');

        if (result.rows.length === 0) {
            console.log("No record found");
            res.status(404).send({
                success: false,
                message: 'No records found'
            });
        } else {
            // Convert BYTEA to base64
            const blogs = result.rows.map(blog => {
                if (blog.image) {
                    // Convert the buffer to base64
                    blog.image = `data:image/jpeg;base64,${blog.image.toString('base64')}`;
                }
                return blog;
            });

            res.status(200).json({
                success: true,
                data: blogs
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Get All Blog Posts API",
            error
        });
    }
};


export const sendblogsAdmin = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM blog_posts WHERE published = FALSE;');

        if (result.rows.length === 0) {
            console.log("No record found");
            res.status(404).send({
                success: false,
                message: 'No records found'
            });
        } else {
            // Convert BYTEA to base64
            const blogs = result.rows.map(blog => {
                if (blog.image) {
                    // Convert the buffer to base64
                    blog.image = `data:image/jpeg;base64,${blog.image.toString('base64')}`;
                }
                return blog;
            });

            res.status(200).json({
                success: true,
                data: blogs
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Get All Blog Posts API",
            error
        });
    }
};





export const blogsAdminBoolean = async (req, res) => {
    try {
        const {id, bool} = req.body;
        console.log(bool);
        let result;
        if(bool === true){
            result = await pool.query(`UPDATE blog_posts SET published = ${bool} WHERE id = ${id};`);
            console.log("q1 ran");
        } else {
            result = await pool.query(`DELETE FROM blog_posts WHERE id = ${id};`);
            console.log("q2 ran");
        }
        
        
        if (!result) {
            console.log("No record found");
            res.status(404).send({
                success: false,
                message: 'No records found'
            });
        } else {
            res.status(200).json({
                success: true,
                data: result.rows
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Get All Blog Posts API",
            error
        });
    }
};




export const Login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: 'Username and password are required'
        });
    }

    try {
        const result = await pool.query(
            'SELECT * FROM admin_users WHERE username = $1',
            [username]
        );
        console.log(result);
        if (result.rows.length === 0) {
            return res.status(401).json({
                success: false,
                message: 'Invalid username or password'
            });
        }

        const admin = result.rows[0];

        if (admin.password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Invalid username or password2'
            });
        }

        // Assuming successful login, you can send back a success message or token if needed
        res.status(200).json({
            success: true,
            message: 'Login successful',
            admin: {
                admin_id: admin.admin_id,
                username: admin.username,
                email: admin.email
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};


export const takeblog = async (req, res) => {
    try {
        const { title, content, description, author, date_time} = req.body;
        const image = req.file.buffer;


        console.log( title, content, image, description, author, date_time);
        if ( !title || !author || !content || !image || !description || !date_time) {
            res.send("Data is missing");
            return;
        }
        const result = await pool.query(
            'INSERT INTO blog_posts (title, author, date_time, content, image, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
            [title, author, date_time, content, image, description]

        );
        if (!result) {
            console.log("No data saved");
            res.status(404).send({
                success: false,
                message: 'Error inside query'
            });
            return;
        }
        res.status(201).send({
            success: true,
            message: 'Data saved successfully',
            data: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in saving blog post",
            error
        });
    }
};

// export const updateBlogAdmin = async (req, res) => {
//     try {
//         const { id, title, content, image, description, author, date_time } = req.body;
//         if (!id || !title || !author || !content || !image || !description || !date_time) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'All fields are required'
//             });
//         }
//         const result = await pool.query(
//             'UPDATE blog_posts SET title = $1, author = $2, date_time = $3, content = $4, image = $5, description = $6 WHERE id = $7 RETURNING *',
//             [title, author, date_time, content, image, description, id]
//         );
//         if (result.rows.length === 0) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Blog post not found'
//             });
//         }
//         res.status(200).json({
//             success: true,
//             message: 'Blog post updated successfully',
//             data: result.rows[0]
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: 'Error updating blog post',
//             error
//         });
//     }
// };

export const updateBlogAdmin = async (req, res) => {
    try {
        const { id } = req.params; // Extract id from req.params
        const { title, content, description,image, author, date_time } = req.body;
        if (!id || !title  || !content || !description || !date_time) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }
        const result = await pool.query(
            'UPDATE blog_posts SET title = $1,  date_time = $2, content = $3, description = $4 WHERE id = $5 RETURNING *',
            [title,date_time, content, description, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Blog post not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Blog post updated successfully',
            data: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error updating blog post',
            error
        });
    }
};


export const saveMessage = async (req, res) => {
    try {
        const { name, email, date_time, subject, content } = req.body;
        console.log( name, email, date_time, subject, content);
        if ( !name || !email ||  !date_time ||  !subject ||  !content) {
            res.send("Data is missing");
            return;
        }
        const result = await pool.query(
            'INSERT INTO messages (name, email, date_time, subject, content) VALUES ($1, $2, $3, $4, $5) RETURNING id',
            [name, email, date_time, subject, content]
        );
        if (!result) {
            console.log("No data saved");
            res.status(404).send({
                success: false,
                message: 'Error inside query'
            });
            return;
        }
        res.status(201).send({
            success: true,
            message: 'Data saved successfully',
            data: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in saving blog post",
            error
        });
    }
};

export const showMessages = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM messages ;');
        
        if (result.rows.length === 0) {
            console.log("No record found");
            res.status(404).send({
                success: false,
                message: 'No records found'
            });
        } else {
            res.status(200).json({
                success: true,
                data: result.rows
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Show Messages API",
            error
        });
    }
};

export const fetchBlogImages = async (req, res) => {
    try {
        const result = await pool.query('SELECT id, image FROM blog_posts WHERE published = FALSE;');

        if (result.rows.length === 0) {
            console.log("No images found");
            res.status(404).send({
                success: false,
                message: 'No images found'
            });
        } else {
            const images = result.rows.map(blog => {
                return {
                    id: blog.id,
                    image: `data:image/jpeg;base64,${blog.image.toString('base64')}`
                };
            });

            res.status(200).json({
                success: true,
                data: images
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Fetch Blog Images API",
            error
        });
    }
};