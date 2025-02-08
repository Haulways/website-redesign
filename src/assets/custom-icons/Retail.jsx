import React from 'react';

const Retail = () => {
    return (
        <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_bd_361_618)">
        <rect x="21" y="17" width="50" height="50" rx="25" fill="url(#paint0_linear_361_618)" shape-rendering="crispEdges"/>
        </g>
        <g style={{MixBlendMode: 'overlay'}} opacity="0.2">
        <rect x="21" y="17" width="50" height="50" rx="25" fill="#159B48"/>
        </g>
        <path d="M45.5 31.0835C43.1188 35.1063 40.7281 37.7969 38.3609 40.2204C43.1094 38.3829 47.8906 38.3829 52.6391 40.2204C50.2719 37.7969 47.8813 35.1063 45.5 31.0835ZM45.5 39.6626C45.0125 39.6626 44.525 39.686 44.0328 39.7282C44.3375 44.6126 41.7641 49.8954 36.613 52.3282H54.3875C49.2359 49.8954 46.6625 44.6126 46.9672 39.7282C46.475 39.686 45.9875 39.6626 45.5 39.6626Z" fill="white"/>
        <defs>
        <filter id="filter0_bd_361_618" x="-19" y="-23" width="130" height="130" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="20"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_361_618"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect2_dropShadow_361_618"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="12"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
        <feBlend mode="normal" in2="effect1_backgroundBlur_361_618" result="effect2_dropShadow_361_618"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_361_618" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_361_618" x1="22.3672" y1="23.625" x2="60.1312" y2="38.7662" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FDFDFD" stop-opacity="0.3"/>
        <stop offset="1" stop-color="#FDFDFD" stop-opacity="0.2"/>
        </linearGradient>
        </defs>
        </svg>

    );
};

export default Retail;