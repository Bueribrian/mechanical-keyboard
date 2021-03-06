import React, { Component } from "react";
import styled from "styled-components";

const ControllerDiv = styled.div`
  width: 200px;
  position: fixed;
  top: 20px;
  right: 20px;
  height: auto;
  min-height: 40px;
  transition: .3s all;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FormGroup = styled.div`
  width: 90%;
  margin: 1rem auto;
  & input {
    width: 100%;
  }
  & span {
    display: block;
    color: #fff;
    font-weight: bold;
    padding-bottom: 0.3rem;
  }
`;

class ControllerStatsComponent extends Component {
  state = {
    menuClosed: false,
  };
  render() {
    return (
      <ControllerDiv>
        <button
          className="hiddeButton"
          onClick={() => this.setState({ menuClosed: !this.state.menuClosed })}
        >
          Menu {!this.state.menuClosed ? <b>-</b> : <b>+</b>}
        </button>
        {!this.state.menuClosed ?  <><FormGroup>
          <span>Volume: {this.props.volume}</span>
          <input
            type="range"
            step=".1"
            defaultValue={this.props.volume}
            min="0"
            max="1.0"
            onChange={(event) => {
              this.props.handleVolume(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <span>Keycap color</span>
          <input
            type="color"
            value={this.props.background}
            onChange={(event) =>
              this.props.handleBackground(event.target.value)
            }
          />
        </FormGroup>
        <FormGroup>
          <span>Font color</span>
          <input
            type="color"
            value={this.props.fontColor}
            onChange={(event) => this.props.handleFontColor(event.target.value)}
          />
        </FormGroup></> : <></>}
       
      </ControllerDiv>
    );
  }
}

export default ControllerStatsComponent;
