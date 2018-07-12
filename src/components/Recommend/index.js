import React from 'react';
import styled from 'styled-components';
import LioModal from '../LioModal';
import { Button, List, ListItem } from '../UI';
import './Recommend.css';

const Wrapper = styled.div`
  margin: 30px 0;
`;

class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      selected: [],
      friends: [
        {
          name: 'Emily Wenk'
        },
        {
          name: 'Lauren Hull'
        },
        {
          name: 'LeBron James'
        },
        {
          name: 'Leon Li'
        }
      ],
      sent: false,
      error: false
    };
  }

  handleStart = () => {
    this.setState({ showDialog: true });
  }

  handleClose = () => {
    this.setState({ showDialog: false });
  }

  handleSelect = (evt) => {
    const name = evt.target.getAttribute('data-name');
    const { selected } = this.state;
    if (selected.indexOf(name) > -1) {
      selected.splice(selected.indexOf(name), 1);
    } else {
      selected.push(name);
    }
    this.setState({ selected });
  }

  handleSend = () => {
    if (!this.state.selected.length) {
      this.setState({ error: 'Please select a friend.' });
      return;
    }
    this.setState({
      showDialog: false,
      sent: true,
      error: false
    });
  }

  generateFriends = () => this.state.friends.map(f => (
    <ListItem
      key={f.name}
      onClick={this.handleSelect}
      data-name={f.name}
      selected={this.state.selected.filter(p => p === f.name).length}
    >
      <div style={{ cursor: 'default' }}>{`${this.state.selected.filter(p => p === f.name).length ? '✓ ' : ''}${f.name}`}</div>
    </ListItem>
  ))

  render() {
    const { showDialog, sent, error } = this.state;
    const sendStyle = { textAlign: 'center', marginTop: '1em' };
    const modBody = (
      <div>
        <List>
          {this.generateFriends()}
        </List>
        { error || '' }
        <Button
          style={sendStyle}
          onClick={this.handleSend}
        >
          <i className="material-icons">send</i>
        </Button>
      </div>
    );
    return (
      <Wrapper>
        <Button
          onClick={this.handleStart}
        >
          {sent ? '✓ Recommended' : 'Recommend'}
        </Button>
        {
          showDialog && (
            <LioModal
              open={showDialog}
              title="Recommend This Movie"
              subtitle="Select the friends you want to send your recommendation to."
              body={modBody}
              onRequestClose={this.handleClose}
            />
          )
        }
      </Wrapper>
    );
  }
}

export default Recommend;
