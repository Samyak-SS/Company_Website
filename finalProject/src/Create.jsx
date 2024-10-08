// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './createStyle.css'

// const Create = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [author, setAuthor] = useState("");
//   const [blogDesc, setblogDesc] = useState("");
//   const [isPending, setIsPending] = useState(false);
//   const [image, setImage] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const blog = { title, body, author, blogDesc, image };

//     setIsPending(true);

//     fetch('/api/v1/takeblogs', {
//       method: 'POST',
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(blog)
//     }).then(() => {
//       console.log('New Blog added');
//       console.log(blog);
//       setIsPending(false);
      
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="w-full max-w-md bg-[#f9f9f9] p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6">Add a New Blog</h2>
//         <form onSubmit={handleSubmit}>
//           <label className="block mb-2">Blog Title:</label>
//           <input
//             type="text"
//             className="block w-full border border-gray-300 rounded px-3 py-2 mb-3"
//             required
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <label className="block mb-2">Blog Body:</label>
//           <textarea
//             className="block w-full border border-gray-300 rounded px-3 py-2 mb-3"
//             required
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//           ></textarea>
//           <label className="block mb-2">Blog Author:</label>
//           <input
//             type="text"
//             className="block w-full border border-gray-300 rounded px-3 py-2 mb-3"
//             required
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//           />
//           <label className="block mb-2">Blog Description:</label>
//           <input
//             type="text"
//             className="block w-full border border-gray-300 rounded px-3 py-2 mb-3"
//             value={blogDesc}
//             onChange={(e) => setblogDesc(e.target.value)}
//           />
//           <label className="block mb-2">Blog Image:</label>
//           <input
//             type="file"
//             accept=".jpg, .jpeg, .png"
//             onChange={handleImageChange}
//             className="block mb-3"
//           />

//           {!isPending ? (
//             <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>
//               Add Blog
//             </button>
//           ) : (
//             <button className="bg-gray-300 text-gray-600 cursor-not-allowed font-bold py-2 px-4 rounded" disabled>
//               Loading...
//             </button>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Create;




//new code

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './createStyle.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const date_time = new Date().toISOString();
    const blog = { title, content, author, description, date_time };

    setIsPending(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('date_time', date_time);
    formData.append('image', image);

    fetch('/api/v1/takeblogs', {
      method: 'POST',
      body: formData
    }).then(() => {
      console.log('New Blog added');
      setIsPending(false);
      navigate('/blogunderreview');
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <NavBar/>
      <div className="flex items-center justify-center h-screen pt-20">
        <div className="w-full max-w-md bg-[#f9f9f9] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Add a New Blog</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">Blog Title:</label>
            <input
              type="text"
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-3"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="block mb-2">Blog Content:</label>
            <textarea
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-3"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <label className="block mb-2">Blog Author:</label>
            <input
              type="text"
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-3"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label className="block mb-2">Blog Description:</label>
            <input
              type="text"
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="block mb-2">Blog Image:</label>
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageChange}
              className="block mb-3"
            />

            {!isPending ? (
              <button className='bg-[#fb2576]  border-[#fb2576]  hover:bg-[#e11f6a] hover:text-black text-white font-bold py-2 px-4 rounded'>
                Add Blog
              </button>
            ) : (
              <button className="bg-gray-300 text-gray-600 cursor-not-allowed font-bold py-2 px-4 rounded" disabled>
                Loading...
              </button>
            )}
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Create;



