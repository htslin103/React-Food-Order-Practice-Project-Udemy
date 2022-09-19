import React, { useContext } from "react";
import CartProvider from "../../store/CartProvider";
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const ctx = useContext(CartProvider);
    return <button className={classes.button} onClick={props.onButtonClick}>
        {/* You can use svg in your React component as well  */}
        <span className={classes.icon}>
         <CartIcon/>
        </span>
        <span> Your Cart </span>
        <span className={classes.badge}>{ctx.items.length}</span>
    </button>
};

export default HeaderCartButton;