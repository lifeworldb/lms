import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import PageHeader from '@atlaskit/page-header'
import { connect } from 'react-redux'
import RelatedDiploma from '../Related/Diplomat'

// import '../../public/css/uikit.min.css'

const DiplomaLayout = ({ children, diplomaSelected }) => {
    return(
        <Fragment>
            <PageHeader>
                { diplomaSelected.text }
            </PageHeader>
            <Page>
                <Grid layout='fluid'>
                    <GridColumn medium={ 12 }>
                        { children }
                    </GridColumn>
                </Grid>
                <Grid layout='fluid'>
                    <GridColumn>
                        <h2>Diplomados Relacionados</h2>
                        <RelatedDiploma/>
                    </GridColumn>
                </Grid>
            </Page>
        </Fragment>
    )
}

DiplomaLayout.propsType = {
    children: PropTypes.node.isRequired
}

const mapStateToProps = state => ({
    diplomaSelected: state.userReducer.diplomas.selected
})

export default connect(mapStateToProps)(DiplomaLayout)