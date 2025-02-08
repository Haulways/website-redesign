import React from 'react';
import Header from '../components/home/Header';
import WhoWeAre from '../components/home/WhoWeAre';
import TechLady from "../assets/images/home/tech-lady.jpg";
import Industries from '../components/home/Industries';
import EcosystemOverview from '../components/home/EcosystemOverview';
import BuildWithUs from '../components/home/BuildWithUs';

const Home = () => {
    return (
        <div>
            <Header />
            <WhoWeAre />
            <div className='xui-container xui-py-2'>
                <img src={TechLady} alt="" className='xui-w-fluid-100 xui-bdr-rad-1' />
            </div>
            <Industries />
            <EcosystemOverview />
            <BuildWithUs />
        </div>
    );
};

export default Home;