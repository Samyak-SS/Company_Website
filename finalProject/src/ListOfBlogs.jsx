import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListOfBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        function getData() {
            fetch("/api/v1/sendblogsAdmin")
                .then((response) => response.json())
                .then((data) => {
                    console.log('Fetched data:', data);
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
        <>
            <h1 className='p-4 md:p-8 lg:p-12 text-2xl md:text-3xl lg:text-4xl'>Unapproved Blogs</h1>

            <div className='w-full  py-8'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {blogs.map((blog) => (
                            <Link key={blog.id} to={`/updateblog/${blog.id}`}>
                                <div className='bg-white rounded-xl overflow-hidden shadow-md'>
                                    <img className='h-48 w-full object-cover' src={blog.image} alt={blog.title} />
                                    <div className='p-6'>
                                        <h3 className='font-bold text-xl mb-2'>{blog.title}</h3>
                                        <p className='text-gray-600 text-lg'>{blog.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListOfBlogs;
