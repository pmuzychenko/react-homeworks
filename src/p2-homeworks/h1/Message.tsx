import React from "react";
import styles from "./Message.module.css";

type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={styles.message}>
            <img className={styles.avatar_img} src={props.avatar}/>
            <div className={styles.wrapper}>
                <div className={styles.message_block}>
                    <span className={styles.name}>{props.name}</span>
                    <span className={styles.text}>{props.message}</span>
                    <span className={styles.time}>{props.time}</span>
                </div>
            </div>


        </div>
    );
}

export default Message;
