import React, { Component } from "react";
import styled from "styled-components";
import KeycapComponent from "../keycap/KeycapComponent";
// import adjust from '../utils'
import KeySound1 from "../../assets/sounds/keycap-sound-1.mp3";
import KeySound2 from "../../assets/sounds/keycap-sound-2.mp3";
import KeySound3 from "../../assets/sounds/keycap-sound-3.mp3";
import ControllerStatsComponent from "../controllerStats/ControllerStatsComponent";
const audio = new Audio(KeySound1);
const audio2 = new Audio(KeySound2);
const audio3 = new Audio(KeySound3);

const KeyboardContainer = styled.div`
  width: 980px;
  height: auto;
  box-sizing:border-box;
  margin: 0 auto;
  margin-top:15rem;
  display:flex;
  justify-content:center;
  align-items:center;
  background:gray;
  padding:3rem;
  border-radius:4px;
  box-shadow:3px 3px 8px rgba(0,0,0,0.3);
`

const Keyboard = styled.div`
  display:grid;
  grid-gap:.2rem 0rem;
  grid-template-columns:repeat(29,1fr);
  grid-template-rows:repeat(5,50px);
  justify-content:center;
  background:#000;
  padding:.4rem;
  padding-bottom:.7rem;
  border-radius:8px;
`;

