import styled from 'styled-components';

export const TextBox = styled.input`
  margin: 5px 0;
  border: 1px solid #323544;
  border-radius: 5px;
  height: 40px;
  padding-left: 10px;
  background: #4f5560;
  color: white;
  font-size: 18px;
  font-weight: lighter;
  width: 300px;
  max-width: 100%;
  transition: all 0.3s ease-in;
  &:focus {
    outline: none !important;
    border:1px solid #21ff58;
    box-shadow: 0 0 5px #6dff91;
  }
`;

export const CircleButton = styled.p`
    background: rgb(37, 228, 122);
    color: white;
    line-height: 32px;
    text-align: center;
    width: 32px;
    text-decoration: none;
    font-size: 24px;
    margin: 1em 10px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
    box-shadow: 1px 1px 3px #000;
    cursor: pointer;
    &:hover {
      -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);
      -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);
      box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);
      color: rgb(38, 40, 49);
      background: #37e865 radial-gradient(circle, transparent 1%, #33e862 1%) center/15000%;
    }
    &:active {
      background-color: #66ff8d;
      background-size: 100%;
      transition: background 0s;
    }
`;

export const IconButton = styled.p`
    background: rgb(37, 228, 122);
    color: white;
    line-height: 36px;
    text-align: center;
    width: 36px;
    text-decoration: none;
    font-size: 32px;
    margin: 10px 10px;
    -webkit-border-radius: 36px;
    -moz-border-radius: 36px;
    border-radius: 36px;
    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
    box-shadow: 1px 1px 3px #000;
    cursor: pointer;
    &:hover {
      -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);
      -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);
      box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);
      color: rgb(38, 40, 49);
      background: #37e865 radial-gradient(circle, transparent 1%, #33e862 1%) center/15000%;
    }
    &:active {
      background-color: #66ff8d;
      background-size: 100%;
      transition: background 0s;
    }
`;

export const Button = styled.div`
  border: none;
  font-size: 18px;
  font-weight: lighter;
  padding: 10px 25px;
  border: 1px solid #333;
  border-radius: 5px;
  background: #2cd659;
  color: #ddffe6;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  transition: all 0.3s ease-in;
  &:hover {
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);
    color: white;
    background: #37e865 radial-gradient(circle, transparent 1%, #33e862 1%) center/15000%;
  }
  &:active {
    background-color: #66ff8d;
    background-size: 100%;
    transition: background 0s;
  }
`;

export const List = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 8px 0;
  margin: 1em 0;
  max-height: 40vh;
  overflow-y: scroll;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 15px 10px;
  border-bottom: ${props => (props.selected ? '1px solid #25e47a' : '1px solid #888')};
  transition: 0.12s ease-in all;
  cursor: pointer;
  color: ${props => (props.selected ? '#25e47a' : 'white')};
  &:hover {
    background: rgba(255,255,255, 0.1);
  }
`;
