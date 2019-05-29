import React from 'react'

const orderSummary = props => {
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {Object.keys(props.ingredients).map(ingKey => {
                    return <li key={ingKey}>
                        <span style={{textTransform: "capitalize"}}>{ingKey}</span>: {props.ingredients[ingKey]}
                    </li>
                })
            }
            </ul>
        </>
    )
}

export default orderSummary;