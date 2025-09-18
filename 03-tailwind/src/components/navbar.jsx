import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import Toggle from "./Toggle";

export default function Navbar() {
    const { isDarkMode } = useTheme();
    
    return (
        <nav className="fixed top-0 left-0 w-full h-15 bg-white dark:bg-gray-800 
                       shadow-lg border-b border-gray-200 dark:border-gray-700 
                       z-50 transition-all duration-300">
            <div className="flex justify-between items-center px-4 md:px-6 py-3 h-full">
                {/* Logo */}
                <div className="flex-shrink-1 min-w-0">
                    <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white 
                                 truncate transition-colors duration-300">
                        <span className="text-secondary-500">Loja Online</span> 
                        <span className="hidden sm:inline"> - Produtos</span>
                    </h1>
                </div>

                {/* Right side controls */}
                <div className="flex items-center space-x-3 md:space-x-4 flex-shrink-0">
                    {/* Shopping Cart Button */}
                    <button 
                        className="p-2 md:p-3 rounded-lg bg-transparent hover:bg-gray-100 
                                 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 
                                 transition-all duration-200 hover:scale-105 active:scale-95"
                        aria-label="Carrinho de compras"
                        title="Carrinho de compras"
                    >
                        <FaShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Theme Toggle */}
                    <Toggle />
                </div>
            </div>
        </nav>
    );
}