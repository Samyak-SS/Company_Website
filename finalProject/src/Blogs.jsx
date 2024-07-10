import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import axios from 'axios';

const Blogs = () => {
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
        // whole body
        <>
            <div className='flex justify-between p-5 bg-[#f9f9f9]'>
                <Link to="/create"><button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>Create New Blog</button></Link>
                <Link to="/login"><button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>Sign in</button></Link>
            </div>
            <div className='w-full bg-[#f9f9f9] py-[50px]'>
                {/* middle section where blog is present */}
                <div className='max-w-[1240px] mx-auto '>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black'>
                        {blogs.map((blog) => (
                            <Link key={blog.id || Math.random()} to={`/blog/${blog.id}`}>
                                <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                                    <img className='h-48 w-full object-cover' src={blog.coverImg} alt={blog.title} />
                                    <div className='p-8'>
                                        <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
                                        <p className='text-gray-600 text-xl'>{blog.description}</p>
                                        {console.log(blog.description)}
                                    </div>

                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs;
