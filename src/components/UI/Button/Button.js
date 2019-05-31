import React from 'react'

import classes from './Button.module.css'

const button = ({btnType, clicked, children}) => (
    <button 
        className={[classes['Button'], classNames[btnType]].join(' ')} 
        onClick={clicked}>
        {children}
    </button>
)

export default button