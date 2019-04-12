import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

/**
 * Stateful class based component
 * Responsible for creating burger
 */
class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;