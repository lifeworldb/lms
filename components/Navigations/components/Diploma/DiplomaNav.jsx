import styled from 'styled-components'
import { Component } from 'react'
import { Router } from '../../../../routes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { diplomaNavActions, userActions } from '../../../../store/actions'
import { Icon } from 'react-icons-kit'
import { socialWhatsapp as Whatsapp, chatboxes as ChatMaster, ribbonB as Certificate } from 'react-icons-kit/ionicons'
import { u1F4D3 as Units, u1F4DD as Notes, u1F393 as HatU, u1F392 as BagPackIcon } from 'react-icons-kit/noto_emoji_regular'
import ChevD from '@atlaskit/icon/glyph/chevron-down'
import { gridSize as gridSizeFn } from '@atlaskit/theme'
import {
    ContainerHeader,
    GroupHeading,
    HeaderSection,
    MenuSection,
    Item as ItemComponent,
    ItemAvatar,
    Separator,
    Switcher
} from '@atlaskit/navigation-next'
import { ButtonItem } from '@atlaskit/menu'
import UnitTopics from './components/UnitTopics'
import { LogoPoliSura } from '../../../Utils/Consts'
import CertificateDrawer from '../../../Certificate/CertificateDrawer'

const gridSize = gridSizeFn()

const WrapperFooter = styled.div`
  padding-top: 5px;
`

const Item = ({ testKey, ...props }) => {
    const item = <ItemComponent { ...props }/>
    return testKey ? <div data-webdriver-test-key={ testKey }>{ item }</div> : item
}

const FooterSwitcher = ({ src, onClick }) => (
    <WrapperFooter>
        <ButtonItem
            elemBefore={ <img src={ src } height={ 24 } width={ 24 } style={ { borderRadius: 3 } } /> }
            onClick={ onClick }
        >Mis Diplomas</ButtonItem>
    </WrapperFooter>
)

class DiplomaNav extends Component {

    optionsMenu = [
        {
            label: 'Diplomas Recientes',
            options: []
        },
        {
            label: 'Otros Diplomas',
            options: [
                {
                    avatar: 'https://api.adorable.io/avatars/80/archivo@me.com.png',
                    id: 'endeavour',
                    pathname: '/projects/endeavour',
                    text: 'Gestión Documental y Administración de Archivos',
                    subText: 'Educación Continua',
                },
                {
                    avatar: 'https://api.adorable.io/avatars/80/neuro@me.com.png',
                    id: 'design-system-support',
                    pathname: '/projects/design-system-support',
                    text: 'Neuropedagogía Infantil',
                    subText: 'Educación Continua',
                },
                {
                    avatar: 'https://api.adorable.io/avatars/80/atencion@me.com.png',
                    id: 'endeavour',
                    pathname: '/projects/endeavour',
                    text: 'ATENCIÓN INTEGRAL A LA VÍCTIMA DE LA VIOLENCIA SEXUAL',
                    subText: 'Educación Continua',
                },
                {
                    avatar: 'https://api.adorable.io/avatars/80/nomina@me.com.png',
                    id: 'design-system-support',
                    pathname: '/projects/design-system-support',
                    text: 'NÓMINA Y PRESTACIONES SOCIALES',
                    subText: 'Educación Continua',
                },
                {
                    avatar: 'https://api.adorable.io/avatars/80/fit@me.com.png',
                    id: 'endeavour',
                    pathname: '/projects/endeavour',
                    text: 'INSTRUCTOR EN ENTRENAMIENTO FÍSICO-DEPORTIVO Y FITNESS',
                    subText: 'Educación Continua',
                },
                {
                    avatar: 'https://api.adorable.io/avatars/80/invest@me.com.png',
                    id: 'design-system-support',
                    pathname: '/projects/design-system-support',
                    text: 'INVESTIGACIÓN UNIVERSITARIA',
                    subText: 'Educación Continua',
                },
            ]
        }
    ]

    create = () => ({
        onClick: () => {
            // eslint-disable-next-line
            const boardName = window.prompt(
                'What would you like to call your new board?',
            )
            if (boardName && boardName.length) {
                // eslint-disable-next-line
                console.log(`You created the board "${boardName}"`)
            }
        },
        text: 'Create board',
    })

    target = ({ id, subText, text, avatar }) => {
        const avatarItem= s => (
            <ItemAvatar
                appearance='square'
                href={ null }
                isInteractive={ false }
                itemState={ s }
                onClick={ null }
                src={ avatar }
            />
        )

        return (
            <ContainerHeader
                before={ avatarItem }
                after={ ChevD }
                id={ id }
                subText={ subText }
                text={ text }
                avatar={ avatar }
            />
        )
    }

