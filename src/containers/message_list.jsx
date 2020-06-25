import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from "../actions/index";
import { bindActionCreators } from 'redux';
import Message from '../components/message';

class MessageList extends Component {

  componentWillMount() {
    return this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="message-container">
        <div className="message-channel-name">
          Channel #{this.props.selectedChannel}
        </div>
        <div className="message-list">
          {this.props.messages.map((message) => { return <Message message={message} key={message.created_at} />;})}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
