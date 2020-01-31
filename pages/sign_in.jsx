import React, { Component } from 'react'
import Error from './_error'
import Layout from '../components/Layout'
import 'isomorphic-fetch'

class Sign_in extends Component {

    static async getInitialProps({ res }) {
        return { status: res.statusCode }
    }

    render() {
        const { status } = this.props

        if (status !== 200)
            return <Error statusCode={ status }/>

        return (
            <Layout title='Iniciar Sesion'>
                <h1>Login</h1>
            </Layout>
        )
    }
}

export default Sign_in
