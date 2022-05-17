export type initialStateType = string


const initState:initialStateType = 'dark'

export const themeReducer = (state = initState, action: ChangeThemeACType): initialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            console.log('CHANGE-THEME')
            state=action.theme
            return state;
            // let theme=state[Math.floor(Math.random()*state.length)]
            // return theme
        }
        default:
            return state;
    }
};

export const ChangeThemeAC = (theme:string) => {
    return {
        type: 'CHANGE-THEME',
        theme:theme
    }
}

export type ChangeThemeACType = {
    type: 'CHANGE-THEME',
    theme:string

}
export const changeThemeC = (): any => {
}; // fix any