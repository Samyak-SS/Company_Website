import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const BlogContent = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("H2"); // This should log when the component mounts

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

  let blog = blogs.filter(blog => blog.id == id);  
  // The "blog" here is in array format we need to make in object format

  blog = blog[0];
  console.log(blog);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <NavBar/>
    <div className='w-full pb-10 bg-[#f9f9f9]'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 gap-8 px-8 sm:pt-20 md:mt-0 ss:pt-20 text-black '>
          {/* Blog img and content */}
          <div className='col-span-2 bg-white p-8'>
            {/* height is set to auto might need to change */}
            <img className="h-auto w-full object-cover shadow-md" src={blog.image} alt={blog.title} />
            <h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
            <div className='pt-5'><p>{blog.content}</p></div>
          </div>

          {/* author info card */}
          <div className='w-full rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px] bg-white'>
            <div className='px-6 sm:px-10 md:px-14 ss:px-6'>
              <img className='p-2 w-32 h-32 rounded-full object-cover mx-auto' src={blog.authorImg} alt={blog.author} />
              <h1 className='font-bold text-2xl text-center text-gray-900 pt-1'>{blog.author}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default BlogContent;
