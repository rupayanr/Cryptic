import search from '../../Assets/search.png'
import {
    LoginContainer,
    ChatWindowSM,
    ChatBubble,
    TypeWriter,
    SendBtn,
    BubbleContainer,
    TypingBubble,
    FadedText,
    AddBtn,
    Message,
    LogoText
} from '../Styles/Styling'
import Logo from '../../Assets/cryptic-logo.svg'
import { useContext } from 'react'
import { Button } from '@material-ui/core'
import { AuthContext } from '../Provider/AuthProvider'


export default function Login() {

    const { login } = useContext(AuthContext)


    return (
        <LoginContainer>
            <ChatWindowSM>
                <BubbleContainer>
                    <ChatBubble>
                        <div>
                            <FadedText>

                            </FadedText>
                        </div>

                    </ChatBubble>
                </BubbleContainer>


                <BubbleContainer diff={true}>
                    <img src={Logo} alt="" />
                    <ChatBubble diff={true}>
                        <LogoText margin='2rem'>
                            Cryptic
                        </LogoText>
                    </ChatBubble>
                </BubbleContainer>

                <BubbleContainer>
                    <ChatBubble>

                    </ChatBubble>
                </BubbleContainer>

                <BubbleContainer diff={true}>

                    <ChatBubble diff={true}>

                    </ChatBubble>
                </BubbleContainer>


                <BubbleContainer>


                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            height: '1rem',
                            width: '20%',
                            alignItems: 'center',
                            marginBottom: '3rem'
                        }}>
                        <TypingBubble />
                        <TypingBubble />
                        <TypingBubble />

                    </div>


                </BubbleContainer>


                <TypeWriter sm={true}>

                    <AddBtn>
                    </AddBtn>
                    <Message>
                        <FadedText>
                            Type something here..
                        </FadedText>
                    </Message>
                    <SendBtn>

                    </SendBtn>

                </TypeWriter>
            </ChatWindowSM>

            {/* <LoginButton>
                <img src={search} alt="" style={{ width: '1.5rem' }} />
                Login using gmail
            </LoginButton> */}
            <Button

                onClick={() => login()}
                style={{
                    borderColor: 'white',
                    color: 'white',
                    textTransform: 'none',
                    width: '20rem',
                    fontSize: '1rem'
                }}>

                <div style={{ margin: '5px 10px 0px 0px' }}>
                    <img src={search} alt="" style={{ width: '1.5rem' }} />
                </div>
                Login using google
            </Button>
        </LoginContainer>
    )
}
