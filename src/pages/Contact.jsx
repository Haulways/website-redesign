import React from 'react';
import GeneralHeader from '../components/GeneralHeader';
import ContactBG from "../assets/images/contact/contact.png";
import CallBG from "../assets/images/contact/call.png";
import EmailBG from "../assets/images/contact/email.png";
import { Link } from 'react-router-dom';
import BackArrow from '../assets/custom-icons/BackArrow';
import RightArrow from '../assets/custom-icons/RightArrow';

const Contact = () => {
    return (
        <>
          <section className='xui-w-fluid-100'>
            <GeneralHeader>
                <Link to={'/'}><BackArrow /></Link>
                <div className='xui-mt-3 xui-text-center'>
                    {/* <img src={ContactLabel} alt="" /> */}
                    <div className='gradient-btn xui-d-inline-flex xui-flex-ai-center xui-text-uppercase xui-mx-auto ' style={{padding: '.6rem 1.8rem .6rem 1.8rem'}}>
                        <p className='xui-font-sz-100'>Contact us</p>
                    </div>
                    <h1 className='xui-lg-font-sz-250 xui-font-sz-300 xui-font-w-500 xui-text-capitalize xui-mx-auto'>Let’s Create Something Extraordinary Together</h1>
                    <p className='xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-mx-auto'>At Grascope Industries, we’re always eager to hear from you. Whether you have a groundbreaking idea, need assistance with a challenge, or want to learn more about our ecosystem, we’re here to help.</p>
                </div>
                <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-2 xui-mt-2'>
                    <div className='xui-h-450 xui-bg-sz-cover xui-bg-pos-center xui-d-flex xui-flex-ai-flex-start xui-flex-dir-column xui-flex-jc-space-between xui-p-1 xui-text-white xui-bdr-rad-half' style={{backgroundImage: `url('${ContactBG}')`}}>
                        <div>
                            <h3 className='xui-font-sz-200 xui-font-w-500'>Contact Us Via WhatsApp Message</h3>
                            <p className='xui-mt-2 xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100'>Reach out to us instantly via WhatsApp for quick assistance, personalized support & inquiries.</p>
                        </div>
                        <Link to='https://wa.me/447441395374' target='_blank' className='gradient-btn xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-1'>
                            <p className='xui-font-sz-100'>Contact us</p>
                            <RightArrow />
                        </Link>
                        {/* <Link to='https://wa.me/447441395374' target='_blank' className='xui-ml--1'><img src={ContactUs} alt="" /></Link> */}
                    </div>
                    <div className='xui-h-450 xui-bg-sz-cover xui-bg-pos-center xui-d-flex xui-flex-ai-flex-start xui-flex-dir-column xui-flex-jc-space-between xui-p-1 xui-text-white xui-bdr-rad-half' style={{backgroundImage: `url('${CallBG}')`}}>
                        <div>
                            <h3 className='xui-font-sz-200 xui-font-w-500'>Get In Touch With Us Via A Quick Call</h3>
                            <p className='xui-mt-2 xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100'>Connect with us effortlessly through a quick call to discuss your needs and explore solutions.</p>
                        </div>
                        <Link to='tel:+447441395374' className='gradient-btn xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-1'>
                            <p className='xui-font-sz-100'>Call us now</p>
                            <RightArrow />
                        </Link>
                        {/* <Link to='tel:+447441395374' className='xui-ml--1'><img src={CallUs} alt="" /></Link> */}
                    </div>
                    <div className='xui-h-450 xui-bg-sz-cover xui-flex-ai-flex-start xui-bg-pos-center xui-d-flex xui-flex-dir-column xui-flex-jc-space-between xui-p-1 xui-text-white xui-bdr-rad-half' style={{backgroundImage: `url('${EmailBG}')`}}>
                        <div>
                            <h3 className='xui-font-sz-200 xui-font-w-500'>Contact Us Via Email Message</h3>
                            <p className='xui-mt-2 xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100'>Reach out to us via email for inquiries, support, or detailed information.</p>
                        </div>
                        <Link to='mailto:contact@grascope.com' target='_blank' className='gradient-btn xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-1'>
                            <p className='xui-font-sz-100'>Contact us</p>
                            <RightArrow />
                        </Link>
                        {/* <Link to='mailto:contact@grascope.com' className='xui-ml--1'><img src={ContactUs} alt="" /></Link> */}
                    </div>
                </div>
            </GeneralHeader>  
          </section>
        </>
    );
};

export default Contact;