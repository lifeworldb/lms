import { Component } from 'react'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie'
import GetAnim from '../AnimGetter';

class UncontrolledLottie extends Component {

    render() {

        const { animation } = this.props

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: GetAnim(animation.name),
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            },
        }

        return(
            <div>
                <Lottie options={ animation.options ? animation.options : defaultOptions } height={ animation.height } width={ animation.width } />
            </div>
        )
    }

}

UncontrolledLottie.propTypes = {
    animation: PropTypes.shape({
        name: PropTypes.string.isRequired,
        option: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number
    })
}

export default UncontrolledLottie