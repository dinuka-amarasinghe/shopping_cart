import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import {useState, useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";

function NavbarComponent() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cart = useContext(CartContext);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="#home">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Cart 0 Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>This is the modal body</h1>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default NavbarComponent;