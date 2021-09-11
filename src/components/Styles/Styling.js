
import styled from 'styled-components'

// Colors used int this project
const prime = '#312C40'
const second = '#2D2839'
const third = '#3C374C'
const accent = '#5B42AC'
const faded = '#9E9E9E'

// Styled Components 

export const CrypticContainer = styled.div`
    width: 101vw;
    height: 101vh;
    background-color: ${accent};
    display: flex;
    justify-content: center;
    align-items: center;

`
// Container that covers the entirity of the screen 
export const Container = styled.div`
    
    width: 90vw;
    height: 90vh;
    background-color: ${prime};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

export const LoginContainer = styled.div`

    height: 39rem;
    width: 25rem;
    background-color: ${second};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;

`

export const LogoText = styled.h1`
    font-family: DM Sans;
    font-weight: 500;
    color:white;
    font-size: 2rem;
    margin-left: ${props => props.margin ? (props.margin) : ('0rem')};

`

export const ChatWindowSM = styled.div`
    position: relative;
    margin-top: 2rem;
    height: 80%;
    width: 80%;
    background-color: ${prime};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ChatsContainer = styled.div`
    padding: 1rem;
    height: 70%;
    width:90%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
        width: 1rem;
    }

    &::-webkit-scrollbar-thumb{
        outline: 1px solid ${third};
    }

`

export const Sender = styled.div`

    height:4rem;
    width: 95%;
    position: absolute;
    top:1rem;
    left:1rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    

`

export const OptionsContainer = styled.div`
    width: 100%;
    height: 60%;
`

export const ChatWindowBG = styled.div`
    position: relative;
    height: 90%;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
`

export const Chat = styled.div`
    margin-bottom: 2rem;
    height: 10rem;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: ${props => props.sender ? ('flex-start') : ('flex-end')};

`


export const OptionsWindow = styled.div`

width: 26%;
height: 90%;
background-color: ${second};
border-radius: 5px;
display:flex;
justify-content: center;
align-items: center;

`
export const Options = styled.div`
   
    width: 20%;
    height: 90%;
   
    background-color: ${prime};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;


`

export const OptionsBelow = styled.div`
    width: 100%;
    height: 20%;

`

export const OptText = styled.h4`
    font-family: DM Sans;
    color:white;
    font-weight: 500;
`

export const LogoContainer = styled.div`

width: 100%;
height: 10%;
display: flex;
justify-content: flex-start;
align-items: center;

`



export const ChatBubble = styled.div`
   
    height: 3.2rem;
    width:12rem;
    background-color: ${props => props.diff ? (`${third}`) : (`${accent}`)};
    border-radius: ${props => props.diff ? ('20px 20px 0 25px') : ('20px 20px 25px 0')};
    display: flex;
    align-items:center;
    
`

export const ChatBubbleBG = styled.div`
    padding:0 1rem 0 1rem;
    min-height: 3rem;
    max-width:15rem;
    background-color: ${props => props.diff ? (`${third}`) : (`${accent}`)};
    border-radius: ${props => props.diff ? ('20px 20px 0 25px') : ('20px 20px 25px 0')};
    display: flex;
`

export const BubbleContainer = styled.div`
    margin:1rem;
    display:flex;
    justify-content: ${props => props.diff ? ('flex-end') : ('flex-start')};
    align-items: center;
    width: 90%;
    height: 4rem;

`

export const ChatText = styled.h4`
    font-family: DM Sans;
    font-weight: 500;
    color:white;

`

export const FadedText = styled.h6`
    font-family: DM Sans;
    color:${faded};
    font-size: 12px;
    text-align: ${props => props.center ? (props.center) : ('left')};
    resize:none;
    text-align: left;
    margin:0 0 0 1rem;
    
`

export const Timestamp = styled.div`

    font-family: DM Sans;
    color:${faded};
    font-size: 12px;
    text-align: ${props => props.sender ? ('left') : ('right')};
    resize:none;
   
    margin:10px 0 0 1rem;  
`

export const Message = styled.div`
    width: 60%;
    background-color: ${third};
    height: 1rem;
    display: flex;
    justify-content: flex-start;

`


export const TypeWriter = styled.div`
    position: absolute;
    bottom: -1rem;
    width: 95%;
    background-color: ${third};
    height: 4rem;
    border-radius: 5px;
    margin-bottom:1rem ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

export const TypeContainer = styled.div`
    height: 3rem;
    width: 75%;
    position: relative;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    
    &::-webkit-scrollbar{
        width: 1rem;
    }

    &::-webkit-scrollbar-thumb{
        outline: 1px solid ${third};
       
    }
    //overflow-y: hidden;


`

export const TypingBubble = styled.div`
    height:1rem;
    width: 1rem;
    border-radius: 100%;
    background-color: ${faded};

`

export const SendBtn = styled.div`
    width: ${props => props.wd ? (props.wd) : ('2rem')};
    height: ${props => props.ht ? (props.ht) : ('2rem')};
    border-radius: 5px;
    background-color: ${accent};
    display: flex;
    justify-content: center;
    align-items: center;
`


export const AddBtn = styled.div`

    width: ${props => props.wd ? (props.wd) : ('2rem')};
    height: ${props => props.ht ? (props.ht) : ('2rem')};
    border-radius: 5px;
    background-color: ${prime};
    display:flex;
    justify-content: center;
    align-items: center;

`


export const LoginButton = styled.button`
    border-color: grey;
    height: 10%;
    width: 70%;
    background-color:inherit;
    box-shadow: none;
    border-style: none;
    cursor: pointer;
    font-size: 1.3rem;
    font-family: 'DM Sans';
    color:#B5B5B5;
    transition: color 0.5s ease;
    display: flex;
    justify-content: space-evenly;
    align-items: center;


    &:hover {
        color: white;
    }

    &:active {
        
        
    }

`


// New Conversations Components 
export const Users = styled.div`
    
    height: 100%;
    width: 90%;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`


export const SearchContainer = styled.div`
    margin-bottom: 2rem;
    width:90%;
    min-height:3rem;
    border-radius: 5px;
    background-color:${third};
    display: flex;
    justify-content: flex-start;
    align-items: center;
`



export const User = styled.div`
    width: 90%;
    height: 3rem;
    display: flex;
    margin: 8px 0 10px 0;
    align-items: center;
    
   
`
export const List = styled.div`
    width: 95%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar{
        width: 1rem;
    }

    &::-webkit-scrollbar-thumb{
        outline: 1px solid ${third};
    }

`

export const Info = styled.div`
    width: 85%;
    display: flex;
    flex-direction: ${props => props.dir ? (props.dir) : ('row')};
    justify-content: flex-start;
    align-items: flex-start;
  
`

export const Avatar = styled.div`
    margin-top:${props => props.mt ? ('0.6rem') : ('0')};
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 50%;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Name = styled.h3`
    font-family:DM Sans;
    font-weight: 400;
    color:white;
    margin: 0.5rem 0 0 1rem;
    text-align:center;
    
`

// Settings components 
export const SettingsContainer = styled.div`
    
    height: 100%;
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const Title = styled.div`
    width: 95%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:1rem 0rem 1rem 0;
    letter-spacing:3px;
    
`
export const TitleText = styled.h3`
    color:white;
    font-family: DM Sans;
    font-weight: 100;

`