import React from 'react'
import classnames from 'classnames/bind'

import classes from './Modal.module.css'

import Backdrop from 'components/UI/Backdrop/Backdrop'

const cx = classnames.bind(classes)

const modal = ({show, children, clicked}) => {
    return (
        <>
            <Backdrop show={show} clicked={clicked}/>
            <div className={cx({ 'Modal': true, 'Open': show }) }>
                {children}
            </div>
        </>
    );
}

export default modal;