import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
    // current dummy array will we later map this to cart item? Will we make another item for this? Or will we use MealItem 
    const cartItems = <ul className={['cart-items']}> {[
        { id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => <li>{item.name}</li>)}</ul>;

    return (
        <Modal onCloseModule = {props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span> Total Amount </span>
                <span> 35.62 </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick = {props.onCloseCart}> Close </button>
                <button className={classes.button}> Order </button>
            </div>
        </Modal>
    )
}

export default Cart; 