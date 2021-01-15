import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useSelector, useDispatch} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingStateType} from "./bll/loadingReducer";
import preloader from "./assets/images/preloader.gif"
import styles from "./HW10.module.css"

function HW10() {
    // useSelector, useDispatch
    let loading = useSelector<AppStoreType, LoadingStateType>(state => state.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        // setTimeout
        const timeOutID = setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        return () => {
            clearTimeout(timeOutID)
        }
    };

    return (
        <div>
            <hr/>
            homeworks 10
            {/*should work (должно работать)*/}
            {loading.loading
                ? (
                    <div className={styles.preloader}>
                        <img src={preloader} alt="preloader"/>
                    </div>
                )
                : (
                    <div className={styles.preloader}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
