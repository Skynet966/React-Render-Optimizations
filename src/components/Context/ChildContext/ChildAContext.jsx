import React from 'react';
import { renderLogs } from '../../../utils/renderLogs';
import ChildBContext from './ChildBContext';

const ChildAContext = () => {
    renderLogs('ChildAContext');
    return (
        <>
            <div>ChildAContext</div>
            <ChildBContext />
        </>
    );
};

export default ChildAContext;