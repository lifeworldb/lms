import { Component } from 'react'
import styled from 'styled-components'
import MobileHeader from '@atlaskit/mobile-header'
import WebNav from './WebNav';
import Button, { ButtonGroup } from '@atlaskit/button'
import CommentIcon from '@atlaskit/icon/glyph/comment'
import BagPack from '../../RightSide/BagPack'
import { gridSize as gridSizeFn } from '@atlaskit/theme/constants'
import { LogoPoliSura } from '../../Utils/Consts'

const gridSize = gridSizeFn()

const FakeSideBar = styled.div`
  background-color: white;
  height: 100vh;
  text-align: center;
  width: 364px;
`;

class MobileNav extends Component {
    state = {
        drawerState: 'none',
        sOpen: true,
    }

    navOpened = () => {
        this.setState({ drawerState: 'navigation' })
    }

    sidebarOpened = () => {
        this.setState({ drawerState: 'sidebar' })
    }

    drawerClosed = () => {
        this.setState({ drawerState: 'none' })
    }

    render() {
        const { drawerState } = this.state

        return (
            <MobileHeader
                menuIconLabel='Menu'
                pageHeading={ <LogoPoliSura styleLogo='normal'/> }
                navigation={ isOpen => isOpen && <WebNav/> }
                drawerState={ drawerState }
                secondaryContent={
                    <ButtonGroup>
                        <Button
                            iconBefore={ <CommentIcon label="Show sidebar" /> }
                            onClick={ this.sidebarOpened }
                        />
                    </ButtonGroup>
                }
                sidebar={ sOpen => sOpen && <FakeSideBar><BagPack/></FakeSideBar> }
                onNavigationOpen={ this.navOpened }
                onDrawerClose={ this.drawerClosed }
            />
        )
    }
}

export default MobileNav