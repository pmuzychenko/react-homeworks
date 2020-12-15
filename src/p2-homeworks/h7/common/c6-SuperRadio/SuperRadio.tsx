import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const mappedOptions: any[] = options ? options.map((option, i) => ( // map options with key
        <label key={name + "-" + i}>
            <input
                type={"radio"}
                name={"radio"}
                value={option}
                checked={value === option}
                onChange={onChangeCallback}
            />
            {option}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;