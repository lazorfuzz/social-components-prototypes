import React, { Component } from 'react';
import { ChromePicker, TwitterPicker } from 'react-color';
import styled from 'styled-components';
import './App.css';
import Party from './components/Party';
import AddFriendDialog from './components/AddFriendDialog';
import { getRandomRGB } from './components/Party/util';
import { Button, IconButton } from '../UI';

class WatchParty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startChat: false,
      nick: '',
      roomName: '',
      sharing: false,
      windowColor: getRandomRGB(),
      iOS: false,
      startVideo: false,
      choosingColor: false
    };
  }

  componentDidMount() {
    this.setup();
  }

  setup = () => {
    this.checkiOS();
    if (window.innerWidth > 800) this.roomNameInput.focus();
    if (window.location.hash && window.location.hash.length > 1) {
      this.setState({ roomName: window.location.hash.slice(1) });
      if (window.innerWidth > 800) this.nickInput.focus();
    }
  }

  checkiOS = () => {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    if (iOSSafari) this.setState({ iOS: true });
  }

  handleStart = () => {
    if (!this.state.nick || !this.state.roomName) {
      alert('Please enter all fields.');
      return;
    }
    this.setState({ startChat: true });
    window.location.hash = `#${this.state.roomName}`;
  }

  handleShareDialogClose = () => this.setState({ sharing: false });

  handleInvite = () => this.setState({ sharing: true });

  handleQuit = () => this.setState({ startChat: false });

  handleChangeColor = () => this.setState({ choosingColor: !this.state.choosingColor });

  handleStartVideo = () => this.setState({ iOS: false });

  handleColorSlide = color => this.setState({ windowColor: color.rgb });

  render() {
    return (
      <div className="App">
        <p>Open this page in a new tab or send this to a friend to demo realtime p2p video chatting!</p>
        {
            !this.state.startChat && (
            <div className="setup">
              <input
                className="wpTextBox"
                type="text"
                placeholder="Room Name"
                value={this.state.roomName}
                ref={el => this.roomNameInput = el}
                onChange={(e) => { this.setState({ roomName: e.target.value }); }}
              />
              <input
                className="wpTextBox"
                type="text"
                placeholder="Nickname"
                value={this.state.nick}
                ref={el => this.nickInput = el}
                onChange={(e) => { this.setState({ nick: e.target.value }); }}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    this.handleStart();
                  }
                }}
              />
              <Button
                onClick={this.handleStart}
                style={{ marginTop: '1em' }}
              >Enter
              </Button>
            </div>
            )}
        {
            this.state.startChat && (
            <div className="partyWrapper">
              <div className="controls">
                <p className="roomName">Room Name: <span className="roomLabel">{`${this.state.roomName}`}</span></p>
                <div className="menu">
                  <IconButton
                    onClick={this.handleChangeColor}
                  >
                    <i className="material-icons">color_lens</i>
                  </IconButton>
                  {
                    this.state.choosingColor && (
                    <div className="colorPopOver">
                      <div className="colorCover" onClick={() => this.setState({ choosingColor: false })} />
                      {
                        window.innerWidth > 600 && (
                        <ChromePicker
                          color={this.state.windowColor}
                          onChange={this.handleColorSlide}
                        />
                        )}
                      {
                        window.innerWidth <= 600 && (
                        <TwitterPicker
                          color={this.state.windowColor}
                          onChange={this.handleColorSlide}
                          triangle="hide"
                        />
                        )}
                    </div>
                    )}
                  <IconButton
                    onClick={this.handleInvite}
                  >
                    <i className="material-icons">group_add</i>
                  </IconButton>
                  <IconButton
                    onClick={this.handleQuit}
                  >
                    <i className="material-icons">power_settings_new</i>
                  </IconButton>
                </div>
              </div>
              <Party
                roomName={`liowebrtc-vchat-demo-${this.state.roomName}`}
                nick={this.state.nick}
                windowColor={this.state.windowColor}
                iOS={this.state.iOS}
                handleStartVideo={this.handleStartVideo}
              />
            </div>
            )}
        {
            this.state.sharing && (
            <AddFriendDialog
              roomName={this.state.roomName}
              onRequestClose={this.handleShareDialogClose}
            />
            )}
      </div>
    );
  }
}

export default WatchParty;
