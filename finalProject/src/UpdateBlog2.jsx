// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Footer from './components/Footer'

// const UpdateBlog2 = () => {
//     const { id } = useParams();
//     const [blogStatus, setBlogStatus] = useState("");
//     const navigate = useNavigate();

//     // Fetching
//     const [blogs, setBlogs] = useState([]);

//     // Updating
//     const [blogg, setBlogg] = useState(null);
//     const [editable, setEditable] = useState(false);

//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     const [authorName, setAuthorName] = useState('');
    
//     const [image, setImage] = useState('');

//     const [isPending, setIsPending] = useState(true);

//     useEffect(() => {
//         console.log("H2"); // This should log when the component mounts

//         function getData() {
//             console.log("Fetching data...");

//             fetch("/api/v1/sendblogs")
//                 .then((response) => response.json())
//                 .then((data) => {
//                     console.log('Fetched data:', data); // Log the fetched data to see its structure
//                     setIsPending(false);

//                     // Ensure data is an array
//                     const dataArray = Array.isArray(data) ? data : [data];
//                     console.log('Converted data to array:', dataArray[0].data);
//                     console.log(dataArray[0].data[0]);
//                     setBlogs(dataArray[0].data);

//                     // Update the specific blog
//                     const blog = dataArray[0].data.find(blog => blog.id == id);
//                     console.log(blog?.title);
//                     setBlogg(blog || {});
//                     setTitle(blog.title);
//                     setContent(blog.content);
//                     setAuthorName(blog.authorName);
                    
//                     setImage(blog.image);

//                     console.log(blog);
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching blogs:', error);
//                 });
//         }

//         getData();
//     }, [id]);

//     const handleSave = async () => {
//         const updatedBlog = {
//             id,
//             title,
//             content,
            
//             description: blogg.description, // Ensure description is included
//             date_time: blogg.date_time // Ensure date_time is included
//         };

//         const url = `/api/v1/updateBlogAdmin/${id}`;
//         console.log('PUT request URL:', url); // Log the URL to ensure it's correct

//         try {
//             const response = await fetch(url, { // Updated URL with port number
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(updatedBlog)
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to update blog');
//             }

//             console.log('Blog updated successfully');
//             setEditable(false);
//             window.location.reload()
//         } catch (error) {
//             console.error('Error updating blog:', error);
//             console.log(updatedBlog)
//         }
//     };

//     const handleAccept = async (e) => {
//         setBlogStatus(true);
//         console.log("Accepted");

//         try {
//             const response = await fetch('/api/v1/blogsAdminBoolean', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ id, bool: true }),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to update blog status');
//             }

//             console.log("Status updated to accepted");
//         } catch (error) {
//             console.error('Error updating status:', error);
//         }

//         navigate('/listofblogs');
//     };

//     const handleReject = async (e) => {
//         setBlogStatus(false);
//         console.log("Rejected");

//         try {
//             const response = await fetch('/api/v1/blogsAdminBoolean', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ id, bool: false }),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to update blog status');
//             }

//             console.log("Status updated to rejected");
//         } catch (error) {
//             console.error('Error updating status:', error);
//         }

//         navigate('/adminpage');
//     };
    
//     const formatDate = (isoString) => {
//         const options = { year: 'numeric', month: 'long', day: 'numeric' };
//         return new Date(isoString).toLocaleDateString(undefined, options);
//     };
//     return (
//         <>
//         <div className='max-w-[100vw] min-w-[100%] overflow-x-hidden'>
//             <NavBar />
//             <div className='pt-20 w-[100vw]  max-w-[100%] mx-auto'>
//                 {isPending && <div>Loading....</div>}
//                 {!isPending && blogg && (
//                     <div className=' '>
                        
//                         <div className='grid   grid-cols-2  gap-8 px-8 sm:p-10  md:mt-0 ss:p-10 text-black justify-center items-center pt-5 pb-5 '>
//                                 < div className='col-span-2 p-2 '>
//                                     <img className="max-w-[90vw] w-[80vw] md:w-[90vw] h-[60vh]  border-black border-2 object-contain shadow-md bg-black mb-10" src={blogg.image} alt="Blog Cover" />
//                                     {editable ? (
//                                         <>
//                                             <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 my-2 border    border-gray-600 " />
//                                             <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full rows-10 cols-50 p-4 my-2 h-64 border border-gray-600 rounded-lg"></textarea>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <h1 className='font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif'>{blogg.title}</h1>
//                                             <p className='font-normal text-gray-600 mt-5'>by {blogg.author}</p>
//                                             <p className='text-gray-600'>{formatDate(blogg.date_time)}</p>
//                                             <div className='mt-10 font-mono '><p className='whitespace-pre-wrap break-words max-w-[90vw] w-[80vw] md:w-[90vw] h-[60vh]'>{blogg.content}</p></div>
//                                         </>
//                                     )}
//                                 </div>  

                                
//                             </div>
                        
//                     </div>
//                 )}
                 
//         </div>
        
//         </div>
//         <div className="mt-4 flex justify-center space-x-4">
//         <button
//             className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
//             onClick={() => setEditable(!editable)}
//         >
//             Edit
//         </button>
//         {editable && (
//             <button
//                 className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
//                 onClick={handleSave}
//             >
//                 Save
//             </button>
//         )}
//         <button
//             className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
//             onClick={handleReject}
//         >
//             Delete
//         </button>
//     </div>
//         </>
//     );
// };

// export default UpdateBlog2;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const UpdateBlog2 = () => {
    const { id } = useParams();
    const [blogStatus, setBlogStatus] = useState("");
    const navigate = useNavigate();

    // Fetching
    const [blogs, setBlogs] = useState([]);

    // Updating
    const [blogg, setBlogg] = useState(null);
    const [editable, setEditable] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    
    const [image, setImage] = useState('');

    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        console.log("H2"); // This should log when the component mounts

        function getData() {
            console.log("Fetching data...");

            fetch("/api/v1/sendblogs")
                .then((response) => response.json())
                .then((data) => {
                    console.log('Fetched data:', data); // Log the fetched data to see its structure
                    setIsPending(false);

                    // Ensure data is an array
                    const dataArray = Array.isArray(data) ? data : [data];
                    console.log('Converted data to array:', dataArray[0].data);
                    console.log(dataArray[0].data[0]);
                    setBlogs(dataArray[0].data);

                    // Update the specific blog
                    const blog = dataArray[0].data.find(blog => blog.id == id);
                    console.log(blog?.title);
                    setBlogg(blog || {});
                    setTitle(blog.title);
                    setContent(blog.content);
                    setAuthor(blog.author);
                    
                    setImage(blog.image);

                    console.log(blog);
                })
                .catch((error) => {
                    console.error('Error fetching blogs:', error);
                });
        }

        getData();
    }, [id]);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('author', author);
        formData.append('description', blogg.description);
        formData.append('date_time', blogg.date_time);
        if (image) {
            formData.append('image', image);
        }

        const url = `/api/v1/updateBlogAdmin/${id}`;
        console.log('PUT request URL:', url); // Log the URL to ensure it's correct

        try {
            const response = await fetch(url, { 
                method: 'PUT',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to update blog');
            }

            console.log('Blog updated successfully');
            setEditable(false);
            window.location.reload();
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    const handleAccept = async (e) => {
        setBlogStatus(true);
        console.log("Accepted");

        try {
            const response = await fetch('/api/v1/blogsAdminBoolean', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, bool: true }),
            });

            if (!response.ok) {
                throw new Error('Failed to update blog status');
            }

            console.log("Status updated to accepted");
        } catch (error) {
            console.error('Error updating status:', error);
        }

        navigate('/adminpage');
    };

    const handleReject = async (e) => {
        setBlogStatus(false);
        console.log("Rejected");

        try {
            const response = await fetch('/api/v1/blogsAdminBoolean', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, bool: false }),
            });

            if (!response.ok) {
                throw new Error('Failed to update blog status');
            }

            console.log("Status updated to rejected");
        } catch (error) {
            console.error('Error updating status:', error);
        }

        navigate('/adminpage');
    };
    
    const formatDate = (isoString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(isoString).toLocaleDateString(undefined, options);
    };
    return (
        <>
        <div className='max-w-[100vw] min-w-[100%] overflow-x-hidden'>
            <NavBar />
            
            <div className='pt-20 w-[100vw]  max-w-[100%] mx-auto'>
                {isPending && <div>Loading....</div>}
                {!isPending && blogg && (
                      
                        
                      <div className='grid   grid-cols-2  gap-8 px-8 sm:p-10  md:mt-0 ss:p-10 text-black justify-center items-center pt-5 pb-5 '>
                              < div className='col-span-2 p-2 '>
                                  
                                  {editable ? (
                                      <>
                                          <img className="max-w-[90vw] w-[80vw] md:w-[90vw] h-[60vh]  border-black border-2 object-contain shadow-md bg-black mb-10" src={blogg.image} alt="Blog Cover" />  
                                          <input type="file" accept=".jpg, .jpeg, .png"  onClick={handleImageChange} className="block mb-3"/>
                                          {console.log(image)}
                                                                        
                                                                
                                          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 my-2 border    border-gray-600 " />
                                          <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full rows-10 cols-50 p-4 my-2 h-64 border border-gray-600 rounded-lg"></textarea>

                                      
                                      </>
                                  ) : (
                                      <>
                                            <img className="max-w-[90vw] w-[80vw] md:w-[90vw] h-[60vh]  border-black border-2 object-contain shadow-md bg-black mb-10" src={blogg.image} alt="Blog Cover" />
                                          <h1 className='font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif'>{blogg.title}</h1>
                                          <p className='font-normal text-gray-600 mt-5'>by {blogg.author}</p>
                                          <p className='text-gray-600'>{formatDate(blogg.date_time)}</p>
                                          <div className='mt-10 font-mono '><p className='whitespace-pre-wrap break-words max-w-[90vw] w-[80vw] md:w-[90vw] h-[60vh]'>{blogg.content}</p></div>
                                      </>
                                  )}
                              </div>

                              
                        </div>
                      
                  
                )}
            </div>
                 
        
        
        </div>
        <div className="mt-4 flex justify-center space-x-4">
                 <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
                onClick={() => setEditable(!editable)}
            >
                Edit
            </button>
            {editable && (
                <button
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
                    onClick={handleSave}
                >
                    Save
                </button>
            )}
            <button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
                onClick={handleReject}
            >
                Delete
            </button>
        </div>
        </>
       
        
    );
};

export default UpdateBlog2;
