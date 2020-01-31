import React, { Component } from 'react'
import 'isomorphic-fetch'
import Layout from '../components/Layout'
import Error from './_error'
import DiplomaLayout from '../components/DiplomaPage/DiplomaLayout';
import UnitSlide from '../components/DiplomaPage/components/UnitSlide'

class Home extends Component {

	static async getInitialProps({ res, req, asPath }) {
		return { status: 200, pathName: 'home' }
	}

	render() {
        const { status, pathName } = this.props

        if (status !== 200)
            return <Error statusCode={ status } />

        return (
            <Layout title='Home' path={ pathName }>
                <h1>Index</h1>
            </Layout>
        )
    }

}

export default Home
