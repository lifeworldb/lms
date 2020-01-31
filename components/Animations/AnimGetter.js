import EmptyStateAnim from './files/empty-state-illustration'
import NotFoundError from './files/4339-not-found'
import NotFoundErrorPage from './files/3146-404page'
import NotFoundErrorFace from './files/3227-error-404-facebook-style'
import CertificateMedal from './files/14496-medal'
import UnitCelebration from './files/7893-confetti-cannons'

const GetAnim = (name) => {
    switch (name.toLowerCase()) {
        case 'emptystate':
            return EmptyStateAnim
        case 'emptydiplomat':
            return null
        case 'notfound':
            return NotFoundError
        case 'notfoundpage':
            return NotFoundErrorPage
        case 'notfoundface':
            return NotFoundErrorFace
        case 'certificateanim':
            return CertificateMedal
        case 'unitcelebration':
            return UnitCelebration
        default:
            return null
    }
}

export default GetAnim