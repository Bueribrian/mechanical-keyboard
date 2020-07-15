import React, { Component } from "react";
import styled from "styled-components";
import KeycapComponent from "../keycap/KeycapComponent";
// import adjust from '../utils'
import KeySound1 from "../../assets/sounds/keycap-sound-1.mp3";
import KeySound2 from "../../assets/sounds/keycap-sound-2.mp3";
import KeySound3 from "../../assets/sounds/keycap-sound-3.mp3";
const audio = new Audio(KeySound1);
const audio2 = new Audio(KeySound2);
const audio3 = new Audio(KeySound3);


const Keyboard = styled.div`
  width: 980px;
  height: auto;
  margin: 0 auto;
  display:grid;
  grid-gap:.1rem;
  grid-template-columns:repeat(29,1fr);
  grid-template-rows:repeat(4,1fr);
  justify-content:center;
  background:${props => props.background2};
  padding:.2rem;
  margin-top:15rem;
  border-radius:8px;
`;

export default class KeyboardComponent extends Component {
  constructor() {
    super();
    this.state = {
      keycapsArray: [
        {
          code: "`",
          color: "#fff",
          size:'2',
          text:'`',
          ref: React.createRef(),
        },
        {
          code: "1",
          color: "#fff",
          size:'2',
          text:'1',
          ref: React.createRef(),
        },
        {
          code: "2",
          color: "#fff",
          size:'2',
          text:'2',
          ref: React.createRef(),
        },
        {
          code: "3",
          color: "#fff",
          size:'2',
          text:'3',
          ref: React.createRef(),
        },
        {
          code: "4",
          color: "#fff",
          size:'2',
          text:'4',
          ref: React.createRef(),
        },
        {
          code: "5",
          color: "#fff",
          size:'2',
          text:'5',
          ref: React.createRef(),
        },
        {
          code: "6",
          color: "#fff",
          size:'2',
          text:'6',
          ref: React.createRef(),
        },
        {
          code: "7",
          color: "#fff",
          size:'2',
          text:'7',
          ref: React.createRef(),
        },
        {
          code: "8",
          color: "#fff",
          size:'2',
          text:'8',
          ref: React.createRef(),
        },
        {
          code: "9",
          color: "#fff",
          size:'2',
          text:'9',
          ref: React.createRef(),
        },
        {
          code: "0",
          color: "#fff",
          size:'2',
          text:'0',
          ref: React.createRef(),
        },
        {
          code: "-",
          color: "#fff",
          size:'2',
          text:'-',
          ref: React.createRef(),
        },
        {
          code: "=",
          color: "#fff",
          size:'2',
          text:'+',
          ref: React.createRef(),
        },
        {
          code: "Backspace",
          color: "#fff",
          size:'3',
          text:'Backspace',
          ref: React.createRef(),
        },
        {
          code: "Tab",
          color: "#fff",
          size:'3',
          text:'Tab',
          ref: React.createRef(),
        },
        {
          code: "q",
          color: "#fff",
          size:'2',
          text:'q',
          ref: React.createRef(),
        },
        {
          code: "w",
          color: "#fff",
          size:'2',
          text:'w',
          ref: React.createRef(),
        },
        {
          code: "e",
          color: "#fff",
          size:'2',
          text:'e',
          ref: React.createRef(),
        },
        {
          code: "r",
          color: "#fff",
          background: "#aaa",
          size:'2',
          text:'r',
          ref: React.createRef(),
        },
        {
          code: "t",
          color: "#fff",
          size:'2',
          text:'t',
          ref: React.createRef(),
        },
        {
          code: "y",
          color: "#fff",
          size:'2',
          text:'y',
          ref: React.createRef(),
        },
        {
          code: "u",
          color: "#fff",
          size:'2',
          text:'u',
          ref: React.createRef(),
        },
        {
          code: "i",
          color: "#fff",
          size:'2',
          text:'i',
          ref: React.createRef(),
        },
        {
          code: "o",
          color: "#fff",
          size:'2',
          text:'o',
          ref: React.createRef(),
        },
        {
          code: "p",
          color: "#fff",
          size:'2',
          text:'p',
          ref: React.createRef(),
        },
        {
          code: "[",
          color: "#fff",
          size:'2',
          text:'[',
          ref: React.createRef(),
        },
        {
          code: "]",
          color: "#fff",
          size:'2',
          text:']',
          ref: React.createRef(),
        },
        {
          code: "\\",
          chadCode: "92",
          color: "#fff",
          size:'2',
          text:'\\',
          ref: React.createRef(),
        },
        {
          code: "CapsLock",
          chadCode: "92",
          color: "#fff",
          size:'4',
          text:'Caps Lock',
          ref: React.createRef(),
        },
        {
          code: "a",
          chadCode: "92",
          color: "#fff",
          size:'2',
          text:'a',
          ref: React.createRef(),
        },
        {
          code: "s",
          chadCode: "92",
          color: "#fff",
          size:'2',
          text:'s',
          ref: React.createRef(),
        },
        {
          code: "d",
          chadCode: "92",
          color: "#fff",
          size:'2',
          text:'d',
          ref: React.createRef(),
        },
        {
          code: "f",
          chadCode: "92",
          color: "#fff",
          size:'2',
          text:'f',
          ref: React.createRef(),
        },
        {
          code: "g",
          chadCode: "92",
          color: "#fff",
          size:'2',
          text:'g',
          ref: React.createRef(),
        },
        {
          code: "h",
          chadCode: "h",
          color: "#fff",
          size:'2',
          text:'h',
          ref: React.createRef(),
        },
        {
          code: "j",
          color: "#fff",
          size:'2',
          text:'j',
          ref: React.createRef(),
        },
        {
          code: "k",
          color: "#fff",
          size:'2',
          text:'k',
          ref: React.createRef(),
        },
        {
          code: "l",
          color: "#fff",
          size:'2',
          text:'l',
          ref: React.createRef(),
        },
        {
          code: ";",
          color: "#fff",
          size:'2',
          text:';',
          ref: React.createRef(),
        },
        {
          code: "'",
          color: "#fff",
          size:'2',
          text:"'",
          ref: React.createRef(),
        },
        {
          code: "Enter",
          color: "#fff",
          size:'3',
          text:'Enter',
          ref: React.createRef(),
        },
        {
          code: "ShiftlEFT",
          color: "#fff",
          size:'5',
          text:'Shift',
          ref: React.createRef(),
        },
        {
          code: "z",
          color: "#fff",
          size:'2',
          text:'z',
          ref: React.createRef(),
        },
        {
          code: "x",
          color: "#fff",
          size:'2',
          text:'x',
          ref: React.createRef(),
        },
        {
          code: "c",
          color: "#fff",
          size:'2',
          text:'c',
          ref: React.createRef(),
        },
        {
          code: "v",
          color: "#fff",
          size:'2',
          text:'v',
          ref: React.createRef(),
        },
        {
          code: "b",
          color: "#fff",
          size:'2',
          text:'b',
          ref: React.createRef(),
        },
        {
          code: "n",
          color: "#fff",
          size:'2',
          text:'n',
          ref: React.createRef(),
        },
        {
          code: "m",
          color: "#fff",
          size:'2',
          text:'m',
          ref: React.createRef(),
        },
        {
          code: ",",
          color: "#fff",
          size:'2',
          text:',',
          ref: React.createRef(),
        },
        {
          code: ".",
          color: "#fff",
          size:'2',
          text:'.',
          ref: React.createRef(),
        },
        {
          code: "/",
          color: "#fff",
          size:'2',
          text:'/',
          ref: React.createRef(),
        },
        {
          code: "ShiftRight",
          color: "#fff",
          size:'4',
          text:'Shift',
          ref: React.createRef(),
        },
        {
          code: "Control",
          color: "#fff",
          size:'2',
          text:'Ctrl',
          ref: React.createRef(),
        },
        {
          code: "",
          color: "#fff",
          size:'2',
          text:'',
          ref: React.createRef(),
        },
        {
          code: "",
          color: "#fff",
          size:'2',
          text:'⬜',
          ref: React.createRef(),
        },

        {
          code: "AltRight",
          color: "#fff",
          size:'2',
          text:'Alt',
          ref: React.createRef(),
        },
        {
          code: " ",
          color: "#fff",
          size:'17',
          text:'Space',
          ref: React.createRef(),
        },
        {
          code: "AltLeft",
          color: "#fff",
          size:'2',
          text:'Alt',
          ref: React.createRef(),
        },
        {
          code: "AltLeft",
          color: "#fff",
          size:'2',
          text:'Ctrl',
          ref: React.createRef(),
        },
      ],
      keyBackground:"#2e2e2e",
      keyBackground2:"#f514aa",
      keyColor:"#fff",
      volume:1
    };
  }
  handleKeyPressed(ref){
    setTimeout(() => {
        if(ref){
            ref.current.parentNode.style.transform = "scale(1)";
            // ref.current.parentNode.style.filter = "brightness(100%)";
        }
      }, 100);
  }
  
  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      let keypressed = event.key;
      let keyref;
      let randomNumber = Math.floor(Math.random() * 3)
      console.log(randomNumber)
      switch(randomNumber){
        case 0:
          audio.currentTime = 0.25;
          audio.volume = this.state.volume
          audio.play();
          break;
        case 1:
          audio2.currentTime = 0.25;
          audio2.volume = this.state.volume
          audio2.play();
          break;
        case 2:
          audio3.currentTime = 0.25;
          audio3.volume = this.state.volume
          audio3.play();
          break;
        default:
          audio.currentTime = 0.25;
          audio.volume = this.state.volume
          audio.play();
          break;
      }

      console.log(event)

      this.setState((prev) => ({
        keycapsArray: prev.keycapsArray.map((key) => {
          if (key.code.toLowerCase() === keypressed.toLowerCase()) {
            key.background = "#000";
            console.log(key.ref.current.parentNode)
            key.ref.current.parentNode.style.transition = ".2s all";
            key.ref.current.parentNode.style.transform = "scale(0.85)";
            // key.ref.current.parentNode.style.filter = "brightness(60%)";
            keyref = key.ref;
          }
          return key;
        }),
      }));

      this.handleKeyPressed(keyref)

    });
  }
  render() {
    return (
      <>
      <input autoFocus>
      </input>
      <Keyboard background2={this.state.keyBackground2}>
        {this.state.keycapsArray.map((keycap) => (
          <KeycapComponent
            reference={keycap.ref}
            key={keycap.code}
            size={keycap.size}
            text={keycap.text}
            color={keycap.color}
            background={this.state.keyBackground}
            background2={this.state.keyBackground2}
          />
        ))}
      </Keyboard>
      </>
    );
  }
}
