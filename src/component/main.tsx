import React from 'react'
import './style.css';

export const Main = () => {
    const messages = [
        {
            name: 'BOT',
            time: '12:45',
            isBot: true,
            message: 'Hi, welcome to a dummy Chat! Go ahead and send me a message. 😄'
        },
        {
            name: ' Jude Ezekiel',
            time: '12:45',
            isUser: true,
            message: 'Hi, what is your name. 😄'
        }
    ]
    const isBot = (name:string, time:string, message:string) => {
        return (
            <div className="msg left-msg">
                
          <div
          className="msg-img"
          style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/327/327779.svg)"}}
          ></div>

          <div className="msg-bubble">
            <div className="msg-info">
                        <div className="msg-info-name">{ name }</div>
              <div className="msg-info-time">{time}</div>
            </div>

            <div className="msg-text">
              {message}
            </div>
          </div>
        </div>
            
        )
    }
    const isUser = (name:string, time:string, message:string) => {
        return (      
            
        <div className="msg right-msg">
          <div
          className="msg-img"
          style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/145/145867.svg)"}}
          ></div>

          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">{name}</div>
              <div className="msg-info-time">{time}</div>
            </div>

            <div className="msg-text">
              {message}
            </div>
          </div>
        </div>
        )
    }
    return (
    <main className="msger-chat">
            {messages.map(message => {
                if (message.isBot) {
                   return isBot(message.name, message.time, message.message)
                    
                }
                if (message.isUser) {
                    return isUser(message.name, message.time, message.message)
                }
            })}
      </main>
    )
}