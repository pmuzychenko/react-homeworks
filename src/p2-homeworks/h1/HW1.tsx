import React from "react";
import Message from "./Message";

const messageData = {
    avatar: "https://scontent.fdnk3-2.fna.fbcdn.net/v/t1.0-9/p960x960/70912169_3605326306160106_9176558413746798592_o.jpg?_nc_cat=103&ccb=2&_nc_sid=85a577&_nc_ohc=O-l9uQbLtaAAX9HVT3Q&_nc_ht=scontent.fdnk3-2.fna&tp=6&oh=9dae4a430ae7cd63dc04e9b99ffe6551&oe=5FE0A867",
    name: "Pavel",
    message: "npm start нажимал?",
    time: "20:00",
};


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
