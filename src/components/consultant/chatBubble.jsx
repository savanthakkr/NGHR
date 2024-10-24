import React from 'react';

const SenderBubble = ({ message, time, avatar }) => {
  return (
    <div className="sender-bubble">
      <div>
        <p>{message}</p>
        <span className="chat-time">{time}</span>
      </div>
      <img src={avatar} alt="Avatar" className="avatar ms-3" />
    </div>
  );
};

const ReceiverBubble = ({ message, time }) => {
  return (
    <div className="receiver-bubble">
      <div className="receiver-text">
        <p>{message}</p>
        <span className="chat-time">{time}</span>
      </div>
    </div>
  );
};


export { SenderBubble, ReceiverBubble };
