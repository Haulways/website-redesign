import React from 'react';
import HaulwayOverview from "../../assets/images/home/haulway-overview.png";
import BegorahOverview from "../../assets/images/home/begorah-overview.png";
import GrascopeOverview from "../../assets/images/home/grascope-overview.png";
import SunflowerOverview from "../../assets/images/home/sunflower-overview.png";
import SunflowerAppOverview from "../../assets/images/home/sunflower-app-overview.png";
import AmanduOverview from "../../assets/images/home/amandu-overview.png";
import Ecosystem from '../Ecosystem';

const EcosystemOverview = () => {
    return (
        <section className='xui-container xui-py-3'>
            <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-half'>
                <div>
                    <h3 className='xui-font-sz-250 xui-font-w-600 xui-m-none'>Ecosystem Overview</h3>
                </div>
                <div>
                    <p className='xui-font-sz-100 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'>Discover the innovative companies that leverage our technology to drive growth, efficiency, and success across industries.</p>
                </div>
            </div>
            <div className='xui-mt-2 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-3'>
                <Ecosystem header='Haulway App' text='Social - Commerce - Mobile App Development' image={HaulwayOverview} />
                <Ecosystem header='Begorah LTD' text='EduTech - Website Development' image={BegorahOverview} />
                <Ecosystem header='Grascope BPO' text='Business Process Outsourcing platform - Website Development' image={GrascopeOverview} />
                <Ecosystem header='Sunflower Pantry' text='E-commerce - Website Development' image={SunflowerOverview} />
                <Ecosystem header='Sunflower Pantry' text='Social-Commerce - Mobile App Development' image={SunflowerAppOverview} />
                <Ecosystem header='Amandu Farms' text='AgroTech - Website Development' image={AmanduOverview} />
            </div>
        </section>
    );
};

export default EcosystemOverview;