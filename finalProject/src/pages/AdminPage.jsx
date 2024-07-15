import React from 'react'
import ListOfBlogs from '../ListOfBlogs'
import NavBar from '../components/NavBar'

import BlogsForAdmin from '../BlogsForAdmin'

const AdminPage = () => {
  return (
    <>
        <NavBar/>
        <div className='p-20'>
            
            <h1>admin page</h1>
            <ListOfBlogs/>
            <hr className='border-t-4 border-gray-800 my-4'/>
            <h1 className='flex justify-center text-lg'>These are all the accepted blogs</h1>
            <BlogsForAdmin/>

        </div>
    </>
  )
}

export default AdminPage