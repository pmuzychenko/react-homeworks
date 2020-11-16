import React from "react";
import {UserType} from "./HW3";

type PropsType = {
    users: Array<UserType>
    message: string
    userNumberInTheList: string

}

const AlternativeGreeting: React.FC<PropsType> = (props) => {
    return (
        <div>
            {props.users.map((user, index) =>
                (<div key={user._id}>{props.message}
                    {user.name}
                    {props.userNumberInTheList}
                    {props.users.length - index}
                </div>))}
        </div>
    );
}

export default AlternativeGreeting;
