import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavbarComponent from "./components/Navbar.jsx";
import Store from "./pages/Store.jsx";
import Success from "./pages/Success.jsx";
import Cancel from "./pages/Cancel.jsx";

function App() {
    return (
        <Container>
            <NavbarComponent/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Store/>}/>
                    <Route path="success" element={<Success/>}/>
                    <Route path="cancel" element={<Cancel/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    )
}

export default App
