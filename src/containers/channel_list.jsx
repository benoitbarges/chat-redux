import React, { Component } from 'react';
import { connect } from 'react-redux';
import Channel from './channel';

class ChannelList extends Component {


  render() {

    return (
      <div className="channel-container">
        <h1>Channel List</h1>
        <div className="channel-list">
         {this.props.channels.map((channel) => { return  <Channel channel={channel} key= {channel}/>; })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps)(ChannelList);
