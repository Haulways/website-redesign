import React, { useEffect, useState } from 'react';
import GreenHeader from '../GreenHeader';

const UnifyingPrinciple = () => {
    return (
        <>
            <section className='xui-container xui-py-3'>
                <div className='xui-row'>
                    <div className='xui-lg-col-5 xui-col-12'>
                        <GreenHeader text='Unifying Principle' fontSize={'xui-font-sz-120'} />
                        <h3 className='xui-font-sz-250 xui-mt-half xui-font-w-600 xui-max-w-500 xui-w-fluid-100'>Our Collaborative Approach</h3>
                    </div>
                    <div className='xui-lg-col-7 xui-col-12'>
                        <h3 className='xui-font-sz-110 xui-font-w-500'>Transforming ideas into performance across multiple industries.</h3>
                        <p className='xui-font-sz-100 xui-lg-w-fluid-95 xui-w-fluid-100 xui-line-height-1-half'>Grascope Industries operates as a cohesive ecosystem, where each subsidiary brings unique expertise to the table while contributing to a unified mission of innovation. This collaborative approach enables us to leverage diverse perspectives, cross-pollinate ideas, and deliver impactful solutions.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UnifyingPrinciple;