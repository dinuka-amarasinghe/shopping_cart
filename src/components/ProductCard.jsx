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
                <Card.Text>{product.price}</Card.Text>
                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button onClick={() => cart.addOneToCart(product.id)} sm="6" className="mx-2">+</Button>
                                <Button onClick={() => cart.removeOneFromCart(product.id)} sm="6"
                                        className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" className="my-2" onClick={() => cart.deleteFromCart(product.id)}>Remove
                            From
                            Cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
            </Card.Body>
        </Card>
    );
}

export default ProductCard;