export default class KeyboardComponent extends Component {
  constructor() {
    super();
    this.state = {
      keycapsArray: [
        {
          keycode:'',
          code: "Backquote",
          color: "#fff",
          size:'2',
          text:'`',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Digit1",
          color: "#fff",
          size:'2',
          text:'1',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Digit2",
          color: "#fff",
          size:'2',
          text:'2',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Digit3",
          color: "#fff",
          size:'2',
          text:'3',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Digit4",
          color: "#fff",
          size:'2',
          text:'4',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Digit5",
          color: "#fff",
          size:'2',
          text:'5',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Digit6",
          color: "#fff",
          size:'2',
          text:'6',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Digit7",
          color: "#fff",
          size:'2',
          text:'7',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Digit8",
          color: "#fff",
          size:'2',
          text:'8',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Digit9",
          color: "#fff",
          size:'2',
          text:'9',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Digit0",
          color: "#fff",
          size:'2',
          text:'0',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Minus",
          color: "#fff",
          size:'2',
          text:'-',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Equal",
          color: "#fff",
          size:'2',
          text:'+',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Backspace",
          color: "#fff",
          size:'3',
          text:'Backspace',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Tab",
          color: "#fff",
          size:'3',
          text:'Tab',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyq",
          color: "#fff",
          size:'2',
          text:'q',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyw",
          color: "#fff",
          size:'2',
          text:'w',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keye",
          color: "#fff",
          size:'2',
          text:'e',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyr",
          color: "#fff",
          background: "#aaa",
          size:'2',
          text:'r',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyt",
          color: "#fff",
          size:'2',
          text:'t',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyy",
          color: "#fff",
          size:'2',
          text:'y',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyu",
          color: "#fff",
          size:'2',
          text:'u',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyi",
          color: "#fff",
          size:'2',
          text:'i',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyo",
          color: "#fff",
          size:'2',
          text:'o',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyp",
          color: "#fff",
          size:'2',
          text:'p',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "BracketLeft",
          color: "#fff",
          size:'2',
          text:'[',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "BracketRight",
          color: "#fff",
          size:'2',
          text:']',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Backslash",
          chadCode: "92",
          color: "#fff",
          size:'2',
          text:'\\',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "CapsLock",
          chadCode: "92",
          color: "#fff",
          size:'4',
          text:'Caps Lock',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keya",
          chadCode: "92",
          color: "#fff",
          size:'2',
          text:'a',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keys",
          chadCode: "92",
          color: "#fff",
          size:'2',
          text:'s',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyd",
          chadCode: "92",
          color: "#fff",
          size:'2',
          text:'d',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyf",
          chadCode: "92",
          color: "#fff",
          size:'2',
          text:'f',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyg",
          chadCode: "92",
          color: "#fff",
          size:'2',
          text:'g',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyh",
          chadCode: "h",
          color: "#fff",
          size:'2',
          text:'h',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyj",
          color: "#fff",
          size:'2',
          text:'j',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyk",
          color: "#fff",
          size:'2',
          text:'k',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyl",
          color: "#fff",
          size:'2',
          text:'l',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Semicolon",
          color: "#fff",
          size:'2',
          text:';',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Quote",
          color: "#fff",
          size:'2',
          text:"'",
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Enter",
          color: "#fff",
          size:'3',
          text:'Enter',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "ShiftLeft",
          color: "#fff",
          size:'5',
          text:'Shift',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyz",
          color: "#fff",
          size:'2',
          text:'z',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyx",
          color: "#fff",
          size:'2',
          text:'x',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyc",
          color: "#fff",
          size:'2',
          text:'c',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyv",
          color: "#fff",
          size:'2',
          text:'v',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyb",
          color: "#fff",
          size:'2',
          text:'b',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keyn",
          color: "#fff",
          size:'2',
          text:'n',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Keym",
          color: "#fff",
          size:'2',
          text:'m',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Comma",
          color: "#fff",
          size:'2',
          text:',',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Period",
          color: "#fff",
          size:'2',
          text:'.',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Slash",
          color: "#fff",
          size:'2',
          text:'/',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "ShiftRight",
          color: "#fff",
          size:'4',
          text:'Shift',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "ControlLeft",
          color: "#fff",
          size:'2',
          text:'Ctrl',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Empty1",
          color: "#fff",
          size:'2',
          text:'',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Empty2",
          color: "#fff",
          size:'2',
          text:'⬜',
          ref: React.createRef(),
        },

        {
          keycode:'',
          code: "AltLeft",
          color: "#fff",
          size:'2',
          text:'Alt',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "Space",
          color: "#fff",
          size:'17',
          text:' ',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "AltRight",
          color: "#fff",
          size:'2',
          text:'Alt',
          ref: React.createRef(),
        },
        {
          keycode:'',
          code: "ControlRight",
          color: "#fff",
          size:'2',
          text:'Ctrl',
          ref: React.createRef(),
        },
      ],
      keyBackground:"#64f2da",
      keyBackground2:"#222222",
      keyColor:"#fff",
      volume:1
    };
  }
  handleKeyPressed(ref){
    setTimeout(() => {
        if(ref){
            ref.current.parentNode.style.transform = "scale(1)";
            ref.current.parentNode.style.borderRadius = "4px";
            // ref.current.parentNode.style.filter = "brightness(100%)";
        }
      }, 100);
  }
  
  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      let keypressed = event.code;
      let randomNumber = Math.floor(Math.random() * 3)
      let keyref;
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

      console.log(event.keyCode)
      console.log(event)

      this.setState((prev) => ({
        keycapsArray: prev.keycapsArray.map((key) => {
          if (key.code.toLowerCase() === keypressed.toLowerCase()) {
            key.background = "#000";
            console.log(key.ref.current.parentNode)
            key.ref.current.parentNode.style.transition = ".2s all";
            key.ref.current.parentNode.style.transform = "scale(0.89, 0.85)";
            key.ref.current.parentNode.style.borderRadius = "1px";
            // key.ref.current.parentNode.style.filter = "brightness(60%)";
            keyref = key.ref;
          }
          return key;
        }),
      }));
      this.handleKeyPressed(keyref)

    });
    window.addEventListener("keyup",()=>{
    })
  }
  render() {
    return (
      <>
      <input autoFocus>
      </input>
      <KeyboardContainer>
        <Keyboard background2={this.state.keyBackground2}>
          {this.state.keycapsArray.map((keycap) => (
            <KeycapComponent
              id={keycap.code}
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
      </KeyboardContainer>

      <ControllerStatsComponent />
      </>
    );
  }
}
