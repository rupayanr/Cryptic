import React, { useState, useEffect, useRef } from 'react'
import {
    Container,
    ChatWindowBG,
    OptionsWindow,
    LogoContainer,
    Options,
    LogoText,
    OptionsContainer,
    OptionsBelow,
    TypeContainer,
    OptText,
    ChatBubbleBG,
    ChatText,
    TypeWriter,
    SendBtn,
    AddBtn,
    CrypticContainer,
    Chat,
    User,
    Avatar,
    Info,
    FadedText,
    Name,
    Sender,
    Timestamp,
    ChatsContainer


} from '../Styles/Styling'
import { IconButton, Button, Input, TextareaAutosize, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { Plus, MessageSquare, Users, Settings, Star, AlertTriangle, AlertOctagon, LogOut, Send, Trash, User as Usicon, Bell } from 'react-feather'
import Logo from '../../Assets/cryptic-logo.svg'
import NewConversation from './NewConversation'
import Chats from './Chats'
import Favourites from './Favourites'
import Deleted from './Deleted'
import SettingsPage from './Settings'


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function Home() {

    const [newConvo, setNewConvo] = useState(false)
    const [chats, setChats] = useState(false)
    const [contacts, setContacts] = useState(false)
    const [fav, setFav] = useState(false)
    const [settings, setSettings] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const [star, setStar] = useState(false)
    const [del, setDel] = useState(false)
    const [notif, setNotif] = useState(false)


    const [states, setStates] = useState(
        [
            {
                type: 'newConvo',
                state: newConvo,
                set: setNewConvo,
            },

            {
                type: 'chats',
                state: chats,
                set: setChats
            },

            {
                type: 'fav',
                state: fav,
                set: setFav
            },

            {
                type: 'contacts',
                state: contacts,
                set: setContacts

            },

            {
                type: 'settings',
                state: settings,
                set: setSettings
            },

            {
                type: 'deleted',
                state: deleted,
                set: setDeleted

            }


        ]
    )


    const options = [
        {
            // Start a new chat open's up the contacts
            type: 'newConvo',
            icon: <Plus size={18} />,
            option: 'New Conversation'
        },

        {   // Previous Chats with chat history
            type: 'chats',
            icon: <MessageSquare size={18} />,
            option: 'Chats'
        },



        {
            // Archived and favoruited chats 
            type: 'fav',
            icon: <Star size={18} />,
            option: 'Favourites'
        },

        {
            type: 'deleted',
            icon: <Trash size={18} />,
            option: 'Deleted'
        },

        {
            // Profile settings 
            type: 'settings',
            icon: <Settings size={18} />,
            option: 'Settings'
        }

    ]

    const optionBelow = [
        {
            icon: <AlertTriangle size={18} />,
            option: 'Report an issue'
        },
        {
            icon: <AlertOctagon size={18} />,
            option: 'About us'
        },
        {
            icon: <LogOut size={18} />,
            option: 'Logout'
        }
    ]

    const senderOpt = [
        { icon: <Star size={18} />, type: 'star', set: setStar },
        { icon: <Trash size={18} />, type: 'del', set: setDel },
        { icon: <Bell size={18} />, type: 'notif', set: setNotif }

    ]

    const handleStates = (type) => {
        states.forEach((object) => {
            if (object.type === type) {
                console.log(object)
                const { set } = object;
                set(true)

            }
            else {
                const { set } = object;
                set(false)
            }

        })


    }


    const handleSenderOpt = (type) => {
        console.log(type)
        senderOpt.forEach((object) => {

            if (object.type === type) {
                const { set } = object
                set(true)
            }
        })

    }

    return (
        <CrypticContainer>
            <Container>
                <Options>
                    <LogoContainer>
                        <IconButton>
                            <img src={Logo} alt="" style={{ height: '2rem' }} />
                        </IconButton>

                        <LogoText >
                            Cryptic
                        </LogoText>
                    </LogoContainer>

                    <OptionsContainer>

                        {options.map((item, index) => {
                            const { icon, option, type } = item;
                            return (

                                <Button
                                    onClick={() => handleStates(type)}
                                    style={{
                                        width: '70%',
                                        height: '15%',
                                        justifyContent: 'flex-start',
                                        textTransform: 'none',


                                    }}>
                                    <IconButton
                                        disabled
                                        style={{ color: 'white' }}>
                                        {icon}
                                    </IconButton>
                                    <OptText>{option}</OptText>
                                </Button>


                            )
                        })}

                    </OptionsContainer>

                    <OptionsBelow>
                        {optionBelow.map((item, index) => {
                            const { icon, option } = item;
                            return (

                                <Button style={{ width: '70%', height: '30%', justifyContent: 'flex-start', textTransform: 'none' }}>
                                    <IconButton disabled style={{ color: 'white' }}>
                                        {icon}
                                    </IconButton>
                                    <OptText>{option}</OptText>
                                </Button>


                            )
                        })}
                    </OptionsBelow>
                </Options>

                <OptionsWindow>
                    {fav ? (<Favourites />) : (<></>)
                    }

                    {newConvo ?
                        (<NewConversation />) : (<></>)
                    }

                    {chats ?
                        (<Chats />) : (<></>)
                    }

                    {settings ?
                        (<SettingsPage />) : (<></>)
                    }

                    {deleted ? (<Deleted />) : (<></>)}

                </OptionsWindow>

                <ChatWindowBG>
                    <Sender>
                        <Button style={{ width: '60%', textTransform: 'none', marginBottom: '1rem' }}>
                            <User>
                                <Avatar mt={true}>
                                    <IconButton>
                                        <Usicon />
                                    </IconButton>
                                </Avatar>
                                <Info dir='column'>
                                    <Name>
                                        Rupayan Roy
                                    </Name>
                                    <FadedText>
                                        rupayan.roy @gmail.com
                                    </FadedText>
                                </Info>
                            </User>
                        </Button>

                        <div>
                            {senderOpt.map((item, key) => {
                                const { icon, type, set } = item
                                return (
                                    <IconButton
                                        onClick={() => handleSenderOpt(type)}
                                        style={{ color: 'white' }}>
                                        {icon}
                                    </IconButton>
                                )
                            })}
                        </div>

                    </Sender>
                    <ChatsContainer>
                        <Chat sender={true}>
                            <ChatBubbleBG>
                                <ChatText>
                                    Hi my name is Sasuke I came to find orochimaru

                                </ChatText>

                            </ChatBubbleBG>
                            <Timestamp>
                                4:00 p.m.
                            </Timestamp>

                        </Chat>
                        <Chat sender={true}>
                            <ChatBubbleBG>
                                <ChatText>
                                    Hi my name is Sasuke I came to find orochimaru

                                </ChatText>

                            </ChatBubbleBG>
                            <Timestamp>
                                4:00 p.m.
                            </Timestamp>

                        </Chat>

                        <Chat sender={true}>
                            <ChatBubbleBG>
                                <ChatText>
                                    Hi my name is Sasuke I came to find orochimaru

                                </ChatText>

                            </ChatBubbleBG>
                            <Timestamp>
                                4:20 p.m.
                            </Timestamp>

                        </Chat>

                        <Chat>
                            <ChatBubbleBG diff={true}>
                                <ChatText>
                                    Hey Sasuke I'm karin
                                </ChatText>
                            </ChatBubbleBG>
                            <Timestamp>
                                5:40 p.m.
                            </Timestamp>
                        </Chat>
                        <Chat>
                            <ChatBubbleBG diff={true}>
                                <ChatText >
                                    Hi my name is Sasuke I came to find orochimaru
                                </ChatText>

                            </ChatBubbleBG>
                            <Timestamp>
                                6:00 p.m.
                            </Timestamp>

                        </Chat>
                    </ChatsContainer>

                    <TypeWriter>

                        <AddBtn
                            ht='3rem'
                            wd='3rem'
                        >
                            <IconButton>
                                <Plus color='white' size={28} />
                            </IconButton>

                        </AddBtn>

                        <TypeContainer>
                            <TextareaAutosize

                                style={{
                                    backgroundColor: 'inherit',
                                    border: 'none',
                                    width: '100%',
                                    height: '90%',
                                    outline: 'none',
                                    resize: 'none',
                                    fontFamily: 'DM Sans',
                                    color: 'white',
                                    fontSize: '1rem',
                                    overflowY: 'auto'

                                }}

                                placeholder='Type something here...'
                            >

                            </TextareaAutosize>

                        </TypeContainer>

                        <SendBtn ht='3rem' wd='3rem'>
                            <IconButton>
                                <Send color='white' size={22} />
                            </IconButton>
                        </SendBtn>


                    </TypeWriter>

                </ChatWindowBG>


                {/* Snakcbars */}

                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={del}
                    autoHideDuration={6000}
                    onClose={() => setDel(false)}

                >
                    <Alert severity='error' onClose={() => setDel(false)}>
                        Deleting all chats
                    </Alert>

                </Snackbar>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={star}
                    autoHideDuration={6000}
                    onClose={() => setStar(false)}

                >
                    <Alert severity='success' onClose={() => setStar(false)}>
                        Added to favourites
                    </Alert>

                </Snackbar>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={notif}
                    autoHideDuration={6000}
                    onClose={() => setNotif(false)}

                >
                    <Alert severity='info' onClose={() => setNotif(false)}>
                        Push notifications enabled
                    </Alert>

                </Snackbar>
            </Container >
        </CrypticContainer>
    )
}


