import { Navbar } from "react-bootstrap"
import "./styles.css"

export default function Nav () {
    return(
        <Navbar bg="dark" className="justify-content-between" variant="dark" sticky="top">
                <Navbar.Brand> <img className="icon-img" src="https://cdn-icons-png.flaticon.com/512/188/188918.png" alt="" /> Pokemon List</Navbar.Brand>
                <Navbar.Brand>
                    S.S
                </Navbar.Brand>
        </Navbar>
    )
}