import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styles from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        // stop
        clearInterval(timerId);
    }
    const start = () => {
      //  stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    //const stringTime = "Time"; // fix with date
    //const stringDate = "Date"; // fix with date
    const stringTime = date.getHours() + ":" + (String(date.getMinutes()).padStart(2, "0")) + ":" + (String(date.getSeconds()).padStart(2, "0"));
    const stringDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

    return (
        <div className={styles.clock}>
            <div className={styles.time}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={styles.date}>
                    {stringDate}
                </div>
            )}
            <div className={styles.buttons}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    );
}

export default Clock;
