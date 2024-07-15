import express from 'express';
import BlogRoutes from './routes/BlogRoutes.js'; // Import upload
import pkg from 'pg';
const { Pool } = pkg;
import multer from 'multer';

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
const port = process.env.PORT || 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Quixilinx',
    password: 'p@ssw0rd',
    port: 5432,
});

async function testConnection() {
    try {
        const client = await pool.connect();
        console.log("Connected to the database");
        client.release();
    } catch (err) {
        console.error("Database connection error:", err.stack);
    }
}

testConnection();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// app.use("/api/v1", BlogRoutes);
app.use("/api/v1", BlogRoutes(upload));



// // Route for uploading an image with additional data
// app.post('/upload', upload.single('image'), async (req, res) => {
//     const { description } = req.body; // Get additional data from the request body
//     const imageBuffer = req.file.buffer;
//     const contentType = req.file.mimetype;

//     try {
//         const query = 'INSERT INTO images (img, content_type, description) VALUES ($1, $2, $3)';
//         await pool.query(query, [imageBuffer, contentType, description]);
//         res.status(200).send('Image uploaded successfully!');
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Failed to upload image.');
//     }
// });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export { pool, upload };
