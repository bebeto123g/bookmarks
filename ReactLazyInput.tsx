import React, {
    FocusEventHandler,
    InputHTMLAttributes,
    KeyboardEventHandler,
    useEffect,
    useRef,
    useState,
} from 'react';

interface ILazyInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'defaultValue' | 'onBlur' | 'onKeyUp' | 'defaultValue'
    > {
    value: string;
    onChange: (value: string) => void;
}

export const LazyInput = (props: ILazyInputProps) => {
    const { value, onChange, type = 'text', ...otherProps } = props;
    const [stateValue, setStateValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current && stateValue !== value) {
            inputRef.current.value = value;
        }
    }, [value, stateValue]);

    const setValue = (newValue: string) => {
        if (value !== newValue) {
            setStateValue(newValue);
            onChange(newValue);
        }
    };

    const checkChange: FocusEventHandler<HTMLInputElement> = (event) => {
        setValue(event.currentTarget.value);
    };

    const pressEnter: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.code === 'Enter') {
            setValue(event.currentTarget.value);
        }
    };

    return (
        <input
            {...otherProps}
            type={type}
            defaultValue={value}
            onBlur={checkChange}
            onKeyUp={pressEnter}
            ref={inputRef}
        />
    );
};
