import React, { Component } from 'react';
import styled from 'styled-components';
import Recommend from './components/Recommend';
import Review from './components/Review';
import Reaction from './components/Reaction';
import WatchParty from './components/WatchParty';
import Feed from './components/Feed';
import Footer from './components/Footer';
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  background: rgb(49, 52, 64);
  width: 100%;
  padding: 10px 0;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.85);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.85);
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.85);
  justify-content: center;
`;

const HeaderBody = styled.div`
  width: 800px;
  max-width: 90%;
  line-height: 1.5;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <HeaderBody>
            <h1>IST 331 Social Components Prototypes</h1>
            <p>This is the submission for the IST 331 high-fidelity prototypes assignment.
              All components were built using React, with CSS written from scratch. The components
              with working p2p demos are powered by <a href="https://github.com/lazorfuzz/liowebrtc" rel="noopener noreferrer" target="_blank">LioWebRTC.</a>
            </p>
          </HeaderBody>
        </Header>
        <h2>Social Feed</h2>
        <Feed />
        <h2>Recommendations</h2>
        <Recommend />
        <h2>Watch Party</h2>
        <WatchParty />
        <h2>Reviews</h2>
        <Review />
        <h2>Reactions</h2>
        <Reaction />
        <Footer />
      </Container>
    );
  }
}

export default App;
