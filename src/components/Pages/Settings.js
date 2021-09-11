import {
    Avatar,
    FadedText,
    Info,
    Name,
    SettingsContainer,
    Title,
    TitleText,
    User,
    List
} from '../Styles/Styling'
import React from 'react'
import { IconButton, Button } from '@material-ui/core'
import { User as Usicon, Delete, XCircle } from 'react-feather'

export default function SettingsPage() {
    return (
        <SettingsContainer>
            <Title>
                <TitleText>
                    Settings
                </TitleText>
            </Title>
            <Button style={{ width: '100%', textTransform: 'none', marginBottom: '1rem' }}>
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
            <List>
                <Button style={{ marginLeft: '1rem', textTransform: 'none' }}>
                    <Delete color='orange' size={18} />
                    <FadedText>
                        Clear all chats
                    </FadedText>
                </Button>
                <Button style={{ marginLeft: '1rem', textTransform: 'none' }}>
                    <XCircle color='red' size={18} />
                    <FadedText>
                        Delete account
                    </FadedText>
                </Button>
            </List>
        </SettingsContainer>
    )
}
