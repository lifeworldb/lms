import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import GlobalNav from '../components/Global/GobalNav'
import ProductNav from '../components/Product/ProductNav'
import DiplomaNav from '../components/Diploma/DiplomaNav'
import { LayoutManager } from '@atlaskit/navigation-next'
import { ContentWrapper, FlexContainer, RightSidePanel } from '@atlaskit/right-side-panel'
import BagPack from '../../RightSide/BagPack'

const WebNav = ({ children, openSide, currentPathMenu }) => (
    <LayoutManager
        globalNavigation={ GlobalNav }
        productNavigation={ ProductNav }
        containerNavigation={ currentPathMenu !== 'my_diplomas' && DiplomaNav }
        experimental_flyoutOnHover={ false }
        experimental_hideNavVisuallyOnCollapse={ false }
    >
        <FlexContainer id='RightBagPack'>
            <ContentWrapper>
                <div
                    style={ { padding: '0px 40px' } }
                >
                    { children }
                </div>
                <RightSidePanel isOpen={ openSide } attachPanelTo='RightBagPack'>
                    <BagPack/>
                </RightSidePanel>
            </ContentWrapper>
        </FlexContainer>
    </LayoutManager>
)

WebNav.propsType = {
    children: PropTypes.node.isRequired,
    openSide: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    openSide: state.diplomaNavReducer.openRightSide,
    currentPathMenu: state.diplomaNavReducer.currentPathMenu,
})

export default connect(mapStateToProps)(WebNav)