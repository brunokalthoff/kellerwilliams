import LogoWhite from './images/kw-logo-w.png';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';


function Header(props) {
    return (
        <header>
            <div>

                <motion.img className='headerLogo' src={LogoWhite} alt='logo' />
                <div className='splitButton'>
                    <motion.a initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.5, type: "spring", bounce: 0 }} href="https://pages.kw.com/jerry-van-leeuwen/456631/c97sjueojc6fmk0ois5g.html" target="_blank" rel="noreferrer"><AiFillMail /><span>Get started<BsArrowUpRight style={{ marginLeft: '.3rem' }} color='var(--black)' size={18} /></span></motion.a>

                    <motion.a initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.7, type: "spring", bounce: 0 }} href='tel:+1-519-635-4799'><AiFillPhone /><span>(519)-635-4799</span></motion.a>

                </div>
            </div>
        </header>
    );
}

export default Header;