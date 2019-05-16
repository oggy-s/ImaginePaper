import React from 'react';
import './ListWrapper.css';

const ListWrapper = ({children}) => {
    return (
        <div className="list-wrapper">
            {children}
        </div>
    );
};

export default ListWrapper;