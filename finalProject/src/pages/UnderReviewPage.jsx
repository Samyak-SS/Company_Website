import React from 'react'
import { Link } from 'react-router-dom'


const UnderReviewPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <h1 className='p-6'> You Blog is under review it will be posted soon...</h1>
      <Link to="/bloghome"><button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>Read Blogs</button>
      </Link>  
    </div>
  )
}

export default UnderReviewPage