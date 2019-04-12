import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';


/**
 *  List of components used to manage burger ingredients
 */
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <BuildControl />
        </div>
    );
};

export default buildControls;