import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

//separate files for Backdrop and ModalOverlay would also be good but these are fairly lean

const Backdrop = props => {
    return <div className={classes.backdrop} onClick = {props.onBackdropClick}/> 
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

//helper constant 
const portalElement = document.getElementById('overlays');

const Modal = props => {
    
    return (
        <Fragment>
           {ReactDOM.createPortal(<Backdrop onBackdropClick={props.onCloseModule}/>, portalElement )}
           {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    ) 
};
export default Modal; 