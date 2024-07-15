import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';

const BlogInspect = () => {
  const { id } = useParams();
  const [blogStatus, setBlogStatus] = useState("");
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("H2"); // This should log when the component mounts

    function getData() {
      console.log("Fetching data...");

      fetch("/api/v1/sendblogsAdmin")
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

  // Filter the blog based on the id
  let blog = blogs.filter(blog => blog.id == id);
  // Ensure blog is an object
  blog = blog.length > 0 ? blog[0] : {};

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

    navigate('/listofblogs');
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

    navigate('/listofblogs');
  };

  return (
    <>
      <NavBar/>
      <div className='flex justify-between p-20 bg-[#f9f9f9]'>
        
        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded' onClick={handleAccept}>Approve</button>
        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded' onClick={handleReject}>Reject</button>
      </div>
      <div className='w-full pb-10 bg-[#f9f9f9]'>
      
        <div className='max-w-[1240px] mx-auto'>
          <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 gap-8 px-8 sm:pt-20 md:mt-0 ss:pt-20 text-black '>
            {/* Blog img and content */}
            <div className='col-span-2 bg-white p-8'>
              {/* height is set to auto might need to change */}
              <img className="h-80 w-full object-cover shadow-md" src={blog.image} alt="Blog Cover" />
              <h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
              <div className='pt-5'><p>{blog.content}</p></div>
            </div>

            {/* author info card */}
            <div className='w-full rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px] bg-white'>
              <div className='px-6 sm:px-10 md:px-14 ss:px-6'>
                <img className='p-2 w-32 h-32 rounded-full object-cover mx-auto' src={blog.authorImg} alt="Author" />
                <h1 className='font-bold text-2xl text-center text-gray-900 pt-1'>{blog.authorName}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogInspect;
