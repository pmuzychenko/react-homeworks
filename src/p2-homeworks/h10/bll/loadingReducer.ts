const initState = {
    loading: false
};

export type LoadingStateType = typeof initState

export const loadingReducer = (state= initState, action: ActionsType): LoadingStateType => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state, loading: action.isLoading}
        }
        default:
            return state;
    }
};

type ActionsType = LoadingACType

type LoadingACType = {
    type: "LOADING"
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingACType =>
    ({type: "LOADING", isLoading}); // fix any