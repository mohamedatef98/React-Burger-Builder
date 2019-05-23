import React from 'react'

import BuildControl from 'components/Burger/BuildControls/BuildControl/BuildControl'

import classes from './BuildControls.module.css'

const buildControls = props => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Meat', type: 'meat' },
        { label: 'Becon', type: 'becon' },
        { label: 'Cheese', type: 'cheese' }
    ]
    return <div className={classes['BuildControls']}>
        {
            controls.map(ctrl => <BuildControl key={ctrl.label} label={ctrl.label} />)
        }
    </div>
}

export default buildControls;