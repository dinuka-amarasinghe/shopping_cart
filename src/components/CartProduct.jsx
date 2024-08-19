import {Button} from 'react-bootstrap';
import {CartContext} from "../context/CartContext.jsx";
import {useContext} from 'react';
import {getProductData} from "../productsStore.js";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>Total Quantity: {quantity}</p>
            <p>Price: ${(quantity * productData.price).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr/>
        </>
    );
}

export default CartProduct;