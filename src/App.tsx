import React, { FC, useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { sendMessage } from './redux/actions';
import {Header} from './component/header'
import { Main } from './component/main'
import client from './services/sockets'


 export const App = ({addTodo}:any) => {
   useEffect(() => {
    
     client.connect().then(response => {
      client.sendMessage('hellowrod')
    });
    
    
  }, []);
   const messageInfo = useSelector((state) => state);
   console.log('na we',messageInfo)
  const dispatch = useDispatch()
  const [message, setMessage] = useState('')
  const handleAddMessage = (e: { preventDefault: () => void; }) => {
   dispatch({type: 'SEND_MESSAGE', payload: {content:message}})
    setMessage('')
    e.preventDefault()
  }
  return (
    <div className="msger">
      
    <Header/>
      
    <Main/>
      <form className="msger-inputarea">
        <input type="text" className="msger-input" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Enter your message..."/>
        <button onClick={handleAddMessage} className="msger-send-btn">Send</button>
      </form>
</div>
  );
}

export default App