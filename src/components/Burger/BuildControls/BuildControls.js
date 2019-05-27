import React from 'react'

import BuildControl from 'components/Burger/BuildControls/BuildControl/BuildControl'

import classes from './BuildControls.module.css'

const buildControls = props => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Meat', type: 'meat' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' }
    ]
    return <div className={classes['BuildControls']}>
        {
            controls.map(ctrl => <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                add={()=>props.ingredientAdded(ctrl.type)} 
                remove={()=>props.ingredientRemoved(ctrl.type)}/>)
        }
    </div>
}

export default buildControls;