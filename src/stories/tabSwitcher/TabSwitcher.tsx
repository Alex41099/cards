import './tabSwitcher.scss'
import {useState} from "react";

type Props = {
    values: string[]
    defaultValue?: number
    getValue?: (value: number) => void
    disabled?: boolean
}

export const TabSwitcher = ({values, getValue, defaultValue, disabled = false}: Props) => {
    const [switchers, setSwitchers] = useState(defaultValue)
    const classDisable = disabled? 'disabled': ''

    return (
        <div className={'tab-switchers'}>
            {values.map((v, i) => {
                const getValueHandler = () => {
                    const num = i + 1
                    if (getValue) {
                        getValue(num)
                        setSwitchers(num)
                    }
                }
                const classActive = values.length > 1 && switchers === i + 1? 'active': ''

                return <button className={'tab-switchers-btn' + ' ' + classDisable + ' ' + classActive}
                               key={i}
                               onClick={getValueHandler}
                               disabled={disabled}
                >
                    {v}
                </button>
            })}
        </div>
    );
};

