import React from "react";
import {AffairType} from "./HW2";
import styles from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div className={styles.affairBlock}>
            <ul>
                <li><span> {props.affair._id}. {props.affair.name}: {props.affair.priority} </span>
                    <SuperButton red onClick={deleteCallback}>X</SuperButton>
                    {/*<button onClick={deleteCallback}>X</button>*/}
                </li>
            </ul>
        </div>
    );
}

export default Affair;
