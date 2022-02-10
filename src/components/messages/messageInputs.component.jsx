import React, { useState } from 'react';
import './messageInputs.css';

const NewMessage = ({socket}) => {
  const [value, setValue] = useState('');
  const [id] = useState(Math.floor(Math.random() * 100))

  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('message', {id,value});
    setValue('');
  };

  return (
    <form onSubmit={submitForm}>
      <input
        autoFocus
        value={value}
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </form>
  );
};

export default NewMessage;