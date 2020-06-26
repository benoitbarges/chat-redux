import React from 'react';

import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';

const App = () => {
  return (
    <div className="app">
      <div className="container flex">
        <ChannelList />
        <div className="messages-container">
          <MessageList />
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default App;
