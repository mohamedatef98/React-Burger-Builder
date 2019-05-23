import React from 'react'

import classes from './Burger.module.css'

import BurgerIngredient from 'components/Burger/BurgerIngredient/BurgerIngredient'

const burger = props => {

    let transformedIngredients = Object.keys(props.ingredients).map(igKey=>{
        return [...Array.from({ length: props.ingredients[igKey] })].map((_, i)=>{
            return <BurgerIngredient type={igKey} key={igKey + i}/>
        })
    }).reduce((arr, el)=>arr.concat(el), [])

    if(transformedIngredients.length === 0)
        transformedIngredients = <p>Please Add ingredients</p>
    return (
        <div className={classes['Burger']}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    )

}

export default burger;