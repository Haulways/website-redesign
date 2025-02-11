import React from 'react';
import Header from '../components/about/Header';
import Story from '../components/about/Story';
import Meeting from "../assets/images/about/meeting.png";
import Capabilities from '../components/about/Capabilities';

const About = () => {
    return (
        <>
            <Header />
            <Story />
            <div className='xui-container xui-py-2'>
                <img src={Meeting} alt="" className='xui-w-fluid-100' />
            </div>
            <Capabilities />
        </>
    );
};

export default About;