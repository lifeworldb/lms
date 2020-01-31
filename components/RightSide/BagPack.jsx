import Tooltip from '@atlaskit/tooltip'
import Tabs, { TabItem } from '@atlaskit/tabs'
import ChatTab from './components/ChatTab'

const tabs = [
    {
        label: 'Chat',
        heading: 'Test',
        content: <ChatTab/>,
        tooltip: 'Mensajes directos al instructor del diplomado',
        href: '#'
    },
    {
        label: 'Aportes',
        heading: 'Test',
        content: <h1>Aportes</h1>,
        tooltip: 'Los apartes de todos',
        href: '#'
    },
    {
        label: 'Archivos',
        heading: 'Test',
        content: <h1>Archivos</h1>,
        tooltip: 'Los archivos propuestos por el instructor',
        href: '#'
    },
    {
        label: 'Usuarios Online',
        heading: 'Test',
        content: <h1>Usuarios Online</h1>,
        tooltip: 'Todos los usuarios conectados al diplomado, están aquí',
        href: '#'
    }
]

const TooltipItem = (props) => (
    <Tooltip content={ props.data.tooltip }>
        <TabItem { ...props } />
    </Tooltip>
)

const BagPack = () => (
    <Tabs
        components={ { Item: TooltipItem } }
        onSelect={ (_tab, index) => console.log(`Selected Tab ${ index + 1 }`) }
        tabs={ tabs }
    />
)

export default BagPack