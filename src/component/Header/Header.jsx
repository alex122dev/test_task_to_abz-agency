import logoImage from '../../assets/Logo.svg'
import { Button } from '../common/Button/Button'

export const Header = () => {
    return <header className='header'>
        <div className="header__container container">
            <div className="header__logo">
                <img src={logoImage} alt="logo" />
            </div>
            <div className="header-buttons">
                <Button text={'Users'} />
                <Button text={'Sing up'} />
            </div>
        </div>
    </header>
}