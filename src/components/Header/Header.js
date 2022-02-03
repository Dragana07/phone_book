import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  justify-content-end">
            <Link to="/" className="navbar-brand">Accounts App</Link>            
            
                <ul className="navbar-nav ml-auto">
                <NavLink to="/home"  className="nav-link" exact>Home</NavLink>
                <NavLink to="/about"  className="nav-link" exact>About</NavLink>
                <NavLink to="/"  className="nav-link" exact>Account</NavLink>
                <NavLink to="/add" className="nav-link" exact>Add Account</NavLink>
                <NavLink to="/edit" className="nav-link" exact>Edit / Delite</NavLink>
                </ul>
            </nav>   
        
        
        
       
    )
}
export default Header;