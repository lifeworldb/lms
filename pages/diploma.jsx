import React, { Component, Fragment } from 'react'
import Error from './_error'
import Layout from '../components/Layout'
import routes from '../routes'
import 'isomorphic-fetch'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import PageHeader from '@atlaskit/page-header'
import slug from '../helpers/slug'

class Diploma extends Component {

    static async getInitialProps({ query, res, asPath }) {
        let status = 200

        if (!query.id)
            status = 404

        return { status, pathName: routes.match(asPath).route.name }
    }

    render() {
        const { status, pathName } = this.props

        if (status !== 200)
            return <Error statusCode={ status }/>

        return (
            <Layout title='Diplomado' path={ pathName }>
                <Fragment>
                    <PageHeader>
                        <h1>Presentación diplomado</h1>
                    </PageHeader>
                    <Page>
                        <Grid layout='fluid'>
                            <GridColumn medium={ 12 }>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at blanditiis, cumque deleniti dolor dolores ducimus laborum minus mollitia, perferendis quas quia quod sit tempore tenetur unde velit? Commodi, sunt?
                                </p>
                            </GridColumn>
                        </Grid>
                    </Page>
                </Fragment>
            </Layout>
        )
    }
}

export default Diploma