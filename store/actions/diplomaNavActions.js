import { ADD, OPEN_DRAWER, SET_MOBILE_NAV, SET_CURRENT_PAGE_MENU, OPEN_RIGHT_SIDE, CHANGE_UNITS_ACTIVE_LEVEL } from './types'

export function add(diploma) {
    return {
        type: ADD,
        payload: {
            diploma
        }
    }
}

export function openDrawer(value) {
    return {
        type: OPEN_DRAWER,
        payload: {
            value
        }

    }
}

export function setMobile(value) {
    return {
        type: SET_MOBILE_NAV,
        payload: {
            value
        }
    }

}

export function setCurrentMenu(value) {
    return {
        type: SET_CURRENT_PAGE_MENU,
        payload: {
            value
        }
    }
}

export function openRigthSide(value) {
    return {
        type: OPEN_RIGHT_SIDE,
        payload: {
            value
        }
    }
}

export function changeActiveLevel(value) {
    return {
        type: CHANGE_UNITS_ACTIVE_LEVEL,
        payload: {
            value
        }
    }
}
