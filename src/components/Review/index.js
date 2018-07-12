import React from 'react';
import styled from 'styled-components';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import * as Showdown from 'showdown';
import LioModal from '../LioModal';
import { Button, IconButton, TextBox } from '../UI';
import './Review.css';

const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  text-align: left;
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mdeState: null,
      title: '',
      body: '',
      rating: null,
      openDialog: false,
      reviewed: false,
      error: null
    };
    this.converter = new Showdown.Converter({ tables: true, simplifiedAutoLink: true });
  }

  handleValueChange = mdeState => this.setState({ mdeState, body: mdeState });

  handleTitleChange = evt => this.setState({ title: `${evt.target.value}` });

  handleRatingChange = evt => {
    console.log(evt.target);
    this.setState({ rating: parseInt(evt.target.getAttribute('data-stars'), 10) });
  }

  handleOpen = () => this.setState({ openDialog: true });

  handleClose = () => this.setState({ openDialog: false });

  handleSubmit = () => {
    if (!this.state.title || !this.state.body || !this.state.rating) {
      console.log('not all filed');
      console.log(this.state.title);
      console.log(this.state.body);
      console.log(this.state.rating);
      this.setState({ error: 'Please fill in all fields!' });
      return;
    }
    this.setState({ reviewed: true, openDialog: false });
  }


  render() {
    const {
      title,
      mdeState,
      rating,
      openDialog,
      reviewed,
      error
    } = this.state;
    const modBody = (
      <div style={{
        display: 'flex', flexFlow: 'column', textAlign: 'left', width: '100%'
      }}
      >
        <TextBox
          placeholder="Title"
          style={{ width: '100%' }}
          onChange={this.handleTitleChange}
          value={title}
        />
        <ReactMde
          onChange={this.handleValueChange}
          editorState={mdeState}
          generateMarkdownPreview={markdown => Promise.resolve(this.converter.makeHtml(markdown))}
        />
        <div className="ratingContainer">
          <IconButton
            rating={rating}
            data-stars={1}
            stars={1}
            onClick={this.handleRatingChange}
          >
            <i className="material-icons" data-stars={1}>
              {rating >= 1 ? 'star' : 'star_border'}
            </i>
          </IconButton>
          <IconButton
            rating={rating}
            data-stars={2}
            stars={2}
            onClick={this.handleRatingChange}
          >
            <i className="material-icons" data-stars={2}>
              {rating >= 2 ? 'star' : 'star_border'}
            </i>
          </IconButton>
          <IconButton
            rating={rating}
            data-stars={3}
            stars={3}
            onClick={this.handleRatingChange}
          >
            <i className="material-icons" data-stars={3}>
              {rating >= 3 ? 'star' : 'star_border'}
            </i>
          </IconButton>
          <IconButton
            rating={rating}
            data-stars={4}
            stars={4}
            onClick={this.handleRatingChange}
          >
            <i className="material-icons" data-stars={4}>
              {rating >= 4 ? 'star' : 'star_border'}
            </i>
          </IconButton>
          <IconButton
            rating={rating}
            data-stars={5}
            stars={5}
            onClick={this.handleRatingChange}
          >
            <i className="material-icons" data-stars={5}>
              {rating >= 5 ? 'star' : 'star_border'}
            </i>
          </IconButton>
        </div>
        { error || '' }
        <Button
          style={{ textAlign: 'center', marginTop: '1em' }}
          onClick={this.handleSubmit}
        >
            Submit
        </Button>
      </div>
    );
    return (
      <Wrapper>
        <Button
          onClick={this.handleOpen}
        >
          {reviewed ? '✓ Reviewed' : 'Review'}
        </Button>
        {
          openDialog && (
            <LioModal
              open={openDialog}
              title="Review This Movie"
              body={modBody}
              onRequestClose={this.handleClose}
            />
          )
        }
      </Wrapper>
    );
  }
}

export default Review;
