import React from 'react';
import Header from '../components/company/Header';
import EcosystemOverview from '../components/company/EcosystemOverview';
import City from "../assets/images/company/city.jpg"
import SpecializedSubsidiary from '../components/company/SpecializedSubsidiary';

const Company = () => {
    return (
        <>
            <Header />
            <EcosystemOverview />
            <div className='xui-container xui-py-2'>
                <img src={City} alt="" className='xui-w-fluid-100 xui-bdr-rad-1' />
            </div>
            <SpecializedSubsidiary />
        </>
    );
};

export default Company;