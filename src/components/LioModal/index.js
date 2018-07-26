import React, { Component } from 'react';
import styled from 'styled-components';
import './LioModal.css';

const ModalDialog = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 50;
    transition: all 0.4s cubic-bezier(.24,.42,.92,.29);
    display: ${props => (props.open ? '' : 'none')};
    overflow-y: scroll;
`;

const Close = styled.p`
    background: #ff5047;
    color: #ff5047;
    line-height: 16px;
    position: absolute;
    text-align: center;
    top: -5px;
    left: 10px;
    width: 16px;
    text-decoration: none;
    font-size: 12px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
    box-shadow: 1px 1px 3px #000;
    cursor: pointer;
    &:hover {
      background: #ed4a42;
      color: #7a241f;
    }
`;

const Title = styled.h2`
  margin: 10px 0;
`;

class LioModal extends Component {

  handleClose = (evt) => {
    if (evt.target.getAttribute('class').indexOf('modContainer') === -1) return;
    this.props.onRequestClose();
  }

  render() {
    const {
      open,
      title,
      subtitle,
      body
    } = this.props;
    return (
      <ModalDialog
        open={open}
        onClick={this.handleClose}
        className="modContainer"
      >
        <div className="modBody" onClick={(evt) => evt.preventDefault()}>
          <Close
            onClick={this.props.onRequestClose}
          >
            X
          </Close>
          <Title>{title}</Title>
          <p>{subtitle}</p>
          {body}
        </div>
      </ModalDialog>
    );
  }
}

export default LioModal;
