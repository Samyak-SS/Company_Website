import Blogs from "./Blogs"
import HomePage from "./pages/HomePage"
import { BlogContentPage, BlogInspectPage, UnderReviewPage } from "./pages"
import {Routes,Route} from 'react-router-dom';
import LoginPage from "./loginPage";
import Create from "./Create";
import ListOfBlogs from "./ListOfBlogs";
import BlogInspect from "./BlogInspect";

function App() {


  return (
    <>
    
    
      <Routes>
        <Route path="/" element={<HomePage />} > </Route>
        <Route path="/blog/:id" element={<BlogContentPage />} > </Route>
        <Route path="/login" element={<LoginPage />} > </Route>
        <Route path="/create" element={<Create />} > </Route>
        <Route path="/listofblogs" element={<ListOfBlogs />} > </Route>
        <Route path="/bloginspect/:id" element={<BlogInspectPage/>} > </Route>
        <Route path="/blogunderreview" element={<UnderReviewPage />} > </Route>
          
        
      </Routes>
      


    
    </>
  )
}

export default App
