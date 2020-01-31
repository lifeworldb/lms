import GlobalNavigation from '@atlaskit/global-navigation'
import ProfileMenu from './Menus/Profile';
import { IconPoliSura } from '../../../Utils/Consts';

const GlobalNav = () => (
    <GlobalNavigation
        productIcon={ () => <IconPoliSura size='large'/> }
        onProductClick={ () => {} }
        // Search Options
        searchTooltip='Tooltip'
        searchLabel="Search Label"
        onSearchClick={ () => console.log('search clicked') }
        //Notifications Options
        notificationsLabel='Notifications.'
        notificationTooltip='Notifications'
        notificationCount={ 3 }
        onNotificationClick={ () => console.log('notification clicked') }
        // Help Options
        onHelpClick={ () => console.log('help clicked') }
        helpItems={ () => <div /> }
        // Profile Options
        profileIconUrl='https://api.adorable.io/avatars/80/chaki@me.com.png'
        profileLabel='User'
        profileTooltip='Account Settings'
        profileItems={ ProfileMenu }
    />
)

export default GlobalNav