    presentIcon = () => <Icon icon={ HatU } size={ 25 } />
    downloadIcon = () => <Icon icon={ Certificate } size={ 26 } />
    unitsIcon = () => <Icon icon={ Units } size={ 25 } />
    notesIcons = () => <Icon icon={ Notes } size={ 25 } />
    bagIcons = () => <Icon icon={ BagPackIcon } size={ 25 }/>
    whatsappIcon = () => <Icon icon={ Whatsapp } size={ 25 } />
    chatIcon = () => <Icon icon={ ChatMaster } size={ 25 } />

    onChange = (selected) => {
        this.props.userActions.changeSelected(selected)

        if (this.props.currentPathMenu === 'qualifications')
            Router.replaceRoute('qualifications', { id: selected.id }, { prefetch: true })

        if (this.props.currentPathMenu === 'diploma')
            Router.replaceRoute('diploma', { id: selected.id }, { prefetch: true })
    }

    onOpenDrawer = (value) => {
        this.props.actions.openDrawer(value)
    }

    onOpenBag = (value) => {
        this.props.actions.openRigthSide(value)
    }

    componentDidMount() {
        this.optionsMenu[0].options = (this.props.diplomasRecent)
    }

    render() {
        const { selected, openDrawer, openBagPack, isMobile, currentPathMenu } = this.props

        return(
            <div
                data-webdriver-test-key='contianer-navigation'
            >
                <HeaderSection>
                    {({ className }) => (
                        <div className={ className }>
                            <LogoPoliSura styleLogo='normal'/>
                        </div>
                    )}
                </HeaderSection>
                <HeaderSection>
                    {({ css }) => (
                        <div
                            data-webdriver-test-key='container-header'
                            style={
                                {
                                    ...css,
                                    paddingBottom: gridSize * 2.5,
                                }
                            }
                        >
                            <Switcher
                                // create={ this.create() }
                                onChange={ this.onChange }
                                options={ this.optionsMenu }
                                target={ this.target(selected) }
                                value={ selected && selected }
                                footer={ <FooterSwitcher src='https://image.flaticon.com/icons/svg/972/972256.svg' onClick={ () => Router.pushRoute('my_diplomas') } /> }
                            />
                        </div>
                    )}
                </HeaderSection>
                <MenuSection>
                    {({ className }) => (
                        <div className={ className }>
                            <Item
                                before={ this.presentIcon }
                                text="Presentación Diplomado"
                                isSelected={ currentPathMenu === 'present_diploma' && true }
                                testKey="container-item-presentation-diplomado"
                                onClick={ () => Router.pushRoute('diploma', { id: selected.id }, { prefetch: true }) }
                            />

                            <UnitTopics/>

                            <Separator/>

                            <Item
                                before={ this.notesIcons }
                                text="Calificaciones"
                                isSelected={ currentPathMenu === 'qualifications' && true }
                                testKey="container-item-ratings"
                                onClick={ () => Router.pushRoute('qualifications', { id: selected.id }, { prefetch: true }) }
                            />

                            <Item
                                before={ this.downloadIcon }
                                text="Descarga el Certificado"
                                testKey="container-item-download-certificate"
                                onClick={ () => this.onOpenDrawer(true) }
                            />
                            <Separator />
                            <GroupHeading>Shortcuts</GroupHeading>
                            <Item before={ this.whatsappIcon } href='https://api.whatsapp.com/send?phone=3053359616&text=test' target='blank' text="WhatsApp" />

                            { !isMobile && (
                                <Item
                                    before={ this.chatIcon }
                                    text={ !openBagPack ? 'Mensaje Al Instructor':'Cerrar Mensajeria' }
                                    onClick={ () => this.onOpenBag(!openBagPack) }
                                />
                            ) }
                        </div>
                    )}
                </MenuSection>
                <CertificateDrawer isOpen={ openDrawer } setOpen={ this.onOpenDrawer } />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    selected: state.userReducer.diplomas.selected,
    diplomasRecent: state.userReducer.diplomas.recent,
    openDrawer: state.diplomaNavReducer.openDrawer,
    openBagPack: state.diplomaNavReducer.openRightSide,
    isMobile: state.diplomaNavReducer.inMobileNav,
    currentPathMenu: state.diplomaNavReducer.currentPathMenu
})

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(diplomaNavActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiplomaNav)
