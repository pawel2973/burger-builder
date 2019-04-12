import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

/**
 * Responsible for render Burger
 */
const burger = (props) => {
    /** 1. Object.keys(): extract the keys from given Obj. Return array of the keys.
     *  2. In each iteration, we create a table with as many empty fields as the number of a given ingredient.
     *  3. For each of the created empty arrays, we return as many components as the length of the given array.
     *
     *  1. Object.keys(): wyciąga klucze z danego obiektu. Zwraca tablicę tych kluczy.
     *  2. W kazdej iteracji tworzymy tablice z taka iloscia pustych pol jak liczba danego skladnika.
     *  3. Dla kazdej ze stworzonych pustych tablic zwracamy tyle komponentów ile wynosi długość tablicy.
     */
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])] //ingredients['meat'] = 2 etc. [ , ]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey}/>
                });
        });

    console.log(Object.keys(props.ingredients));

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"}/>
            {transformedIngredients}
            <BurgerIngredient type={"bread-bottom"}/>
        </div>
    );
};

export default burger;