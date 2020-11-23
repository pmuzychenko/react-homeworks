import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";
export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/junior",
    JUNIOR_PLUS: "/junior-plus"
    // add paths
}
function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
