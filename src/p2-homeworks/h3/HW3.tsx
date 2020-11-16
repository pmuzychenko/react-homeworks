import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import AlternativeGreeting from "./AlternativeGreeting";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let newInputElement = [{_id: v1(), name: name}, ...users]
        setUsers(newInputElement); // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeGreeting users = {users}
                                 message={'Hello, '}
            userNumberInTheList = {'! Your number in the list: ' }
            />
            <hr/>
        </div>
    );
}

export default HW3;
