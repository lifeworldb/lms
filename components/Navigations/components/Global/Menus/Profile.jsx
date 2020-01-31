import { MenuGroup, ButtonItem, Section, HeadingItem } from '@atlaskit/menu'

const ImgIcon = ({ src }) => (
    <img src={ src } height={ 24 } width={ 24 } style={ { borderRadius: 3 } }/>
)

const ProfileMenu = () => (
    <div>
        <MenuGroup>
            <Section>
                <HeadingItem>Starred</HeadingItem>
                <ButtonItem
                    elemBefore={ <ImgIcon src={ 'https://api.adorable.io/avatars/80/pls@me.com.png' } /> }
                    description="Next-gen software project"
                >
                    Navigation System
                </ButtonItem>
                <HeadingItem>Recent</HeadingItem>
                <ButtonItem
                    elemBefore={ <ImgIcon src={ 'https://api.adorable.io/avatars/80/plsb@me.com.png' } /> }
                    description="Next-gen software project"
                >
                    Fabric Editor
                </ButtonItem>
            </Section>
            <Section hasSeparator>
                <ButtonItem>View all projects</ButtonItem>
                <ButtonItem>Logout</ButtonItem>
            </Section>
        </MenuGroup>
    </div>
)

export default ProfileMenu