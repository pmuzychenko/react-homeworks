import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import styles from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(100);


    const onChangeRange = (value: number) => {
        setValue1(value)
    }
    const onChangeDoubleInputRange = (array: number[]) => {
        setValue1(array[0])
        setValue2(array[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}

            <div className={styles.HW11}>
                <div className={styles.superRangeInput}>
                    <span>{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={onChangeRange}
                        // сделать так чтоб value1 изменялось
                    />
                </div>

                <div className={styles.superDoubleRangeInput}>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        // сделать так чтоб value1 и value2 изменялось
                        onChangeRange={onChangeDoubleInputRange}
                        value={[value1, value2]}
                    />
                    <span>{value2}</span>
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
