import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';

/**
 * Stateful class based component
 * Responsible for creating burger
 */
class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>Graphical representation of the burger</div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;