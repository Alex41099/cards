import {IncubatorLogo} from "../assets/icons/IncubatorLogo.tsx";
import './header.scss'
import {Button} from "../button/Button.tsx";

type Props = {
    isLogged: boolean
    userName: string
    userPhoto: string
    userHref: string
}

export const Header = ({isLogged, userName, userPhoto, userHref}: Props) => {
    return (
        <header className={'header'}>
            <IncubatorLogo/>
            {isLogged ?
                <div className={'wrapper'}>
                    <a className={'link'} href={userHref}>{userName}</a>
                    <img className={'photo'} src={userPhoto} alt={'photo user'}/>
                </div>
                : <Button variant={'secondary'}>Sign In</Button>}
        </header>
    );
};

