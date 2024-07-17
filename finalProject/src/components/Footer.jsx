import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleMsgSubmit = (e) => {
    e.preventDefault();
    const date_time = new Date().toISOString();
    setIsPending(true);

    const msgData = { name, email, date_time, subject, content };

    console.log('Sending data:', msgData);

    fetch('/api/v1/saveMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msgData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('New Msg Added', data.data);
        setIsPending(false);
        setName("");
        setEmail("");
        setSubject("");
        setContent("");
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setIsPending(false);
      });
  }

  return (
    <div id="contactUs" className='w-full bg-white text-gray-300 py-8 px-2'>
      <div className='max-w-[1260px] mx-auto flex flex-col md:flex-row py-6 md:p-8'>
        <section id="contact" className="bg-gray-100 p-4 flex flex-col md:flex-row w-full">
          <div className="flex-1 md:mr-4 mb-4 md:mb-0">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-500">Contact</h2>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                <div className="text-blue-500 text-3xl mr-2">
                  {/* <FaMapMarkerAlt /> */}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location:</h4>
                  <p className="text-gray-600 text-sm">B-111, Anant Regency, M. M. M. Marg, Mulund West, Mumbai - 400080</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                <div className="text-blue-500 text-3xl mr-2">
                  {/* <FaEnvelope /> */}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email:</h4>
                  <p className="text-gray-600 text-sm">contact@quixilinx.com</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                <div className="text-blue-500 text-3xl mr-2">
                  {/* <FaPhoneAlt /> */}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Call:</h4>
                  <p className="text-gray-600 text-sm">+91 7588874767</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <form className="bg-white p-4 rounded-lg shadow-lg mt-10" onSubmit={handleMsgSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="p-2 border border-gray-300 rounded-lg w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg w-full"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full mb-4"
                required
              />
              <textarea
                placeholder="Message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full mb-4"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                disabled={isPending}
              >
                {isPending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </div>
      <div className='border-t-2 border-gray-900 flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
        <p>2024 Quixilinx LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-1 xs:pt-3 text=2xl xs:gap-2'>
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
