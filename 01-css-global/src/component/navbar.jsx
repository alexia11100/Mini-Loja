
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Toggle from "../component/Toggle";
import "../style/component/01-css-global/navbar.css";

export default function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className="logo">
                    <span className="loja">Loja Online</span> - Produtos
                </div>
                <div className="navbar-right">
                    <button className="faShoppingCart">
                        <FaShoppingCart className="cart-icon" />
                    </button>
                    <Toggle />
                </div>
            </nav>
        </>
    )
}