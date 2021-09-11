import {
    Users,
    User,
    Avatar,
    Name,
    SearchContainer,
    FadedText,
    Info,
    List,
    Title,
    TitleText


} from '../Styles/Styling'
import { Input, IconButton, Button, Divider } from '@material-ui/core'
import { Search, User as Usicon } from 'react-feather'



export default function NewConversation() {

    const myusers = [
        { name: 'Sasuke Uchiha', avatar: <IconButton><Usicon /></IconButton> },
        { name: 'Naruto Uzumaki', avatar: <IconButton><Usicon /></IconButton> },
        { name: 'Sakura', avatar: <IconButton><Usicon /></IconButton> },
        { name: 'Kakashi', avatar: <IconButton><Usicon /></IconButton> },
        { name: 'Jiraya', avatar: <IconButton><Usicon /></IconButton> },
        { name: 'Tsunade', avatar: <IconButton><Usicon /></IconButton> },
        { name: 'Hashirama', avatar: <IconButton><Usicon /></IconButton> },

    ]

    return (

        <Users>

            <Title>
                <TitleText>
                    Send a message
                </TitleText>
            </Title>

            <SearchContainer>
                <IconButton>
                    <Search size={16} style={{ color: 'grey' }} />
                </IconButton>
                <Input
                    placeholder="Search here..."
                    disableUnderline
                    style={{ color: 'white' }}
                />
            </SearchContainer>

            <List>
                {

                    myusers.map((item, index) => {
                        const { avatar, name, last } = item

                        return (
                            <>
                                <Button style={{ width: '100%', textTransform: 'none' }}>
                                    <User>

                                        <Avatar>
                                            {avatar}
                                        </Avatar>
                                        <Info>
                                            <Name>
                                                {name}
                                            </Name>
                                        </Info>

                                    </User>

                                </Button>


                            </>
                        )
                    })

                }

            </List>
        </Users>

    )
}
