import React, { Component } from 'react';
import copy from 'clipboard-copy';
import LioModal from '../../../LioModal';
import { Button } from '../../../UI';
import '../../App.css';

class AddFriendDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyButtonText: 'Copy'
    };
  }

  handleShareUrlCopy = () => {
    copy(this.shareText.value);
    this.shareText.focus();
    this.setState({ copyButtonText: 'Copied' });
    setTimeout(() => { this.props.onRequestClose(); }, 800);
  }

  render() {
    const modBody = (
      <div>
        <input
          className="wpTextBox"
          type="text"
          readOnly
          ref={el => this.shareText = el}
          value={`${window.location.origin}/#${this.props.roomName}`}
          style={{ width: '100%' }}
        />
        <Button
          onClick={this.handleShareUrlCopy}
        >
          {this.state.copyButtonText}
        </Button>
      </div>
    );

    return (
      <LioModal
        title="Add Friends"
        subtitle="Share this URL with your friends!"
        body={modBody}
        open
        onRequestClose={this.props.onRequestClose}
      />
    );
  }
}

export default AddFriendDialog;
