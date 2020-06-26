import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedChannel, fetchMessages } from '../actions/index';

class Channel extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = () => {
    this.props.setSelectedChannel(this.props.channel);
  }

  render() {
    let classes = "channel";
    if (this.props.channel === this.props.selectedChannel) {
      classes += " selected-channel";
    }

    return (
      <div className={classes} onClick={this.handleClick}>
        #{this.props.channel}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setSelectedChannel, fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
