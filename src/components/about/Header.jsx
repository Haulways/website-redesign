import React from 'react';
import GeneralHeader from '../GeneralHeader';

const Header = () => {
    return (
        <GeneralHeader>
            <div className='xui-mt-6'>
                <h1 className='xui-lg-font-sz-450 xui-font-sz-250 xui-font-w-600 xui-text-capitalize'>We transform bold ideas <br /> <span className='color-linear' style={{marginLeft: '14rem'}}>Ideas into Solutions</span> <br /> across industries.</h1>
                <p className='xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100'>We engineer innovation, build strategic solutions, and help companies turn vision into tangible success.</p>
            </div>
        </GeneralHeader>
    );
};

export default Header;