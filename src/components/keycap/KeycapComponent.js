import React from 'react'
import styled  from 'styled-components'
import adjust from '../utils'

const KeyDivContainer = styled.div`
grid-column:auto/span ${props => props.size};
height:100%;
margin:.1rem;
text-align: right;
box-sizing:border-box;
`

const KeyDiv = styled.div`
width:98%;
height:100%;
background:${props=>adjust(props.background,30)};
color:${props => props.fontColor};
// text-shadow: 0px 1px 1px ${props => props.fontColor};
stext-transform:uppercase;
text-align:right;
font-family: 'Roboto', sans-serif;
font-size:.8rem;
border-radius:4px;
transition:.3s all;
box-shadow: 0 0 10px rgba(0,0,0,0.2);
border-color: ${props=>adjust(props.background,5)} ${props=>adjust(props.background,40)} ${props=> adjust(props.background,5)};
border-width: 3px 7px 10px;
border-style: solid;
box-sizing:border-box;
padding:.2rem .8rem 0rem 0rem;
z-index:5;
`

export default function KeycapComponent(props) {
    return(
        <KeyDivContainer  id={props.id} background={props.background}  fontColor={props.fontColor} color={props.color} size={props.size}>
            <KeyDiv onMouseEnter={()=>props.searchKeycap(props.reference)} background={props.background} fontColor={props.fontColor} color={props.color} ref={props.reference}>
                {props.text}
            </KeyDiv>
        </KeyDivContainer>
    )
}
