import React, { Component } from 'react'

import Burger from 'components/Burger/Burger'
import BuildControls from 'components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
    salad: 0.5,
    meat: 1,
    bacon: 0.7,
    cheese: 0.65
}

class BurgerBuilder extends Component{


    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 3
    }

    addIngredientHandler(type){
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        let updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = oldTotalPrice + INGREDIENT_PRICE[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotalPrice
        })

    }

    removeIngredientHandler(type){
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0)
            return;
        const newCount = oldCount - 1;
        let updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = oldTotalPrice - INGREDIENT_PRICE[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotalPrice
        })
    }

    render(){
        const disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo)
            disabledInfo[key] = disabledInfo[key] <= 0;
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={(type)=>this.addIngredientHandler(type)}
                    ingredientRemoved={(type)=>this.removeIngredientHandler(type)}
                    disabled={disabledInfo}
                    price={this.state.totalPrice} />
            </>
        )
    }
}

export default BurgerBuilder;