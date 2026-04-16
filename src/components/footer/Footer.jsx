import React from 'react';
import footerLogo from '../../assets/logo-xl.png'
import insta from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
    return (
        <div className='p-20 bg-[#244D3F] text-white'>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <img src={footerLogo} alt="" />
                    <p className=' text-[16px] text-center text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <h3>Social Links</h3>
                    <div className='flex gap-4'>
                        <img className='hover:cursor-pointer' src={insta} alt="" />
                        <img className='hover:cursor-pointer' src={facebook} alt="" />
                        <img className='hover:cursor-pointer' src={twitter} alt="" />
                    </div>
                </div>
            </div>

            <div className='divider '></div>

            <div className='flex flex-col md:flex-row justify-between items-center gap-5 text-gray-400'>
                <h1>© 2026 KeenKeeper. All rights reserved.</h1>
                <div className='list-none flex items-center gap-5 '>                   
                    <li>Privacy Policy </li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </div>
            </div>
        </div>
    );
};

export default Footer;