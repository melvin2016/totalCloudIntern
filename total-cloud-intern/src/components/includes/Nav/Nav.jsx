import React, {useState} from 'react';
// Import reactstrap elements
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
// Custom Nav CSS
import './Nav.css';

export default function(){
    // Links
    const links = ['ABOUT', 'OUR FOOD', 'PLANS']

    // Toggle State
    const [toggle,setToggle] = useState(false)
    // Toggle function
    const togglefn = () => setToggle(!toggle)

    // Active link
    const [activeLink,setActiveLink] = useState(0)

    return (
        <Navbar  id="nav" expand="md" light>
            <div className="container">
                <NavbarBrand className="navbar-brand align-self-center" href="/">FOOD.<span className="primary-color">LOGO</span></NavbarBrand>
                <NavbarToggler light onClick={togglefn} />
                <Collapse isOpen={toggle} navbar>
                <Nav className="ml-auto" navbar>
                    {links.map((link,index)=>(
                        <NavItem key={link} className="nav-item justify-content-around align-self-center">
                            <NavLink className={activeLink === index ? "active" : ""} onClick={()=>setActiveLink(index)} href="#">{link}</NavLink>
                        </NavItem>
                    ))}
                    <NavItem>
                        <NavLink>
                            <button className="text-center primary-btn align-self-center">CONTACT US</button>
                        </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
}
