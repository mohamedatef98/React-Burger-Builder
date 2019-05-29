import React from 'react'
import classnames from 'classnames/bind'

import classes from './Modal.module.css'

const cx = classnames.bind(classes)

const modal = props => {
    return (
        <div className={cx({ 'Modal': true, 'Open': props.show }) }>
            {props.children}
        </div>
    );
}

export default modal;