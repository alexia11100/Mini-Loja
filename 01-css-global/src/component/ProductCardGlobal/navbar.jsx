import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import "../../style/component/01-css-global/navbar.css";

export default function Navbar({ cartCount = 0 }) {
  const [darkMode, setDarkMode] = useState(false);

  // Persistência do tema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">Minha <span className="loja">Loja</span></span>
      </div>

      <div className="navbar-right">
        <button
            className="faShoppingCart"
            aria-label="Alternar tema claro/escuro"
        >
            {darkMode ? <FaShoppingCart fill="#ffff" size={19}/> : <FaShoppingCart fill="#000000ff" size={19}/>}
            
        </button>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Alternar tema claro/escuro"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <div className="cart-badge" aria-label={`Carrinho com ${cartCount} itens`}>
          <FaShoppingCart className="cart-icon" />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
}
