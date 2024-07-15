import React from 'react'
import Blogs from '../Blogs';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
export const HomePage = () => {
  return (
    <>
    <NavBar/> 
    <div id="bloghome" className='pt-20'>
    <div className='flex justify-between p-5 bg-[#f9f9f9]'>
                <Link to="/create"><button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>Create New Blog</button></Link>
                <Link to="/login"><button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>Sign in</button></Link>
            </div>     
      <Blogs />
      <Footer/>
      
    </div>
    </>
  )
}

export default HomePage;
