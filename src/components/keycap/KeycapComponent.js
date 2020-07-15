import React from 'react'
import styled  from 'styled-components'
import adjust from '../utils'

const KeyDivContainer = styled.div`
grid-column:auto/span ${props => props.size};
height:40px;
display:flex;
margin:.1rem;
justify-content:center;
aling-items:start;
border-radius:4px;
background:${props => adjust(props.background,-5)};
// box-shadow:0px 0px 5px 0px ${props => adjust(props.color,-20)},inset 5px 5px 15px 0px #000;
justify-content:flex-end;
padding:.6rem .3rem .3rem .6rem;
padding-bottom:.3rem;
transition:.3s all;
cursor:pointer;
position:relative;
overflow:hidden;
z-index:4;

&::after{
    content:"";
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:.6rem;
    background:${props=>adjust(props.background,-30)};
    z-index:2;
    clip-path: polygon(0 0, 100% 0, 95% 100%, 10% 100%);
    filter: blur(2px);
}
&::before{
    content:"";
    position:absolute;
    bottom:0px;
    left:0px;
    width:100%;
    height:.3rem;
    background:${props=>adjust(props.background,-30)};
    z-index:2;
    transform:rotate(180deg);
    filter: blur(2px);
    clip-path: polygon(0 0, 100% 0, 95% 100%, 10% 100%);
}
`
const KeyDiv = styled.div`
width:98%;
height:100%;
background:${props=>adjust(props.background,20)};
color:${props => props.background2};
stext-transform:uppercase;
text-align:center;
font-family: 'Roboto', sans-serif;
font-size:.9rem;
border-radius:4px;
transition:.3s all;
z-index:5;
`

export default function KeycapComponent(props) {
    return(
        <KeyDivContainer background={props.background} background2={props.background2} color={props.color} size={props.size}>
            <KeyDiv id={`key-${props.letter}`} background={props.background} background2={props.background2} color={props.color} ref={props.reference}>
                {props.text}
            </KeyDiv>
        </KeyDivContainer>
    )
}
