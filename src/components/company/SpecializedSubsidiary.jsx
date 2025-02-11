import React from 'react';
import GrascopeBPO from "../../assets/images/company/grascope-bpo.png";
import Haulway from "../../assets/images/company/haulway.png";
import Sunflower from "../../assets/images/company/sunflower.png";
import Begorah from "../../assets/images/company/begorah.png";
import { Link } from 'react-router-dom';
import RightArrow from '../../assets/custom-icons/RightArrow';

const SpecializedSubsidiary = () => {
    return (
        <section className='xui-container xui-py-3'>
            <h3 className='xui-font-sz-250 xui-font-w-500 xui-m-none'>Specialized Subsidiaries</h3>
            <div className='subsidiary xui-row xui-p-1 xui-bdr-rad-1 xui-mt-2' style={{"borderTop": '1px solid #FFF'}}>
                <div className='xui-lg-col-4 xui-col-12'>
                    <div className={'xui-d-inline-flex xui-flex-ai-self-start xui-grid-gap-1 '}>
                        <span className='xui-font-sz-110 xui-font-w-400'>01.</span>
                        <div>
                            <h3 className='xui-font-sz-160 xui-m-none xui-font-w-500 xui-text-uppercase'>Grascope BPO</h3>
                        </div>
                    </div>
                </div>
                <div className='xui-lg-col-8 xui-col-12'>
                    <div className='xui-row'>
                        <div className='xui-lg-col-5 xui-col-12'>
                            <img className='xui-w-fluid-100' src={GrascopeBPO} alt="" />
                        </div>
                        <div className='xui-lg-col-7 xui-col-12 xui-pl-1'>
                            <h3 className='xui-font-sz-150 xui-m-none xui-font-w-500'>Talent Outsourcing Service</h3>
                            <p className='xui-font-sz-90 xui-mt-half xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100'>Grascope BDO focuses on transforming how businesses approach talent acquisition, development, and management. Our goal is to unlock the full potential of individuals and teams, delivering tailored talent solutions that meet the ever-evolving needs of businesses.</p>
                            <h3 className='xui-font-sz-120 xui-mt-1-half xui-font-w-500'>Core Services</h3>
                            <div className='xui-mt-half xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                                <p className='xui-font-sz-90 xui-line-height-1-half'>Global Workforce Solutions</p> |
                                <p className='xui-font-sz-90 xui-line-height-1-half'>Global Workforce Solutions</p> |
                                <p className='xui-font-sz-90 xui-line-height-1-half'>Professional Talent Outsourcing</p>
                            </div>
                            <h3 className='xui-font-sz-120 xui-mt-1-half xui-font-w-500'>Companies Under Grascope BPO</h3>
                            <p className='xui-font-sz-90 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100'>Grascope BDO: An international recruitment solutions that connect businesses globally with top-tier talents in West Africa.</p>
                            <Link to={'/'} target='_blank' className='gradient-btn xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-1 xui-mx-auto'>
                                <p className='xui-font-sz-100'>Learn More</p>
                                <RightArrow />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subsidiary xui-row xui-p-1 xui-bdr-rad-1 xui-mt-2' style={{"borderTop": '1px solid #FFF'}}>
                <div className='xui-lg-col-4 xui-col-12'>
                    <div className={'xui-d-inline-flex xui-flex-ai-self-start xui-grid-gap-1 '}>
                        <span className='xui-font-sz-110 xui-font-w-400'>02.</span>
                        <div>
                            <h3 className='xui-font-sz-160 xui-m-none xui-font-w-500 xui-text-uppercase'>Haulway</h3>
                        </div>
                    </div>
                </div>
                <div className='xui-lg-col-8 xui-col-12'>
                    <div className='xui-row'>
                        <div className='xui-lg-col-5 xui-col-12'>
                            <img className='xui-w-fluid-100' src={Haulway} alt="" />
                        </div>
                        <div className='xui-lg-col-7 xui-col-12 xui-pl-1'>
                            <h3 className='xui-font-sz-150 xui-m-none xui-font-w-500'>Creative Professionals' Global Platform</h3>
                            <p className='xui-font-sz-90 xui-mt-half xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100'>Haulway is a platform designed for creative professionals to showcase their work, sell their products, and connect with a global audience. It’s a dynamic space where creativity meets opportunity, enabling artists, designers, and creators to thrive in a competitive market.</p>
                            <h3 className='xui-font-sz-120 xui-mt-1-half xui-font-w-500'>Core Offerings</h3>
                            <div className='xui-mt-half xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                                <p className='xui-font-sz-90 xui-line-height-1-half'>Global Showcase for Creative Professionals</p> |
                                <p className='xui-font-sz-90 xui-line-height-1-half'>Product Marketplace</p> |
                                <p className='xui-font-sz-90 xui-line-height-1-half'>Professional Networking</p> |
                                <p className='xui-font-sz-90 xui-line-height-1-half'>Creative Community Building</p>
                            </div>
                            <Link to={'https://haulway.co/'} target='_blank' className='gradient-btn xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-1 xui-mx-auto'>
                                <p className='xui-font-sz-100'>Explore Haulway</p>
                                <RightArrow />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subsidiary xui-row xui-p-1 xui-bdr-rad-1 xui-mt-2' style={{"borderTop": '1px solid #FFF'}}>
                <div className='xui-lg-col-4 xui-col-12'>
                    <div className={'xui-d-inline-flex xui-flex-ai-self-start xui-grid-gap-1 '}>
                        <span className='xui-font-sz-110 xui-font-w-400'>03.</span>
                        <div>
                            <h3 className='xui-font-sz-160 xui-m-none xui-font-w-500 xui-text-uppercase'>Sunflower Pantry</h3>
                        </div>
                    </div>
                </div>
                <div className='xui-lg-col-8 xui-col-12'>
                    <div className='xui-row'>
                        <div className='xui-lg-col-5 xui-col-12'>
                            <img className='xui-w-fluid-100' src={Sunflower} alt="" />
                        </div>
                        <div className='xui-lg-col-7 xui-col-12 xui-pl-1'>
                            <h3 className='xui-font-sz-150 xui-m-none xui-font-w-500'>Artisanal Farm Innovations</h3>
                            <p className='xui-font-sz-90 xui-mt-half xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100'>Sunflower Pantry is a sustainable farm dedicated to producing high-quality finished products. By focusing on ethical farming practices and innovative production techniques, Sunflower Pantry delivers goods that are both nutritious and environmentally friendly.</p>
                            <h3 className='xui-font-sz-120 xui-mt-1-half xui-font-w-500'>Focus Areas</h3>
                            <div className='xui-mt-half xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                                <p className='xui-font-sz-90 xui-line-height-1-half'>Farm-Fresh Produce</p> |
                                <p className='xui-font-sz-90 xui-line-height-1-half'>Finished Food Products</p> |
                                <p className='xui-font-sz-90 xui-line-height-1-half'>Sustainable Farming Practices</p>
                            </div>
                            <Link to={'/'} target='_blank' className='gradient-btn xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-1 xui-mx-auto'>
                                <p className='xui-font-sz-100'>Discover Sunflower Pantry</p>
                                <RightArrow />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subsidiary xui-row xui-p-1 xui-bdr-rad-1 xui-mt-2' style={{"borderTop": '1px solid #FFF'}}>
                <div className='xui-lg-col-4 xui-col-12'>
                    <div className={'xui-d-inline-flex xui-flex-ai-self-start xui-grid-gap-1 '}>
                        <span className='xui-font-sz-110 xui-font-w-400'>04.</span>
                        <div>
                            <h3 className='xui-font-sz-160 xui-m-none xui-font-w-500 xui-text-uppercase'>Begorah</h3>
                        </div>
                    </div>
                </div>
                <div className='xui-lg-col-8 xui-col-12'>
                    <div className='xui-row'>
                        <div className='xui-lg-col-5 xui-col-12'>
                            <img className='xui-w-fluid-100' src={Begorah} alt="" />
                        </div>
                        <div className='xui-lg-col-7 xui-col-12 xui-pl-1'>
                            <h3 className='xui-font-sz-150 xui-m-none xui-font-w-500'>E-Learning Transformation Platform</h3>
                            <p className='xui-font-sz-90 xui-mt-half xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100'>Unlock the potential of e-learning with Begorah Ltd. Our innovative e-learning design transforms traditional education, making learning more accessible and effective for everyone. Begorah combines cutting-edge technology with engaging content to revolutionize how people learn and grow.</p>
                            <h3 className='xui-font-sz-120 xui-mt-1-half xui-font-w-500'>Innovation Domains</h3>
                            <div className='xui-mt-half xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                                <p className='xui-font-sz-90 xui-line-height-1-half'>E-Learning Content Design</p> |
                                <p className='xui-font-sz-90 xui-line-height-1-half'>Skills Development Solutions</p> |
                                <p className='xui-font-sz-90 xui-line-height-1-half'>Accessible Education Platforms</p>
                            </div>
                            <Link to={'https://begorah.co.uk/'} target='_blank' className='gradient-btn xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-1 xui-mx-auto'>
                                <p className='xui-font-sz-100'>Learn More</p>
                                <RightArrow />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecializedSubsidiary;