import { CHANGE_SELECTED_DIPLOMA, ADD_DIPLOMA } from '../actions/types'

const initialState = {
    // menuSwitcher: {
    //     options: [
    //         {
    //             label: 'Diplomas Recientes',
    //             options: []
    //         },
    //         {
    //             label: 'Otros Diplomas',
    //             options: []
    //         }
    //     ],
    //     selected: 0
    // },
    basicData: {},
    diplomas: {
        recent: [
            {
                id: '4sa45gGDS6',
                text: 'Administración de la propiedad horizontal',
                description: '',
                shortDescription: '',
                subText: 'Educación Continua',
                avatar: 'https://api.adorable.io/avatars/80/chaki@me.com.png',
                cover: {
                    alt: 'imagen-diploma1',
                    imageBg: 'https://admin.polisura.com/images/programas/programas/img-5e14f42835f4c.png',
                    preview: 'https://admin.polisura.com/images/programas/gestion/img-5d6e89e5b32bf.png'
                },
                lastSelected: false,
                content: {
                    pageHome: {},
                    unist: []
                }
            }
        ],
        others: [],
        selected: ''
    }
}

initialState.diplomas.selected = initialState.diplomas.recent[0]

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_DIPLOMA:
            return Object.assign({}, state, state.diplomas.others.push(action.payload.value))
        case CHANGE_SELECTED_DIPLOMA:
            return Object.assign({}, state, {
                diplomas: Object.assign({}, state.diplomas, {
                    selected: action.payload.value
                })
            })
        default:
            return state
    }
}