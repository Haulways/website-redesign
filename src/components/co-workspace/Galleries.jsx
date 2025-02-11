import React from 'react';
import Workspace from "../../assets/images/co-workspace/workspace.png";
import GalleryDesc1 from "../../assets/images/co-workspace/gallery-desc1.png";
import GalleryDesc2 from "../../assets/images/co-workspace/gallery-desc2.png";
import GalleryDesc3 from "../../assets/images/co-workspace/gallery-desc3.png";
import GalleryDesc4 from "../../assets/images/co-workspace/gallery-desc4.png";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Galleries = () => {
    return (
        <section className='xui-container xui-py-3'>
            <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1'>
                <div className='xui-h-500 xui-d-flex xui-flex-dir-column xui-flex-jc-space-between'>
                    <h3 className='xui-font-sz-250 xui-font-w-500'>Gallery</h3>
                    <p className='xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100'>Step into a vibrant space designed for collaboration and creativity, featuring flexible work areas, modern amenities, and a community built for growth.</p>
                </div>
                <div className='xui-bg-sz-cover xui-h-500 xui-bg-pos-center xui-bdr-rad-half xui-pos-relative' style={{backgroundImage: `url('${Workspace}')`}}>
                    {/* <img src={GalleryDesc1} alt="" className='xui-pos-absolute xui-img-400' style={{"bottom": '10px', "left": '-25px'}} /> */}
                    <div className='gallery-gradient'>
                        <h3 className='xui-font-sz-120 xui-font-w-500'>24/7 Access</h3>
                        <p className='xui-font-sz-100 xui-mt-half'>Work anytime, your way.</p>
                    </div>
                </div>
                <div className='xui-bg-sz-cover xui-h-500 xui-bg-pos-center xui-bdr-rad-half xui-pos-relative' style={{backgroundImage: `url('${Workspace}')`}}>
                    <div className='gallery-gradient'>
                        <h3 className='xui-font-sz-120 xui-font-w-500'>Kitchen Area</h3>
                        <p className='xui-font-sz-100 xui-mt-half'>Refuel, unwind and connect.</p>
                    </div>
                </div>
            </div>
            <img src={Workspace} alt="" className='xui-w-fluid-100 xui-bdr-rad-1 xui-mt-2' />
            <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1 xui-mt-2'>
                <div className='xui-bg-sz-cover xui-h-500 xui-bg-pos-center xui-bdr-rad-half xui-pos-relative' style={{backgroundImage: `url('${Workspace}')`}}>
                    <div className='gallery-gradient'>
                        <h3 className='xui-font-sz-120 xui-font-w-500'>Solar Powered Space</h3>
                        <p className='xui-font-sz-100 xui-mt-half'>Sustainable energy for your workspace.</p>
                    </div>
                </div>
                <div className='xui-bg-sz-cover xui-h-500 xui-bg-pos-center xui-bdr-rad-half xui-pos-relative' style={{backgroundImage: `url('${Workspace}')`}}>
                    <div className='gallery-gradient'>
                        <h3 className='xui-font-sz-120 xui-font-w-500'>High-Speed Internet</h3>
                        <p className='xui-font-sz-100 xui-mt-half'>Available Fibre optics and Starlink access.</p>
                    </div>
                </div>
                <div className='xui-h-500 xui-d-flex xui-flex-dir-column xui-flex-jc-space-between xui-p-2 linear-gradient1 xui-text-white xui-bdr-rad-half'>
                    <div>
                        <h3 className='xui-font-sz-200 xui-font-w-500'>Book a Space Today</h3>
                        <p className='xui-mt-2 xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100'>Secure your spot and elevate your work experience in our inspiring workspace. Enjoy modern amenities, flexible options, and a community built for creativity and growth.</p>
                    </div>
                    <HashLink className='xui-bg-white xui-bdr-rad-1 xui-btn-block xui-text-dc-none xui-text-black xui-font-sz-100 xui-font-w-500' smooth to={'#book-section'}>Book Now</HashLink>
                </div>
            </div>
        </section>
    );
};

export default Galleries;