import React, {useEffect,useState} from 'react';
import io from 'socket.io-client';
import Messages from './components/messages/messages.component';
import MessageInput from './components/messages/messageInputs.component';

import './App.css';

function App(){
  const[socket, setSocket] = useState(null);

  useEffect(()=>{
    const newSocket = io(`http://157.230.182.163:8000`, { transports : ['websocket'] });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);


  return(
    <div className="App">
      <header className='app-header'>
        React Chat
      </header>
      {
        socket?(
          <div className="chat-container">
            <Messages socket={socket}/>
            <MessageInput socket={socket}/>
          </div>
        ):(
          <div>Not Connected</div>
        )}
    </div>
  );
}

export default App;
