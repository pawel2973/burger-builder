import React from 'react';
import classes from './Layout.module.css';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

/**
 * Stateless function component
 * Responsible for main application layout
 */
const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;