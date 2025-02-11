import React from 'react';
import GeneralHeader from '../GeneralHeader';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import RightArrow from '../../assets/custom-icons/RightArrow';

const Header = () => {
    return (
        <GeneralHeader>
            <div className='xui-mt-6 xui-text-center'>
                <h1 className='xui-lg-font-sz-450 xui-font-sz-250 xui-font-w-600 xui-max-w-800 xui-w-fluid-100 xui-mx-auto'>Your Space to Create, <span className='color-linear' >Collaborate, and Thrive</span></h1>
                <p className='xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-mx-auto'>A workspace where Ideas Breathe and Innovations Grow. Workspace Designed for Visionary Creators</p>
                {/* <HashLink smooth to={'#book-section'} className='xui-mt-1 xui-d-inline-block'>
                    <img src={BookSpace} alt="" />
                </HashLink> */}
                <HashLink smooth to={'#book-section'} className='gradient-btn xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-2 xui-mx-auto'>
                    <p className='xui-font-sz-100'>Book a Space</p>
                    <RightArrow />
                </HashLink>
            </div>
        </GeneralHeader>
    );
};

export default Header;