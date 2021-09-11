import search from '../../Assets/search.png'
import {
    LoginContainer,
    ChatWindowSM,
    ChatBubble,
    TypeWriter,
    SendBtn,
    LoginButton,
    BubbleContainer,
    TypingBubble,
    FadedText,
    AddBtn,
    Message,
    LogoText
} from '../Styles/Styling'
import Logo from '../../Assets/cryptic-logo.svg'

import { Button } from '@material-ui/core'

export default function Login() {
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


                    <div style={{ display: 'flex', justifyContent: 'space-between', height: '1rem', width: '20%', alignItems: 'center' }}>
                        <TypingBubble />
                        <TypingBubble />
                        <TypingBubble />

                    </div>


                </BubbleContainer>


                <TypeWriter>

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
            <Button variant='outlined' style={{ borderColor: 'white', color: 'white', textTransform: 'none', width: '20rem' }}>

                <div style={{ margin: '5px 10px 0px 0px' }}>
                    <img src={search} alt="" style={{ width: '1.2rem' }} />
                </div>
                Login using google
            </Button>
        </LoginContainer>
    )
}
