import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, BlogContentPage, BlogInspectPage, UnderReviewPage, FinalMainPage, AdminPage } from './pages';  // Make sure to import specific named exports
import LoginPage from "./loginPage";
import Create from "./Create";
import ListOfBlogs from "./ListOfBlogs";
import BlogInspect from "./BlogInspect";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BlogImages from './blogImage';
import BlogsForAdmin from './BlogsForAdmin';
import UpdateBlog from './UpdateBlog';
import UpdateBlog2 from './UpdateBlog2';
import ShowMsg from './ShowMsg';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FinalMainPage />} />
        <Route path="/bloghome" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogContentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/listofblogs" element={<ListOfBlogs />} />
        <Route path="/bloginspect/:id" element={<BlogInspectPage />} />
        <Route path="/blogunderreview" element={<UnderReviewPage />} />
        <Route path="/blogImage" element={<BlogImages />} />        
        <Route path="/adminpage" element={<AdminPage />} />        
        <Route path="/updateblog/:id" element={<UpdateBlog />} />    
        <Route path="/updateblog2/:id" element={<UpdateBlog2 />} />    
        <Route path='/showmsg' element={<ShowMsg/>}>  </Route>
        {/* <Route path="/blogsforadmin" element={<BlogsForAdmin />} />         */}
      </Routes>
    </>
  );
}

export default App;
