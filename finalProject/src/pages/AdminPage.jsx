import React from 'react'
import ListOfBlogs from '../ListOfBlogs'
import NavBar from '../components/NavBar'

import BlogsForAdmin from '../BlogsForAdmin'
import ShowMsg from '../ShowMsg'

const AdminPage = () => {
  return (
    <div className='max-w-[100vw] overflow-hidden'>
        <NavBar/>
        <h1 className='p-20'>admin page</h1>
        <div className='p-20 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ss:grid-cols-1 xs:grid-cols-1 justify-center' >
            
            
            <div className='max-w-full'>
            <ListOfBlogs/>
            <hr className='border-t-4 border-gray-800 my-4'/>
            <h1 className='flex justify-center text-lg'>These are all the accepted blogs</h1>
            <BlogsForAdmin/>
            </div>
            <div>
              <ShowMsg/>
            </div>

        </div>
      
      </div>
  )
}

export default AdminPage