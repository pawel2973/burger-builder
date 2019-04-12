import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

/**
 * Stateful class based component
 * Responsible for creating burger
 */
class BurgerBuilder extends Component {
    // Alternative way to initialize the state
    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        // object with key - value pairs
        ingredients: {
            salad: 1,
            bacon: 2,
            cheese: 2,
            meat: 1
        }
    };

    render() {
        console.log("salad: " + this.state.ingredients['salad']);
        return (
            <Aux>
                <Burger
                    ingredients={this.state.ingredients}
                />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;