export type FilterThemeValueType = 'dark' | 'red' | 'some'

type initStateType = {
    currentTheme: string
}
const initState: initStateType = {
    currentTheme: 'dark'
};

export const themeReducer = (state = initState, action: ActionsType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                currentTheme: action.newTheme
            }
        }
        default:
            return state;
    }
};

type ActionsType = themeACType

type themeACType = {
    type: "CHANGE-THEME"
    newTheme: string
}

export const changeThemeC = (newTheme: string): themeACType => ({type: "CHANGE-THEME", newTheme}); // fix any
