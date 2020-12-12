import {actionType, initialStateType} from "./tests/homeWorkReducer.test";

export const homeWorkReducer = (state: initialStateType, action: actionType): initialStateType => {
    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                return [...state.sort((a, b) => a.name.localeCompare(b.name))]

            } else if (action.payload === "down") {
               return [...state.sort((b, a) => a.name.localeCompare(b.name))]
            }
        }
        case "check": {
            return state.filter(arr => arr.age >= action.payload)
        }
        default:
            return state
    }
};