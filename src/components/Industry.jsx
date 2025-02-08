import React from 'react';

const Industry = (props) => {
    const { icon, text1, text2 } = props;
    return (
        <div className='xui-d-flex'>
            <div className='xui-w-80'>
                {icon}
            </div>
            <div className='xui-pl-1 xui-mb-1-half xui-d-inline-flex' style={{width: 'calc(100% - 80px)'}}>
                <div className='xui-p-1 xui-bdr-rad-1-half bg-gradient1'>
                    <p className='xui-font-sz-95 xui-lg-w-fluid-95 xui-w-fluid-100 xui-line-height-1-half'><span className='xui-font-w-600'>{text1}</span>  {text2}</p>
                </div>
            </div>
        </div>
    );
};

export default Industry;