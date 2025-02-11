import React, { useEffect, useState } from 'react';
import GreenHeader from '../GreenHeader';

const WhoWeAre = () => {
    return (
        <>
            <section className='xui-container xui-pt-6 xui-pb-3'>
                <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-half bdr-color xui-pt-2'>
                    <div>
                        <GreenHeader text='WHO WE ARE' fontSize={'xui-font-sz-150'} />
                        <h3 className='xui-font-sz-250 xui-mt-half xui-font-w-600 xui-max-w-500 xui-w-fluid-100'>What Makes Us Exceptional?</h3>
                    </div>
                    <div>
                        <p className='xui-font-sz-100 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'><span className='xui-font-w-600'>Global Reach:</span> Serving clients in the UK, USA, and beyond with tailored, world-class outsourcing and IT solutions.</p>
                        <p className='xui-font-sz-100 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-1-half'><span className='xui-font-w-600'>Innovative Solutions:</span> Our forward-thinking approach leverages the latest technologies and creative strategies to address complex challenges.</p>
                        <p className='xui-font-sz-100 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-1-half'><span className='xui-font-w-600'>Expert Team:</span> We offer a dedicated, highly skilled team that thrives on delivering outstanding results and driving excellence.</p>
                        <p className='xui-font-sz-100 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-6-half'>At Grascope Industries, we specialize in delivering tailored solutions that redefine business success. From small startups to established enterprises, we empower organizations with innovative strategies, cutting-edge technologies, and exceptional service while delivering quality services to satisfy diverse needs globally.</p>
                    </div>
                </div>
                <div className='xui-d-grid xui-lg-grid-col-2 xui-mt-4 xui-grid-col-1 xui-grid-gap-half bdr-color xui-pt-2'>
                    <div>
                        <GreenHeader text='HOW WE STAND OUT' fontSize={'xui-font-sz-150'} />
                        <h3 className='xui-font-sz-250 xui-mt-half xui-font-w-600 xui-max-w-500 xui-w-fluid-100'>Key Differentiator</h3>
                    </div>
                    <div>
                        <p className='xui-font-sz-100 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'><span className='xui-font-w-600'>Diverse Services:</span>  From IT solutions to outsourcing and coworking spaces,we use in person management to offer a holistic approach to business growth.</p>
                        <p className='xui-font-sz-100 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-1-half'><span className='xui-font-w-600'>Customized Services:</span> We understand your challenges and work closely to provide every solution to meet your unique needs and goals.</p>
                        <p className='xui-font-sz-100 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-1-half'><span className='xui-font-w-600'>Cost Efficiency: </span> Our services are competitively priced, helping you maximize value and optimize ROI without compromising quality.</p>
                        <p className='xui-font-sz-100 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-1-half'><span className='xui-font-w-600'>24/7 Support: </span> Day or night, we’re here to ensure uninterrupted operations and exceptional service delivery.</p>
                        <p className='xui-font-sz-100 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-1-half'><span className='xui-font-w-600'>Local Expertise, Global Standards: </span> We tap into the exceptional talent pool in West Africa while adhering to global quality benchmarks.</p>
                        <p className='xui-font-sz-100 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-6-half'>At Grascope, we blend innovation with a human touch to create meaningful outcomes for our clients. Our focus is on crafting solutions that not only meet but exceed expectations.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhoWeAre;