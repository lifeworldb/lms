import { ADD_DIPLOMA, CHANGE_SELECTED_DIPLOMA } from './types'

export function addDiplomaToUser(diploma) {
    return {
        type: ADD_DIPLOMA,
        payload: {
            diploma
        }
    }
}

export function changeSelected(value) {
    return {
        type: CHANGE_SELECTED_DIPLOMA,
        payload: {
            value
        }
    }
}