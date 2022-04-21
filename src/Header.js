import Logo from './images/kw-logo-b.png';
import { AiFillPhone } from 'react-icons/ai';
import { SiMinutemailer } from 'react-icons/si';


function Header(props) {
    return (
        <header>
            <div>
               
                    <img className='headerLogo' src={Logo} alt='logo' />
                {/* <a className='buttonPrimary' href="tel:+1-519-635-4799"><MdPhone />(519)-635-4799</a> */}
                <div className='splitButton'><a href="https://pages.kw.com/jerry-van-leeuwen/456631/c97sjueojc6fmk0ois5g.html" target="_blank" rel="noreferrer"><SiMinutemailer /></a><span>|</span><AiFillPhone onClick={()=>window.open("tel:+1-519-635-4799")} /><span>+1-519-635-4799</span></div>
            </div>
        </header>
    );
}

export default Header;