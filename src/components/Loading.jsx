import React from 'react';
import { CgSpinner } from 'react-icons/cg';
const Loading = () => {
    return (
        <>
            <div className="loading">
                <h1>Loading Links...</h1>
            </div>
            <div className="loading">
                <CgSpinner className="loading-spinner" />
            </div>
        </>
    );
};

export default Loading;
