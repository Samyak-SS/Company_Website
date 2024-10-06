import React, { useState } from 'react';
import ListOfBlogs from '../ListOfBlogs';
import NavBar from '../components/NavBar';
import BlogsForAdmin from '../BlogsForAdmin';
import ShowMsg from '../ShowMsg';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className='max-w-[100vw] overflow-hidden mx-auto'>
      <NavBar/>

      <div className="pt-20 mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex  felx-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'profile' ? 'border-[#fb2576] text-white bg-[#fb2576] hover:text-gray-900' : ' text-gray-900 border-[#fb2576] hover:text-gray-900 hover:border-gray-300 dark:hover:text-gray-900 bg-white'}`}
              onClick={() => setActiveTab('profile')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'profile'}
            >
              {/* Profile */}
              Unapproved Blogs
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'dashboard' ? 'border-[#fb2576] text-white bg-[#fb2576] hover:text-gray-900' : ' text-gray-900 border-[#fb2576] hover:text-gray-900 hover:border-gray-300 dark:hover:text-gray-900 bg-white'}`}
              onClick={() => setActiveTab('dashboard')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'dashboard'}
            >
              {/* Dashboard */}
              Approvred Blogs
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'settings' ? 'border-[#fb2576] text-white bg-[#fb2576] hover:text-gray-900' : ' text-gray-900 border-[#fb2576] hover:text-gray-900 hover:border-gray-300 dark:hover:text-gray-900 bg-white'}`}
              onClick={() => setActiveTab('settings')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'settings'}
            >
              {/* Settings */}
              Messages
            </button>
          </li>
          
        </ul>
      </div>
      <div id="default-tab-content">
        {activeTab === 'profile' && (
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel">
            <ListOfBlogs/>
          </div>
        )}
        {activeTab === 'dashboard' && (
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel">
            <BlogsForAdmin/>
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel">
            <ShowMsg/>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default AdminPage;
