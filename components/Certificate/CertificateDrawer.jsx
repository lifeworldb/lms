import { Fragment } from 'react'
import Button from '@atlaskit/button'
import Drawer from '@atlaskit/drawer'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import UncontrolledLottie from '../Animations/components/UncontrolledLottie'
import { cloudDownload } from 'react-icons-kit/fa'
import { Icon } from 'react-icons-kit'
import { connect } from 'react-redux'

const anim = {
    name: 'CertificateAnim',
}

const CertificateDrawer = ({ isOpen, setOpen, isMobile }) => (
    <Fragment>
        <Drawer
            onClose={ () => setOpen(false) }
            isOpen={ isOpen }
            width={ !isMobile ? 'wide' : 'full' }
        >
            <Page>
                <Grid layout='fluid'>
                    <GridColumn medium={ 7 }>
                        <h1>Descarga el certificado</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Illum laudantium omnis vero. Corporis cumque deleniti dolores ipsum vel vero!
                            Adipisci delectus
                            distinctio dolore neque nisi officiis quaerat sequi ullam, unde?</p>
                        <Grid>
                            <GridColumn>
                                <Button
                                    appearance='primary'
                                    iconAfter={ <Icon icon={ cloudDownload } /> }
                                >Descargar Certificado</Button>
                            </GridColumn>
                        </Grid>
                    </GridColumn>
                    <GridColumn medium={ 5 }>
                        <Grid>
                            <GridColumn>
                                <UncontrolledLottie animation={ anim }/>
                            </GridColumn>
                        </Grid>
                    </GridColumn>
                </Grid>
            </Page>
        </Drawer>
    </Fragment>
)

const mapStateToProps = state => ({
    isMobile: state.diplomaNavReducer.inMobileNav
})

export default connect(mapStateToProps)(CertificateDrawer)
