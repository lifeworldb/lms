'use strict'
import { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { diplomaNavActions } from '../store/actions'
import Head from 'next/head'
import np from 'nprogress'
import Router from 'next/router'
import { NavigationProvider } from '@atlaskit/navigation-next'
import WidthDetector from '@atlaskit/width-detector'
import WebNav from './Navigations/containers/WebNav'
import MobileNav from './Navigations/containers/MobileNav'
// import '@atlaskit/css-reset'

Router.onRouteChangeStart = (url) => {
	np.start()
}

Router.onRouteChangeComplete = () => np.done()
Router.onRouteChangeError = () => np.done()

class Layout extends Component {

	componentDidMount() {
		this.props.actions.setCurrentMenu(this.props.path)
	}

	render() {

		const { children, title, actions } = this.props

		return (
			<div>
				<Head>
					<title>{ title }</title>
					<meta name="viewport" content="width=device-width, initial-scale=1"/>

					{/*<link rel="preload" href="/css/uikit.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'"/>*/}
					{/*<noscript>*/}
					{/*	<link rel="stylesheet" href="/css/uikit.min.css"/>*/}
					{/*</noscript>*/}

					<link rel="stylesheet" href="/css/uikit.min.css"/>

				</Head>

				<NavigationProvider>
					<WidthDetector>
						{(width) => {
							if (width >= 1241) {
								actions.setMobile(false)
								return (
									<WebNav>
										{children}
									</WebNav>
								)
							} else {
								actions.setMobile(true)
								actions.openRigthSide(false)
								return (
									<Fragment>
										<MobileNav/>
										{children}
									</Fragment>
								)
							}
						}}
					</WidthDetector>
				</NavigationProvider>

				<style jsx global>{`
                    body {
                      margin: 0;
                      font-family: system-ui;
                      background: white;
                    }

                    /* Make clicks pass-through */
                    #nprogress {
                      pointer-events: none;
                    }

                    #nprogress .bar {
                      background: #29d;

                      position: fixed;
                      z-index: 1031;
                      top: 0;
                      left: 0;

                      width: 100%;
                      height: 2px;
                    }

                    /* Fancy blur effect */
                    #nprogress .peg {
                      display: block;
                      position: absolute;
                      right: 0px;
                      width: 100px;
                      height: 100%;
                      box-shadow: 0 0 10px #29d, 0 0 5px #29d;
                      opacity: 1.0;

                      -webkit-transform: rotate(3deg) translate(0px, -4px);
                          -ms-transform: rotate(3deg) translate(0px, -4px);
                              transform: rotate(3deg) translate(0px, -4px);
                    }

                    /* Remove these to get rid of the spinner */
                    #nprogress .spinner {
                      display: block;
                      position: fixed;
                      z-index: 1031;
                      top: 15px;
                      right: 15px;
                    }

                    #nprogress .spinner-icon {
                      width: 18px;
                      height: 18px;
                      box-sizing: border-box;

                      border: solid 2px transparent;
                      border-top-color: #29d;
                      border-left-color: #29d;
                      border-radius: 50%;

                      -webkit-animation: nprogress-spinner 400ms linear infinite;
                              animation: nprogress-spinner 400ms linear infinite;
                    }

                    .nprogress-custom-parent {
                      overflow: hidden;
                      position: relative;
                    }

                    .nprogress-custom-parent #nprogress .spinner,
                    .nprogress-custom-parent #nprogress .bar {
                      position: absolute;
                    }

                    @-webkit-keyframes nprogress-spinner {
                      0%   { -webkit-transform: rotate(0deg); }
                      100% { -webkit-transform: rotate(360deg); }
                    }
                    @keyframes nprogress-spinner {
                      0%   { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }

                  `}
				</style>

			</div>
		)
	}

}

Layout.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.object.isRequired,
	path: PropTypes.string
}

const mapStateToProps = state => ({
	isMobile: state.diplomaNavReducer.inMobileNav,
	openRightSide: state.diplomaNavReducer.openRightSide
})

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(diplomaNavActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
