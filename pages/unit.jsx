import React, { Component } from 'react'
import Error from './_error'
import Layout from '../components/Layout'
import routes from '../routes'
import 'isomorphic-fetch'
import UnitSlide from '../components/DiplomaPage/components/UnitSlide'
import DiplomaLayout from '../components/DiplomaPage/DiplomaLayout'

class Unit extends Component {

    static async getInitialProps({ res, asPath }) {
        let status = 200

        return { status, pathName: routes.match(asPath).route.name }
    }

    render() {
        const { status, pathName } = this.props

        if (status !== 200)
            return <Error statusCode={ status }/>

        return (
            <Layout title='Unidad' path={ pathName }>
                <DiplomaLayout>
                    <UnitSlide/>
                </DiplomaLayout>
            </Layout>
        )
    }
}

export default Unit