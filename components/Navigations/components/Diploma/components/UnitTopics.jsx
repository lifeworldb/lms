import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { diplomaNavActions } from '../../../../../store/actions'
import { colors } from '@atlaskit/theme'
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left'
import { Item, Section } from '@atlaskit/navigation-next'
import { CONTENT_NAV_WIDTH } from '@atlaskit/navigation-next/dist/cjs/common/constants';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right'
import styled from 'styled-components'
import { Icon } from "react-icons-kit";
import { u1F4D3 as Units } from "react-icons-kit/noto_emoji_regular";

const Wrapper = styled.div`
    background-color: ${ colors.N20 };
    margin-top: 8px;
    overflow: hidden;
    position: relative;
    width: ${ CONTENT_NAV_WIDTH };
`

const NestedWrapper = props => <Wrapper { ...props }/>

const UnitsItems = styled.div`
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
`

const unitsIcon = () => <Icon icon={ Units } size={ 25 } />

class UnitTopics extends Component {

    replaceIcons = (name) => {
        switch(name) {
            case 'unitsIcon':
                return unitsIcon
            case 'ArrowRightIcon':
                return ArrowRightIcon
            case 'ArrowLeftIcon':
                return ArrowLeftIcon
        }
    }

    onChangeUnitOrTopic = (goTo) => {
        this.props.actions.changeActiveLevel(goTo)
    }

    render() {
        const { menu, activeLevel } = this.props

        const { items, ...sectionProps } = menu[activeLevel]

        return (
            <NestedWrapper>
                <Section
                    key='nested-section' { ...sectionProps }
                >
                    {() => (
                        <UnitsItems>
                            {items.map(({ goTo, ...itemProps }) => (
                                <div key={ itemProps.text }>
                                    <Item
                                        key={ itemProps.text }
                                        onClick={ () => {this.props.actions.changeActiveLevel(goTo)} }
                                        before={ this.replaceIcons(itemProps.before) }
                                        after={ this.replaceIcons(itemProps.after) }
                                        text={ itemProps.text }

                                    />
                                </div>
                            ))}
                        </UnitsItems>
                    )}
                </Section>
            </NestedWrapper>
        )
    }
}

const mapStateToProps = state => ({
    menu: state.diplomaNavReducer.unitsNested.menu,
    activeLevel: state.diplomaNavReducer.unitsNested.activeLevel
})

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(diplomaNavActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitTopics)