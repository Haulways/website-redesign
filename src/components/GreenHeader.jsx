import React from 'react';

const GreenHeader = (props) => {
    const { text, fontSize } = props;
    return (
        <p className={`${fontSize} color-linear xui-text-uppercase`}>{text}</p>
    );
};

export default GreenHeader;