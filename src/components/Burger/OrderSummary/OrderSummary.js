import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {

    //This could be a functional component
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[Order Summary] Will update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map((igKey) => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}: {this.props.ingredients[igKey]}</span>
                    </li>
                );
            });

        return (
            <Aux>
                <h3>You order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Price: {this.props.price.toFixed(2)} $</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;