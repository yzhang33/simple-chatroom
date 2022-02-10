import React, { useEffect, useState } from 'react';
import './messages.css';

function Messages({ socket }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const messageListener = (message) => {
      //console.log(message);
      setMessages((prevState)=>{
          return [...prevState,message];
      });
    };
  
    // const deleteMessageListener = (messageID) => {
    //   setMessages((prevMessages) => {
    //     const newMessages = {...prevMessages};
    //     delete newMessages;
    //     return newMessages;
    //   });
    // };
  
    socket.on('messageToClient', messageListener);
    socket.emit('getMessages');

    return () => {
      socket.off('message', messageListener);
      //socket.off('deleteMessage', deleteMessageListener);
    };
  }, [socket]);

  return (
    <div className="message-list">
        
      {messages.map((message)=>(
        <div className="message-container">
            <span className="message">{`${message.data.id}: ${message.data.value}`}</span>
        </div>
      ))}
       
    </div>
  );
}

export default Messages;