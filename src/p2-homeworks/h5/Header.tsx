import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./HW5";
import s from "./HW5.module.css"

function Header() {
    return (
        <nav className={s.navlink}>
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>{'pre-junior'}</NavLink>
            <NavLink to={PATH.JUNIOR} activeClassName={s.active}>{'junior'}</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>{'junior-plus'}</NavLink>
        </nav>
    );
}

export default Header;
