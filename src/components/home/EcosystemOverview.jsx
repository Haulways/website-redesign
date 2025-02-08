import React from 'react';
import HaulwayOverview from "../../assets/images/home/haulway-overview.png";
import Ecosystem from '../Ecosystem';

const EcosystemOverview = () => {
    return (
        <section className='xui-container xui-py-3'>
            <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-half'>
                <div>
                    <h3 className='xui-font-sz-250 xui-font-w-600 xui-m-none'>Ecosystem Overview</h3>
                </div>
                <div>
                    <p className='xui-font-sz-95 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'>Discover the innovative companies that leverage our technology to drive growth, efficiency, and success across industries.</p>
                </div>
            </div>
            <div className='xui-mt-2 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-3'>
                <Ecosystem header='Haulway App' text='Social-Commerce - Mobile App Development' image={HaulwayOverview} />
                <Ecosystem header='Haulway App' text='Social-Commerce - Mobile App Development' image={HaulwayOverview} />
                <Ecosystem header='Haulway App' text='Social-Commerce - Mobile App Development' image={HaulwayOverview} />
                <Ecosystem header='Haulway App' text='Social-Commerce - Mobile App Development' image={HaulwayOverview} />
                <Ecosystem header='Haulway App' text='Social-Commerce - Mobile App Development' image={HaulwayOverview} />
                <Ecosystem header='Haulway App' text='Social-Commerce - Mobile App Development' image={HaulwayOverview} />
            </div>
        </section>
    );
};

export default EcosystemOverview;