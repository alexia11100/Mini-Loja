
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import Toggle from "../component/Toggle";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    const { isDarkMode } = useTheme();
    
    return(
        <>
            <nav className={`${styles.navbar} ${isDarkMode ? styles.navbarDark : ''}`}>
                <div className={`${styles.logo} ${isDarkMode ? styles.logoDark : ''}`}>
                    <span className={styles.loja}>Loja Online</span> - Produtos
                </div>
                <div className={styles.navbarRight}>
                    <button className={`${styles.faShoppingCart} ${isDarkMode ? styles.faShoppingCartDark : ''}`}>
                        <FaShoppingCart className={styles.cartIcon} />
                    </button>
                    <Toggle />
                </div>
            </nav>
        </>
    )
}