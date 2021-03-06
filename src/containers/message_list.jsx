import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from "../actions/index";
import Message from '../components/message';

class MessageList extends Component {

  componentWillMount() {
    return this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  render() {
    return (
      <div className="message-list-container">
        <div className="message-list-channel">
          Channel #{this.props.selectedChannel}
        </div>
        <div className="message-list row" ref={(list) => { this.list = list; }}>
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
