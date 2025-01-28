import './input.scss'

type Props = React.ButtonHTMLAttributes<HTMLInputElement> & {
    labelValue?: string
    disabled?: boolean
    error?: string
};

export const Input = ({labelValue, disabled = false, error, ...props}: Props) => {
    const classDisable = disabled ? 'disabled' : ''
    const classError = error ? 'error' : ''

    if (labelValue) {
        return (
            <div className={'wrapper'}>
                <label className={'label'} htmlFor="value">{labelValue}</label>
                <input {...props}
                       id={'value'}
                       className={'input' + ' ' + classDisable + ' ' + classError}
                       disabled={disabled}
                >
                </input>
                {error && <span className={'errorMessage'}>{error}</span>}
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

