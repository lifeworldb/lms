import React, { Component } from 'react'
import Error from './_error'
import Layout from '../components/Layout'
import PageHeader from '@atlaskit/page-header'
import 'isomorphic-fetch'
import routes from '../routes'
import MyDiplomaPage from '../components/My_Diplomas/Page'

class My_Diplomas extends Component {

    static async getInitialProps({ res, asPath }) {
        return { status: 200, pathName: routes.match(asPath).route.name }
    }

    render() {
        const { status, pathName } = this.props

        if (status !== 200)
            return <Error statusCode={ status }/>

        return (
            <Layout title='Mis Diplomas' path={ pathName }>
                <MyDiplomaPage/>
            </Layout>
        )
    }
}

export default My_Diplomas
