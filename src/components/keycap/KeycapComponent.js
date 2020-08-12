import React from 'react'
import styled  from 'styled-components'
import adjust from '../utils'

const KeyDivContainer = styled.div`
grid-column:auto/span ${props => props.size};
height:100%;
margin:.1rem;
text-align: right;
box-sizing:border-box;
position:relative;
cursor:pointer;
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
border-color: ${props=>adjust(props.background,40)} ${props=>adjust(props.background,-5)} ${props=> adjust(props.background,40)};
border-width: 3px 7px 10px;
border-style: solid;
box-sizing:border-box;
padding:.2rem .8rem 0rem 0rem;
z-index:5;
transition: .2s all;


&:hover{
    transform:scale(1.1) translateY(-10%);
    transition: .2s all;
    background:${props=>adjust(props.background,20)};
    border-color: ${props=>adjust(props.background,10)} ${props=>adjust(props.background,15)} ${props=> adjust(props.background,30)};
}
`
const ControllerKeycapDiv = styled.div`
position:absolute;
bottom:-135px;
left:-20px;
width:100px;
height:100px;
box-shadow: 6px 4px 14px 0px rgb(80 80 80 / 20%);
background:#fff;
color:#000;
display:none;
z-index:999;
justify-content:center;
align-items:center;
flex-direction:column;
line-height:2.5;
padding:1rem;
border-radius: 3px;

&::after {
    content: '';
    position: absolute;
    top:-12px;
    left:30px;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #fff;
    border-radius: 3px;

}
`

function displayControllerKeycap(event){
    event.target.parentNode.firstChild.style.display='flex'
}
function hiddenControllerKeycap(id){
    document.querySelector(`#${id}`).firstChild.style.display ='none'

}

export default function KeycapComponent(props) {
    return(
        <KeyDivContainer onMouseEnter={(event)=>{displayControllerKeycap(event)}} onMouseLeave={()=>{hiddenControllerKeycap(props.id)}} id={props.id} background={props.background}  fontColor={props.fontColor} color={props.color} size={props.size}>
            <ControllerKeycapDiv className='controller-keycap' >
                <div class='controller-keycap-wrapper'>
                    Pick a color
                    <input type='color' onChange={(event)=>{props.searchKeycap(props.reference,event.target.value)}} />
                </div>
            </ControllerKeycapDiv>
            <KeyDiv  background={props.background} fontColor={props.fontColor} color={props.color} ref={props.reference}>
                {props.text}
            </KeyDiv>
        </KeyDivContainer>
    )
}
