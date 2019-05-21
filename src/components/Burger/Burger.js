import React from 'react'

import classes from './BurgerIngredient.module.css'

import BurgerIngredient from '/components/Burger/BurgerIngredient/BurgerIngredient'

const burger = props => {
    return (
        <div className={classes['Burger']}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />

        </div>
    )

}

export default burger;