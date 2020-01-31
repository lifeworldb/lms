import { ADD, OPEN_DRAWER, SET_MOBILE_NAV, SET_CURRENT_PAGE_MENU, OPEN_RIGHT_SIDE, CHANGE_SELECTED_DIPLOMA, CHANGE_UNITS_ACTIVE_LEVEL } from '../actions/types'

const initialState = {
    diplomasSelection: {
        // options: [
        //     {
        //         label: 'Diplomas Recientes',
        //         options: [
        //             {
        //                 avatar: 'https://api.adorable.io/avatars/80/chaki@me.com.png',
        //                 id: 'endeavour',
        //                 pathname: '/projects/endeavour',
        //                 text: 'Administración de la propiedad horizontal',
        //                 subText: 'Educación Continua',
        //             },
        //             {
        //                 avatar: 'https://api.adorable.io/avatars/80/prueba@me.com.png',
        //                 id: 'design-system-support',
        //                 pathname: '/projects/design-system-support',
        //                 text: 'Prueba',
        //                 subText: 'Educación Continua',
        //             },
        //         ]
        //     },
        //     {
        //         label: 'Otros Diplomas',
        //         options: [
        //             {
        //                 avatar: 'https://api.adorable.io/avatars/80/archivo@me.com.png',
        //                 id: 'endeavour',
        //                 pathname: '/projects/endeavour',
        //                 text: 'Gestión Documental y Administración de Archivos',
        //                 subText: 'Educación Continua',
        //             },
        //             {
        //                 avatar: 'https://api.adorable.io/avatars/80/neuro@me.com.png',
        //                 id: 'design-system-support',
        //                 pathname: '/projects/design-system-support',
        //                 text: 'Neuropedagogía Infantil',
        //                 subText: 'Educación Continua',
        //             },
        //             {
        //                 avatar: 'https://api.adorable.io/avatars/80/atencion@me.com.png',
        //                 id: 'endeavour',
        //                 pathname: '/projects/endeavour',
        //                 text: 'ATENCIÓN INTEGRAL A LA VÍCTIMA DE LA VIOLENCIA SEXUAL',
        //                 subText: 'Educación Continua',
        //             },
        //             {
        //                 avatar: 'https://api.adorable.io/avatars/80/nomina@me.com.png',
        //                 id: 'design-system-support',
        //                 pathname: '/projects/design-system-support',
        //                 text: 'NÓMINA Y PRESTACIONES SOCIALES',
        //                 subText: 'Educación Continua',
        //             },
        //             {
        //                 avatar: 'https://api.adorable.io/avatars/80/fit@me.com.png',
        //                 id: 'endeavour',
        //                 pathname: '/projects/endeavour',
        //                 text: 'INSTRUCTOR EN ENTRENAMIENTO FÍSICO-DEPORTIVO Y FITNESS',
        //                 subText: 'Educación Continua',
        //             },
        //             {
        //                 avatar: 'https://api.adorable.io/avatars/80/invest@me.com.png',
        //                 id: 'design-system-support',
        //                 pathname: '/projects/design-system-support',
        //                 text: 'INVESTIGACIÓN UNIVERSITARIA',
        //                 subText: 'Educación Continua',
        //             },
        //         ]
        //     }
        // ],
        selected: ''
    },
    unitsNested: {
        menu: [
            {
                id: 'nested-level-1',
                items: [{ text: 'Unidades', before: 'unitsIcon', after: 'ArrowRightIcon', goTo: 1 }],
            },
            {
                parentId: 'nested-level-1',
                id: 'nested-level-2',
                items: [
                    { text: 'Unidades', before: 'ArrowLeftIcon', goTo: 0 },
                    { text: 'Unidad 1', goTo: 2, after: 'ArrowRightIcon' },
                    { text: 'Unidad 2', goTo: 3, after: 'ArrowRightIcon' },
                    { text: 'Unidad 3', goTo: 4, after: 'ArrowRightIcon' },
                    { text: 'Unidad 4', goTo: 5, after: 'ArrowRightIcon' },
                ],
            },
            {
                parentId: 'nested-level-2',
                id: 'nested-level-3',
                items: [
                    { text: 'Unidades', goTo: 1, before: 'ArrowLeftIcon' },
                    { text: 'Tema 1', goTo: 2 },
                    { text: 'Tema 2', goTo: 2 },
                    { text: 'Tema 3', goTo: 2 },
                    { text: 'Actividad de la unidad 1', goTo: 2 },
                ],
            },
            {
                parentId: 'nested-level-3',
                id: 'nested-level-4',
                items: [
                    { text: 'Unidades', goTo: 1, before: 'ArrowLeftIcon' },
                    { text: 'Tema 1', goTo: 2 },
                    { text: 'Tema 2', goTo: 2 },
                    { text: 'Tema 3', goTo: 2 },
                    { text: 'Actividad de la unidad 2', goTo: 2 },
                ],
            },
            {
                parentId: 'nested-level-3',
                id: 'nested-level-5',
                items: [
                    { text: 'Unidades', goTo: 1, before: 'ArrowLeftIcon' },
                    { text: 'Tema 1', goTo: 2 },
                    { text: 'Tema 2', goTo: 2 },
                    { text: 'Tema 3', goTo: 2 },
                    { text: 'Actividad de la unidad 3', goTo: 2 },
                ],
            },
            {
                parentId: 'nested-level-3',
                id: 'nested-level-6',
                items: [
                    { text: 'Back', goTo: 1, before: 'ArrowLeftIcon' },
                    { text: 'Tema 1', goTo: 2 },
                    { text: 'Tema 2', goTo: 2 },
                    { text: 'Tema 3', goTo: 2 },
                    { text: 'Actividad de la unidad 4', goTo: 2 },
                ],
            },
        ],
        activeLevel: 0
    },
    currentPathMenu: '',
    openDrawer: false,
    openRightSide: false,
    inMobileNav: false,
}

// initialState.diplomasSelection.selected = initialState.diplomasSelection.options[0].options[0]

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD:
            break
        case OPEN_DRAWER:
            return Object.assign({}, state, { openDrawer: action.payload.value })
        case OPEN_RIGHT_SIDE:
            return Object.assign({}, state, { openRightSide: action.payload.value })
        case SET_CURRENT_PAGE_MENU:
            return Object.assign({}, state, { currentPathMenu: action.payload.value })
        case SET_MOBILE_NAV:
            return Object.assign({}, state, { inMobileNav: action.payload.value })
        case CHANGE_UNITS_ACTIVE_LEVEL:
            return Object.assign({}, state, {
                unitsNested: Object.assign({}, state.unitsNested, {
                    activeLevel: action.payload.value
                })
            })
        default:
            return state
    }
}
