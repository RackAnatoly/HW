import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort-up': {
           return state.sort((a: UserType, b: UserType) => (a.name > b.name) ? 1 : -1).map((s:UserType)=>s)
        }
        case 'sort-down': {
            return [...state.sort((a: UserType, b: UserType) => (a.name < b.name) ? 1 : -1)]

        }
        case 'check': {
            return state.filter((s: UserType) => s.age > action.payload)
        }
        default:
            return state
    }
}