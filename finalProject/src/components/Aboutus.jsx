import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon
import '../index.css'; // Import custom styles if needed

const Aboutus = () => {
  const teamMembers = [
    {
      name: "Kashyap Anand Kotak",
      title: "CEO and Co-founder of Quixilinx",
      image: "src/assets/image1.jpg.png", // Replace with actual path or URL
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dimple Anand Kotak",
      title: "Director and Co-founder of Quixilinx",
      image: "src/assets/image2.jpg.png", // Replace with actual path or URL
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "https://www.linkedin.com/"
      }
    },
    {
      name: "Jayraj Nitin Bichave",
      title: "CTO and Co-founder of Quixilinx",
      image: "src/assets/image3.jpg.png", // Replace with actual path or URL
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div id="team"className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Team</h2>
        <p className="text-center mb-12">Sit sint consectetur velit quos quisquam cupiditate nemo qui</p>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="max-w-xs w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105 relative">
                <div className="relative group">
                  <img className="w-full h-48 object-cover" src={member.image} alt={member.name} />
                  <div className="social absolute  bg-slate-600 text-white p-2 rounded-full transform transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <a href="https://www.linkedin.com/">
                      
                      
                      <FaLinkedin />
                      
                      
                    </a>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-gray-700 mb-4">{member.title}</p>
                  {/* <div className="flex justify-center space-x-4">
                    <a href={member.socials.twitter} className="text-gray-700 hover:text-gray-900">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={member.socials.facebook} className="text-gray-700 hover:text-gray-900">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href={member.socials.instagram} className="text-gray-700 hover:text-gray-900">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href={member.socials.linkedin} className="text-gray-700 hover:text-gray-900">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
