import React from "react";
import {Provider} from 'react-redux'
import {combineReducers, createStore} from "redux";
import {loadingReducer} from "../../h10/bll/loadingReducer";
import {themeReducer} from "../bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    themes: themeReducer
});

export const storybookStore = createStore(reducers)


const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider store={storybookStore}>
        {storyFn()}
    </Provider>
)

export default ReduxStoreProviderDecorator;