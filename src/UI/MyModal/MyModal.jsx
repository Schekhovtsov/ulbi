import React from 'react';
import classes from './MyModal.module.css';

const MyModal = ({title, children, visible, setVisible}) => {

    const rootClasses = [classes.myModal]

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')}
             onClick={() => { setVisible(false) }}>
            <div className={classes.content}
                 onClick={e => e.stopPropagation()}>
                <div className={classes.title}>{title}</div>
                {children}
                </div>
        </div>
    );
};

export default MyModal;