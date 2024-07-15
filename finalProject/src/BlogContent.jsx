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

  const formatDate = (isoString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoString).toLocaleDateString(undefined, options);
};

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <NavBar/>
    <br></br><br /><br />
    <div className='w-full pb-20 bg-[#f9f9f9]'>
      <div className='max-w-[1240px] mx-auto'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-8 sm:p-10  md:mt-0 ss:p-10 text-black justify-center items-center pt-5 pb-5 '>
          {/* Blog img and content */}
          < div className='col-span-2 p-2 '>
            {/* height is set to auto might need to change */}
            <img className="w-full sm:h-64 md:h-80 lg:h-96 object-cover shadow-md bg-black mb-10" src={blog.image} alt={blog.title} />
            <h1 className='font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif'>{blog.title}</h1>
            <p className='font-normal text-gray-600 mt-5'>by {blog.author}</p>
            <p className='text-gray-600'>{formatDate(blog.date_time)}</p>
            <div className='mt-10 font-mono '><p className='whitespace-pre-wrap break-words'>{blog.content}</p></div>
          </div>

          {/* author info card */}
          
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default BlogContent;
