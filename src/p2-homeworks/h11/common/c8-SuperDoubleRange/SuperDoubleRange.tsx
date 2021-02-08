import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";
import styles from "../../HW11.module.css"

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]): void => {

        onChangeRange && onChangeRange(newValue as number[]);

    };


    return (
        <>
            <Slider className={styles.slider}
                    onChange={handleChange}
                    value={value}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
            />
        </>
    );
}

export default SuperDoubleRange;
