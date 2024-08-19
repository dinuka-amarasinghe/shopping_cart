import {Button, Navbar, Modal} from 'react-bootstrap';
import {useState, useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";
import CartProduct from "./CartProduct.jsx";

function NavbarComponent() {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="#home">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Cart ({productsCount}) Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct) => (
                                <CartProduct id={currentProduct.id} quantity={currentProduct.quantity}
                                             key={currentProduct.id}/>
                            ))}
                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            <Button variant="success">
                                Purchase Items!
                            </Button>
                        </>
                        :
                        <h1>Your cart is empty</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
}

export default NavbarComponent;