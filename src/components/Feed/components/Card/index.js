import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  max-width: 85vw;
  margin: 1em 0 3em 0;
  background: rgb(49, 52, 64);
  border-radius: 5px;
  height: ${props => (props.expanded ? 'auto' : '180px')}
  transition: all 0.1s ease-in;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const Poster = styled.img`
  width: 120px;
  height: 180px;
  max-width: 120px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: ${props => (props.expanded ? '0px' : '5px')}
`;

const InfoContainer = styled.div`
  min-height: 180px;
  height: auto;
  display: flex;
  flex-flow: column;
`;

const Info = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
  color: #e0e0e0;
  padding: 10px;
  min-height: 134px;
  overflow-y: hidden;
  min-width: 400px;
  max-width: 400px;
  border-top-right-radius: 5px;
`;

const Controls = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  flex-flow: row;
  border-bottom-right-radius: 5px;
  min-height: 46px;
`;

export const IconButton = styled.p`
    background: inherit;
    color: white;
    line-height: 36px;
    text-align: center;
    width: 36px;
    text-decoration: none;
    font-size: 32px;
    margin: 5px 10px;
    -webkit-border-radius: 36px;
    -moz-border-radius: 36px;
    border-radius: 36px;
    cursor: pointer;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
      background: rgba(0, 0, 0, 0.2) radial-gradient(circle, transparent 1%, rgba(0, 0, 0, 0.2) 1%) center/15000%;
    }
    &:active {
      background-color: rgba
      background-size: 100%;
      transition: background 0s;
    }
`;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      body: props.short
    };
  }

  handleExpand = () => {
    if (this.state.expanded) {
      this.setState({ expanded: false, body: this.props.short });
      return;
    }
    this.setState({ expanded: true, body: this.props.long });
  }

  render() {
    return (
      <Wrapper expanded={this.state.expanded}>
        <Poster src={this.props.img} />
        <InfoContainer>
          <Info>
            <h4 style={{ margin: '0 0 5px 0' }}>{this.props.title}</h4>
            <p style={{ margin: '0' }}>{this.state.body}</p>
          </Info>
          <Controls>
            <IconButton>
              <i className="material-icons">
                favorite
              </i>
            </IconButton>
            <IconButton>
              <i className="material-icons">
                share
              </i>
            </IconButton>
            <IconButton>
              <i className="material-icons">
                person
              </i>
            </IconButton>
            {
              this.props.long && (
              <IconButton
                style={{ marginLeft: 'auto' }}
                onClick={this.handleExpand}
              >
                {
                  !this.state.expanded && (
                  <i className="material-icons">
                    expand_more
                  </i>
                  )}
                {
                  this.state.expanded && (
                  <i className="material-icons">
                    expand_less
                  </i>
                  )}
              </IconButton>
              )}
          </Controls>
        </InfoContainer>
      </Wrapper>
    );
  }
}

export default Card;
