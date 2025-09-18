import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaShoppingCart, FaStar, FaHeart } from "react-icons/fa";

export default function ProductCard({
  id,
  image,
  title,
  price,
  rating,
  onAdd,
  onWishlist,
  loading = false,
  disabled = false,
}) {
  const [added, setAdded] = useState(false);
  const { isDarkMode } = useTheme();

  const handleAdd = () => {
    if (disabled || loading) return;
    setAdded(true);
    onAdd({ id, title, price });
    setTimeout(() => setAdded(false), 1200);
  };

  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  if (loading) {
    return (
      <article
        className="bg-white dark:bg-gray-800 rounded-xl shadow-card 
                   overflow-hidden animate-pulse"
        aria-busy="true"
        aria-label="Carregando produto"
      >
        <div className="w-full h-60 bg-gray-300 dark:bg-gray-600" />
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4" />
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-20" />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-card 
                  hover:shadow-card-hover dark:shadow-card-dark 
                  overflow-hidden transition-all duration-300 
                  hover:-translate-y-2 hover:scale-105 group
                  ${disabled ? 'opacity-60 pointer-events-none' : ''}
                  ${added ? 'ring-2 ring-green-500 ring-opacity-50' : ''}`}
      aria-disabled={disabled}
      role="article"
      aria-label={title}
    >
      {/* Image Container */}
      <div className="relative w-full h-60 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 
                   group-hover:scale-110"
        />
        
        {/* Wishlist Button */}
        <button
          onClick={() => onWishlist({ id, title })}
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 dark:bg-gray-800/90 
                   backdrop-blur-sm rounded-lg shadow-md 
                   flex items-center justify-center 
                   hover:bg-white dark:hover:bg-gray-700 
                   hover:scale-110 active:scale-95
                   transition-all duration-200 
                   text-secondary-500 hover:text-secondary-600"
          aria-label={`Adicionar ${title} à lista de desejos`}
          title="Adicionar à lista de desejos"
        >
          <FaHeart className="w-4 h-4" />
        </button>

        {/* Sale Badge (if needed) */}
        {/* <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 
                       rounded-md text-xs font-semibold">
          -20%
        </div> */}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col space-y-3">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white 
                     line-clamp-2 min-h-[3.5rem] leading-tight">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2" 
             aria-label={`Avaliação ${rating} de 5`}>
          <div className="flex items-center space-x-1" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={`w-4 h-4 ${
                  i < fullStars
                    ? 'text-yellow-400'
                    : i === fullStars && hasHalf
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          {/* Price */}
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            {price}
          </div>

          {/* Add Button */}
          <button
            onClick={handleAdd}
            disabled={disabled || added}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg 
                       font-semibold text-sm transition-all duration-200 
                       hover:scale-105 active:scale-95 shadow-md
                       ${added 
                         ? 'bg-green-500 hover:bg-green-600 text-white' 
                         : 'bg-primary-500 hover:bg-primary-600 text-white'
                       }
                       ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label={`Adicionar ${title} ao carrinho`}
            title="Adicionar ao carrinho"
          >
            <FaShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">
              {added ? 'Adicionado' : 'Adicionar'}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}