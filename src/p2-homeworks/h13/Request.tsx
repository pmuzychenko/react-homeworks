import React, {useEffect, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsAPI, responseFromServer} from "./RequestsAPI";

export function Request() {
    const [checkboxValue, SetCheckboxValue] = useState<boolean>(false);

    useEffect(() => {
        requestsAPI.sendRequest(checkboxValue)
    }, [checkboxValue])

    const onSuperButtonClickHandler = () => SetCheckboxValue(!checkboxValue)

    return (
        <div>
            <SuperButton onClick={onSuperButtonClickHandler}>
                Submit request
            </SuperButton>
            <SuperCheckbox checked={checkboxValue}/>
            {responseFromServer}
        </div>
    );
}

export default Request;
