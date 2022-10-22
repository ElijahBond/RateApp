import React from "react";
import './navbar.scss'
import { NavLink } from "react-router-dom";

export const Navbar = () =>{
    return(

        <nav>
            <ul>
                <li><NavLink to = "/">Start page</NavLink></li>
                <li><NavLink to = "/calc">Calulator</NavLink></li>
                <li><NavLink to = "/sample">Sample</NavLink></li>
                <li><NavLink to = "/info">Info</NavLink></li>
            </ul>

        </nav>
    )


}