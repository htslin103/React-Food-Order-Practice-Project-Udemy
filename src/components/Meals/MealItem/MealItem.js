import {React} from "react";
import classes from './MealItem.module.css';
import MealItemForm from "./MealItemForms";

//This will display each individual meal item and will receive props 
const MealItem = (props) => 
{
    /*
    first dollar sign is to add a dollar sign to the final output, second one 
    is to inject dynamic data 
    toFixed makes sure price will always render to 2 decimal places
    */
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3> {props.name}</h3>
                <div className={classes.description}> {props.description} </div>
                <div className={classes.price}> {price} </div>
            <div>
            </div>
                <MealItemForm />
            </div> 
        </li>
    )
}
export default MealItem; 