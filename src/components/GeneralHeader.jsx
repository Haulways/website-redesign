import React from 'react';
import HeaderImage from "../assets/images/header-image.svg";

const GeneralHeader = (props) => {
    const { children } = props;
    return (
        <section className='xui-bg-sz-cover xui-container xui-pt-5 xui-pb-8' style={{backgroundImage: `url('${HeaderImage}')`}}>
            {children}
        </section>
    );
};

export default GeneralHeader;