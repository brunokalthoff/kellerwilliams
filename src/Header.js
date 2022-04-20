import mainLogo from './images/header-logo.png';
import { MdPhone } from 'react-icons/md';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';


function Header(props) {
    return (
        <header>
            <div>
               
                    <img className='headerLogo' src={mainLogo} alt='logo' />
                {/* <a className='buttonPrimary' href="tel:+1-519-635-4799"><MdPhone />(519)-635-4799</a> */}
                <div className='splitButton'><button><AiFillMail /></button><button><AiFillPhone onClick={window.open("tel:+1-519-635-4799")} /></button></div>
            </div>
        </header>
    );
}

export default Header;