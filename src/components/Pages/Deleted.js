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
import { Input, IconButton, Button } from '@material-ui/core'
import { Search, User as Usicon } from 'react-feather'



export default function Deleted() {

    const myusers = [
        { name: 'Tobirama', last: 'Hi I am Sasuke', avatar: <IconButton><Usicon /></IconButton> },
        { name: 'Madara', last: 'Hi I am Sasuke', avatar: <IconButton><Usicon /></IconButton> },
        { name: 'Minato', last: 'Hi I am Sasuke', avatar: <IconButton><Usicon /></IconButton> },
    ]

    return (

        <Users>
            <Title>
                <TitleText>
                    Deleted messages
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
                            <Button style={{ width: '100%', textTransform: 'none', marginBottom: '1rem' }}>
                                <User>
                                    <Avatar mt={true}>
                                        {avatar}
                                    </Avatar>
                                    <Info dir='column'>
                                        <Name>
                                            {name}
                                        </Name>
                                        <FadedText>
                                            {last}
                                        </FadedText>
                                    </Info>
                                </User>
                            </Button>


                        )
                    })

                }

            </List>
        </Users>

    )
}
