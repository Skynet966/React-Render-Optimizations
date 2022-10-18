import React from 'react';
import { renderLogs } from '../../../utils/renderLogs';
import ChildCContext from './ChildCContext';

const ChildBContext = () => {
    renderLogs('ChildBContext');
    return (
        <>
            <div>ChildBContext</div>
            <ChildCContext />
        </>
    );
};

export default ChildBContext;