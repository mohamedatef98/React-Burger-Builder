import React, { Component } from 'react'

import Burger from 'components/Burger/Burger'
import BuildControls from 'components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
    salad: 1,
    meat: 2,
    becon: 2,
    cheese: 1
}

class BurgerBuilder extends Component{


    state = {
        ingredients: {
            salad: 0,
            becon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 3
    }

    render(){
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </>
        )
    }
}

export default BurgerBuilder;