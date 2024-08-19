import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";

function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>{product.price}</Card.Title>
                <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;