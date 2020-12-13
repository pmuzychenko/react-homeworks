import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styles from "./HW8.module.css"


const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div className={styles.finalPeople} key={p._id}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8
            <div className={styles.wrapperHW8}>
                <div className={styles.tableHeader}>
                    <div>Name</div>
                    <div>Age</div>
                </div>

                {/*should work (должно работать)*/}

                {finalPeople}
                <div className={styles.buttons}>
                    <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                    <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                    <div><SuperButton onClick={checkAge}>check 18</SuperButton></div>
                </div>
                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativePeople/>*/}
                <hr/>
            </div>
        </div>
    );
}

export default HW8;
