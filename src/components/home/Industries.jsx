import React, { useEffect, useState } from 'react';
import GreenHeader from '../GreenHeader';
import LegalSector from '../../assets/custom-icons/LegalSector';
import Industry from '../Industry';
import Healthcare from '../../assets/custom-icons/Healthcare';
import Education from '../../assets/custom-icons/Education';
import Startup from '../../assets/custom-icons/Startup';
import Retail from '../../assets/custom-icons/Retail';
import Admin from '../../assets/custom-icons/Admin';

const Industries = () => {
    return (
        <>
            <section className='xui-container xui-pt-1 xui-pb-3 xui-pos-relative'>
                <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-half xui-pt-2'>
                    <div>
                        <GreenHeader text='Industries & Markets We Serve' fontSize={'xui-font-sz-150'} />
                        <h3 className='xui-font-sz-220 xui-mt-half xui-font-w-500 xui-text-capitalize'><span className='color-grey-inactive'>We partner with <br /> diverse industries to provide</span> innovative and efficient solutions.</h3>
                    </div>
                    <div>
                        <Industry icon={<LegalSector />} text1='Legal Sector:' text2='Trusted paralegal support services that enhance compliance, accuracy, and efficiency for law firms.' />
                        <Industry icon={<Healthcare />} text1='Healthcare:' text2='Reliable staffing and administrative solutions that allow medical institutions to focus on patient care.' />
                        <Industry icon={<Education />} text1='Education:' text2=' Cutting-edge e-learning content development that redefines educational excellence for schools, universities, and training organizations.' />
                        <Industry icon={<Startup />} text1='Startups and Tech Firms:' text2=' Scalable IT and administrative solutions designed to fuel growth for emerging businesses.' />
                        <Industry icon={<Retail />} text1='Retail and E-commerce:' text2=' Streamlined IT services and outsourcing solutions to boost customer satisfaction and operational efficiency.' />
                        <Industry icon={<Admin />} text2='Administrative assistants, Virtual assistants, Data entry and data analytics, Accounting' />
                    </div>
                </div>
                <div className='radial-gradient1'></div>
            </section>
        </>
    );
};

export default Industries;