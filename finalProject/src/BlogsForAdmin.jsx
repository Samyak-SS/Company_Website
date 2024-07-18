import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import axios from 'axios';

const BlogsForAdmin = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        function getData() {
            fetch("/api/v1/sendblogs")
                .then((response) => response.json())
                .then((data) => {
                    console.log('Fetched data:', data); // Log the fetched data to see its structure

                    // Ensure data is an array
                    const dataArray = Array.isArray(data) ? data : [data];
                    console.log('Converted data to array:', dataArray[0].data);

                    setBlogs(dataArray[0].data);
                })
                .catch((error) => {
                    console.error('Error fetching blogs:', error);
                });
        }

        getData();
    }, []);

    return (
        // whole bxody
        <div className='max-w-[100vw] min-w-[100%] overflow-x-hidden'>
            <h1>Approved Blogs</h1>
            <div className=' bg-[#f9f9f9] py-[50px] pt-20 w-[100vw]   max-w-[100%] mx-auto p-20 justify-center '>
                {/* middle section where blog is present */}
                <div className='grid lg:grid-cols-3  sm:grid-cols-2    gap-8  text-black   '>
                    
                        {blogs.map((blog) => (
                            <Link  key={blog.id} to={`/updateblog2/${blog.id}`}>
                                <div className='bg-white rounded-xl overflow-hidden drop-shadow-md  md:w-[100vw] w-[70vw]  max-w-[100%] '>
                                    <img className='h-48 w-full    object-cover' src={blog.image} alt={blog.title} />
                                    <div className='p-8'>
                                        <h3 className='font-bold text-2xl my-1 break-words md:w-[100vw] w-[70vw]  max-w-[100%]'>{blog.title}</h3>
                                        <p className='text-gray-600 text-xl'>{blog.description}</p>
                                        {console.log(blog.description)}
                                    </div>

                                </div>
                            </Link>
                        ))}
                    
                </div>
            </div>
        </div>
    )
}

export default BlogsForAdmin;
