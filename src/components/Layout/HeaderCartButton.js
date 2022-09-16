import React from "react";
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    return <button className={classes.button} onClick={props.onButtonClick}>
        {/* You can use svg in your React component as well  */}
        <span className={classes.icon}>
         <CartIcon/>
        </span>
        <span> Your Cart </span>
        <span className={classes.badge}>3</span>
    </button>
};

export default HeaderCartButton;