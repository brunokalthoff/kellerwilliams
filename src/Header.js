import mainLogo from './images/header-logo.png';
import { MdPhone } from 'react-icons/md';

function Header(props) {
    return (
        <header>
            <div>
                <a href='#contact'><img className='headerLogo' src={mainLogo} alt='logo' /></a>
                <a href="tel:+1-519-635-4799"><MdPhone />(519)-635-4799</a>
            </div>
        </header>
    );
}

export default Header;