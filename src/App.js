import React, { Component } from 'react';
import styled from 'styled-components';
import Recommend from './components/Recommend';
import Review from './components/Review';
import Reaction from './components/Reaction';
import WatchParty from './components/WatchParty';
import Feed from './components/Feed';
import Footer from './components/Footer';
import { Divider } from './components/UI';
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

const H1 = styled.h1`
  margin: 1em 0 1em 0;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <HeaderBody>
            <h1>Revised IST 331 Prototypes</h1>
            <p>This is the submission for the IST 331 high-fidelity prototypes assignment.
              All components were built using React, with CSS written from scratch. The components
              with working p2p demos are powered by <a href="https://github.com/lazorfuzz/liowebrtc" rel="noopener noreferrer" target="_blank">LioWebRTC.</a>
            </p>
          </HeaderBody>
        </Header>
        <H1>Social Feed</H1>
        <Feed />
        <Divider />
        <H1>Recommendations</H1>
        <Recommend />
        <Divider />
        <H1>Watch Party</H1>
        <WatchParty />
        <Divider />
        <H1>Reviews</H1>
        <Review />
        <Divider />
        <H1>Reactions</H1>
        <Reaction />
        <Footer />
      </Container>
    );
  }
}

export default App;
