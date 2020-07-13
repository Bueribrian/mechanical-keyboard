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
background:${props => props.background};
// box-shadow:0px 0px 5px 0px ${props => adjust(props.color,-20)},inset 5px 5px 15px 0px #000;
justify-content:flex-end;
padding:.6rem .3rem .3rem .6rem;
padding-bottom:.15rem;
transition:.3s all;
cursor:pointer;
`
const KeyDiv = styled.div`
width:98%;
height:100%;
background:${props=>props.background};
color:${props => props.color};
stext-transform:uppercase;
text-align:center;
font-family: 'Roboto', sans-serif;
font-size:1.2rem;
border-radius:4px;
transition:.3s all;
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
