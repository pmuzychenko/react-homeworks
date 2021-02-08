import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.currentTheme);
    const dispatch = useDispatch()

    const onChangeOption = (newTheme: string) => {
        dispatch(changeThemeC(newTheme))
    }

    return (
        <div className={s[theme]}>
            <hr/>

            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <SuperRadio
                name={"radio"}
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}/>
            <hr/>
        </div>
    );
}

export default HW12;
