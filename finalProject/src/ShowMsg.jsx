import React, { useState, useEffect } from 'react';

const ShowMsg = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    function getMsgData() {
      fetch('/api/v1/showMessages') // Ensure this URL matches your backend server
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Fetched msg: ', data);
          setMessages(data.data); // Access the data array correctly
        })
        .catch((error) => {
          console.error('error: ', error);
          setError(error);
        });
    }

    getMsgData();
  }, []);

  return (
    <div className=' max-w-full mx-auto'>
      {error && <p>Error fetching messages: {error.message}</p>}
      {!error && messages.length === 0 && <p>No messages available.</p>}
      {messages.length > 0 && (
        <div className='max-w-[1240px] mx-auto  p-10 flex flex-col'>
          {messages.map((msg) => (
            <div key={msg.id} className='bg-white p-4 rounded-lg shadow-lg mb-4'>
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Subject:</strong> {msg.subject}</p>
              <p><strong>Content:</strong> {msg.content}</p>
              <small><strong>Date:</strong> {new Date(msg.date_time).toLocaleString()}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowMsg;
