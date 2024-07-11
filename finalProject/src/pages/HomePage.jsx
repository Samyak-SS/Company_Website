import React from 'react'
import Blogs from '../Blogs';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
export const HomePage = () => {
  return (
    <>
    <NavBar/> 
    <div id="bloghome" className='pt-20'>
     
      <Blogs />
      <Footer/>
      
    </div>
    </>
  )
}

export default HomePage;
