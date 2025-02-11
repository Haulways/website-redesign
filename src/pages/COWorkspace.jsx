import React from 'react';
import Header from '../components/co-workspace/Header';
import Workspace from "../assets/images/co-workspace/workspace.png";
import SpaceConcept from '../components/co-workspace/SpaceConcept';
import Galleries from '../components/co-workspace/Galleries';
import Book from '../components/co-workspace/Book';

const COWorkspace = () => {
    return (
        <>
            <Header />
            <div className=''>
                <img src={Workspace} alt="" className='xui-w-fluid-100 xui-bdr-rad-1' />
            </div>
            <SpaceConcept />
            <Galleries />
            <Book />
        </>
    );
};

export default COWorkspace;