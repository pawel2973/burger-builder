import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout.js';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
    render() {
        return (
            <Layout>
                <BurgerBuilder />
            </Layout>
        );
    }
}

export default App;