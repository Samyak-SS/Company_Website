import React from 'react';
import NavBar from '../components/NavBar';
import Herosection from '../components/Herosection';
import Services from '../components/Services';
import Aboutus from '../components/Aboutus';
import Footer from '../components/Footer';

const FinalMainPage = () => {
  return (
    <div className='bg-black lg:bg-white'>
      <div id='mainpage'>
        <NavBar />
        <div className='pt-20'>
          <Herosection />
          <Services />
          <Aboutus />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default FinalMainPage;
