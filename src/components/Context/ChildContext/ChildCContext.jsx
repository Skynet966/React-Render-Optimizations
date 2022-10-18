import React, { useContext } from 'react';
import { renderLogs } from '../../../utils/renderLogs';
import { CountContext } from '../ParentContext/ParentContext';

const ChildCContext = () => {
    const count = useContext(CountContext);
    renderLogs('ChildCContext');
    return (
        <div>Child-C Context with Count Value : {count}</div>
    );
};

export default ChildCContext;