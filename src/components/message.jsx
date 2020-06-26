import React, { Component } from 'react';

const Message = (props) => {
  const time = new Date(props.message.created_at).toLocaleTimeString();
  return (
    <div className="message">
      <div className="username">
        {props.message.author} <small>{time}</small>
      </div>
      <div className="message-content">
        {props.message.content}
      </div>
    </div>
  );
};

export default Message;
