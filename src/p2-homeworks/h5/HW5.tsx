import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";
import s from "./HW5.module.css"

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/junior",
    JUNIOR_PLUS: "/junior-plus"
    // add paths
}
function HW5() {
    return (
        <div className={s.wrapper}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
