import React, {useState} from 'react'
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
} from 'reactstrap'
import './App.css'
import { Link } from 'react-router-dom'



const Header = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }

    return (
    <div className="App">
        <Navbar color='light' light expand='md'>
            <div className="container">
            <NavbarBrand tag={Link} to='/' > Minhas series</NavbarBrand>
            <NavbarToggler onClick={toggle} />
                <Collapse isOpen={open} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink tag={Link} to='/series'>Séries</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/generos'>Generos</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
        </div>)
}

export default Header