import React, { Component } from 'react'
import Error from './_error'
import Layout from '../components/Layout'
import 'isomorphic-fetch'
import QualificationPage from '../components/Qualifications/Page'
import routes from '../routes'

class Qualifications extends Component {

    static async getInitialProps({ query, res, asPath }) {
        let status = 200

        if (!query.id)
            status = 404

        console.log(query)

        return { status , pathName: routes.match(asPath).route.name }
    }

    render() {
        const { status, pathName } = this.props

        if (status !== 200)
            return <Error statusCode={ status }/>

        return (
            <Layout title='Calificaciones' path={ pathName }>
                <QualificationPage/>
            </Layout>
        )
    }
}

export default Qualifications
