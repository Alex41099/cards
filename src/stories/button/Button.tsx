import './button.scss';
import {ExitLogout} from "../assets/icons/ExitLogout.tsx";

type variantBtn = 'secondary'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string;
    disabled?: boolean;
    variant?: variantBtn
    exitIcon?: boolean
};

export const Button = ({ children, disabled = false, variant, exitIcon, ...props }: Props) => {
    const variantBtn = variant === 'secondary'? 'button secondary': 'button'
    const variantDisable
        = disabled && variant === 'secondary'? 'secondary disabled': disabled && !variant? 'disabled': ''

    return (
        <button
            {...props}
            className={variantBtn + ' ' + variantDisable}
            disabled={disabled}
        >
            {exitIcon && <ExitLogout/>}
            {children}
        </button>
    );
};