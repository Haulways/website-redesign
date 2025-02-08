import React, { useEffect, useState } from 'react';
import Welcome from "../../assets/images/welcome.png";
import { Link } from "react-router-dom";
import X from '../../assets/custom-icons/X';
import Facebook from '../../assets/custom-icons/Facebook';
import Instagram from '../../assets/custom-icons/Instagram';
import LinkedIn from '../../assets/custom-icons/LinkedIn';
import ArrowUp from '../../assets/custom-icons/ArrowUp';
import GeneralHeader from '../GeneralHeader';

const Header = () => {
    return (
        <>
            <GeneralHeader>
                <div className='xui-text-center xui-mt-6'>
                    <img src={Welcome} alt="" className='xui-img-250 xui-mx-auto' />
                    <h1 className='xui-lg-font-sz-450 xui-font-sz-250 xui-mx-auto xui-font-w-600 xui-max-w-800 xui-w-fluid-100'>Transforming <span className='color-linear'>Ideas into Solutions</span></h1>
                    <p className='xui-font-sz-95 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-mx-auto'>We build companies, improve ideas, and create solutions that empower businesses and individuals to thrive in a competitive world.</p>
                </div>
                <div className='xui-mt-7 xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                    <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                        <p className='xui-font-sz-85'>Follow Us</p>
                        <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                            <Link to='/'><X /></Link>
                            <Link to='/'><Facebook /></Link>
                            <Link to='/'><Instagram /></Link>
                            <Link to='/'><LinkedIn /></Link>
                        </div>
                    </div>
                    <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                        <p className='xui-font-sz-85'>Scroll to explore</p>
                        <span className='xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center'>
                            <ArrowUp />
                        </span>
                    </div>
                </div>
            </GeneralHeader>
        </>
    );
};

export default Header;