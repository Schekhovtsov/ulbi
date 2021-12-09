import React from 'react';
import classes from './MyModal.module.css';

const MyModal = ({children}) => {
    return (
        <div className={[classes.myModal, classes.active].join(' ')}>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;