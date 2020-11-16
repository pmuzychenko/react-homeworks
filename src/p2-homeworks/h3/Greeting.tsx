import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import { SuperInputText } from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name === '' ? s.error : s.someClass; // need to fix with (?:)

    return (
        <div>
            <div className={s.greetingClass}>
                {/*<input placeholder={`Please, enter the user's name`} value={name} onChange={setNameCallback} className={inputClass}/>*/}
                <SuperInputText placeholder={`Please, enter the user's name`} value={name} onChange={setNameCallback}/>
                <span className={s.errorTextClass}>{error}</span>
                <button onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>
        </div>
    );
}

export default Greeting;
