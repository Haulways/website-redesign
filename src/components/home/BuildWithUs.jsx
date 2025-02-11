import React from 'react';
import GreenHeader from '../GreenHeader';

const BuildWithUs = () => {
    return (
        <>
            <section className='xui-container xui-pt-1 xui-pb-3 xui-pos-relative'>
                <h3 className='xui-font-sz-400 xui-mt-half xui-font-w-600 xui-text-capitalize'><span className='color-grey-inactive'>Build with</span> Us</h3>
                <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-half xui-pt-2 bdr-color xui-pt-2 xui-mt-3'>
                    <div>
                        
                    </div>
                    <div>
                        <div>
                            <GreenHeader text='Partner with Grascope Industries' fontSize={'xui-font-sz-110'} />
                            <p className='xui-font-sz-100 xui-lg-w-fluid-95 xui-w-fluid-100 xui-line-height-1-half xui-mt-2'>We’re more than just a service provider; we’re your strategic partner in growth. Whether you need outsourcing solutions, IT services, or coworking spaces, we work with you every step of the way to build a brighter future.</p>
                        </div>
                        <div className='xui-mt-6'>
                            <GreenHeader text='Why Build With Us' fontSize={'xui-font-sz-100'} />
                            <ul className='xui-pl-1-half xui-mt-2'>
                                <li className='xui-font-sz-100 xui-lg-w-fluid-95 xui-w-fluid-100 xui-line-height-1-half'><span className='xui-font-w-600'>Collaboration:</span> We work hand-in-hand with you to deliver bespoke solutions aligned with your objectives.</li>
                                <li className='xui-font-sz-100 xui-lg-w-fluid-95 xui-w-fluid-100 xui-line-height-1-half xui-mt-half'><span className='xui-font-w-600'>Reliability:</span> Our unwavering commitment ensures you receive top-notch services delivered on time, every time.</li>
                                <li className='xui-font-sz-100 xui-lg-w-fluid-95 xui-w-fluid-100 xui-line-height-1-half xui-mt-half'><span className='xui-font-w-600'>Growth-Oriented:</span>  Innovative strategies and forward-thinking approaches to help your business thrive.</li>
                            </ul>
    
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BuildWithUs;