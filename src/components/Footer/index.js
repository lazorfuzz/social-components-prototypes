import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5em 0 0 0;
  position: relative;
  bottom: 0;
  width: 100vw;
  background: rgb(49, 52, 64);
  height: 120px;
  padding: 40px 0 30px 30px;
  text-align: left;
  font-size: 14px;
`;

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        Made with ❤️ by Leon Li. <a href="https://github.com/lazorfuzz/social-components-prototypes">View this project on GitHub.</a>
      </Wrapper>
    );
  }
}

export default Footer;
