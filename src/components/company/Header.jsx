import React from 'react';
import GeneralHeader from '../GeneralHeader';

const Header = () => {
    return (
        <GeneralHeader>
            <div className='xui-mt-6 xui-text-center'>
                <h1 className='xui-lg-font-sz-450 xui-font-sz-250 xui-font-w-600 xui-max-w-800 xui-w-fluid-100 xui-text-capitalize xui-mx-auto'>Innovating Together, <span className='color-linear' >Building Tomorrow</span></h1>
                <p className='xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-mx-auto'>Partnering to develop innovative solutions that drive progress, empower communities, and shape a sustainable future for generations to come.</p>
            </div>
        </GeneralHeader>
    );
};

export default Header;