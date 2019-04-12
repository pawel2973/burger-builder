import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'meat', type: 'meat'}
];

/**
 *  List of components used to manage burger ingredients
 */
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map((ctrl) =>
                <BuildControl label={ctrl.label} key={ctrl.label}/>)}
        </div>
    );
};

export default buildControls;