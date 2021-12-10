import React from 'react';
import classnames from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={classnames.loader}>
                <div className={classnames.icon}></div>
        </div>
    );
};

export default Preloader;