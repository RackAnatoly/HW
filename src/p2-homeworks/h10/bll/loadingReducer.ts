const initState = {
    isLoading: false
}
export type PropsType={
    isLoading:boolean;
}

export const loadingReducer = (state = initState, action: loadingACtype): PropsType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading:action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading:boolean): loadingACtype => {
    return {
        type: 'LOADING',
        isLoading:isLoading,
    }
}

type loadingACtype = { type: 'LOADING',isLoading:boolean }