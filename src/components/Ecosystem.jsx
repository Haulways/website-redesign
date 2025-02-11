import React from 'react';
import ArrowUpRight from '../assets/custom-icons/ArrowUpRight';
import BG1 from "../assets/images/bg-1.png";

const Ecosystem = (props) => {
    const { header, text, image } = props;
    return (
        <div className='xui-px-1 xui-py-2 xui-pos-relative xui-bdr-rad-1'>
            <img src={image} alt="" className='xui-w-fluid-100' />
            <h3 className='xui-font-sz-120 xui-font-w-500'>{header}</h3>
            <div className='xui-mt-1 xui-d-flex xui-flex-ai-center'>
                <div className='xui-pr-1' style={{width: 'calc(100% - 40px)'}}>
                    <p className='xui-font-sz-100 xui-lg-font'>{text}</p>
                </div>
                <div>
                    <ArrowUpRight />
                </div>
            </div>
            <img src={BG1} alt="" className='xui-w-fluid-100 xui-h-fluid-100 radial-gradient2' />
        </div>
    );
};

export default Ecosystem;