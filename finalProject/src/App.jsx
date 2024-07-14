import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, BlogContentPage, BlogInspectPage, UnderReviewPage, FinalMainPage } from './pages';  // Make sure to import specific named exports
import LoginPage from "./loginPage";
import Create from "./Create";
import ListOfBlogs from "./ListOfBlogs";
import BlogInspect from "./BlogInspect";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BlogImages from './blogImage';

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
      </Routes>
    </>
  );
}

export default App;
