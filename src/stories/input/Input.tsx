import './input.scss'
import {EyeOn} from '../assets/icons/EyeOn.tsx'
import EyeOff from "../assets/icons/EyeOff.tsx";
import {useRef, useState} from "react";
import {Loupe} from "../assets/icons/Loupe.tsx";

type Props = React.ButtonHTMLAttributes<HTMLInputElement> & {
    labelValue?: string
    disabled?: boolean
    error?: string
    inputPassword?: boolean
    inputSearch?: boolean
};

export const Input = (
    {
        labelValue,
        disabled = false,
        error,
        inputPassword = false,
        inputSearch = false,
        ...props
    }: Props) => {
    const [passwordMode, setPasswordMode] = useState(inputPassword)
    const [inputActive, setInputActive] = useState(false)

    const inputRef = useRef<HTMLInputElement | null>(null);

    const searchClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            setInputActive(true)
        }
    };
    const passwordModeHandler = () => {
        setPasswordMode(!passwordMode)
    }
    const inputOnClickHandler = () => {
        setInputActive(true)
    }
    const inputOnBlurHandler = () => {
        setInputActive(false)
    }

    const classDisable = disabled ? 'disabled' : ''
    const classError = error ? 'error' : ''
    const classPassword = inputPassword ? 'eyeInput' : ''
    const classSearch = inputSearch ? 'searchInput' : ''

    if (labelValue) {
        return (
            <div className={'wrapper'}>
                {inputSearch &&
                    <span className={'loupe'}
                          onClick={searchClick}
                    >
                    <Loupe color={inputActive ? 'white' : ''}/>
                </span>
                }
                <label className={'label'}
                       htmlFor="value"
                >
                    {labelValue}
                </label>
                <input {...props}
                       type={passwordMode ? 'password' : 'text'}
                       id={'value'}
                       className={'input' + ' ' + classDisable + ' ' + classError + ' ' + classPassword + ' ' + classSearch}
                       disabled={disabled}
                       ref={inputRef}
                       onBlur={inputOnBlurHandler}
                       onClick={inputOnClickHandler}
                >
                </input>
                {error && <span className={'errorMessage'}>{error}</span>}
                {inputPassword &&
                    <span className={'eye'} onClick={passwordModeHandler}>
                    {passwordMode ?
                        <EyeOff/>
                        : <EyeOn/>
                    }
                </span>}
            </div>
        );
    }

    return (
        <input {...props}
               id={'value'}
               className={'input'}
        >
        </input>
    );
};

