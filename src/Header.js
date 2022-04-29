import LogoWhite from './images/kw-logo-w.png';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';


function Header(props) {
    return (
        <header>
            <div>

                <img className='headerLogo' src={LogoWhite} alt='logo' />
                <div className='splitButton'>
                    <a href="https://pages.kw.com/jerry-van-leeuwen/456631/c97sjueojc6fmk0ois5g.html" target="_blank" rel="noreferrer"><AiFillMail /><span>Start now<BsArrowUpRight style={{marginLeft: '.3rem'}} color='var(--black)' size={18} /></span></a>
                   
                    <a href='tel:+1-519-635-4799'><AiFillPhone /><span>+1-519-635-4799</span></a>
                    
                    </div>
            </div>
        </header>
    );
}

export default Header;