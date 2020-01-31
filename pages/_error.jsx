import React, { Component } from 'react'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import Link from 'next/link'
import UncontrolledLottie from '../components/Animations/components/UncontrolledLottie'
import GetAnim from '../components/Animations/AnimGetter'

class Error extends Component {

    static async getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ?
            err.statusCode : null;

            return { statusCode } 
    }

    render() {

        const anim = {
            name: 'NotFoundPage',
            options: {
                loop: true,
                autoplay: true,
                animationData: GetAnim('notfoundface'),
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                },
            },
            height: 450,
            width: 450
        }

        const { statusCode } = this.props
        return (
            <Page>
                <Grid layout='fluid'>
                    <GridColumn>
                        <UncontrolledLottie animation={ anim }/>
                    </GridColumn>
                </Grid>
                <Grid layout='fluid'>
                    <GridColumn>

                    </GridColumn>
                </Grid>
            </Page>
        )
    }
}

export default Error