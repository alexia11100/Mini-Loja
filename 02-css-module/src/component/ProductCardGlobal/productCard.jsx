import React, { useState } from "react";
import { FaShoppingCart, FaStar, FaHeart } from "react-icons/fa";
import "../../style/component/01-css-global/productCard.css"

export default function ProductCard({
  id,
  image,
  title,
  price,
  rating = 0,
  tag = "",
  onAdd = () => {},
  onWishlist = () => {},
  loading = false,
  disabled = false,
}) {
  const [added, setAdded] = useState(false);

  const fullStars = Math.floor(rating || 0);
  const hasHalf = (rating || 0) - fullStars >= 0.5;

  // Skeleton view while loading
  if (loading) {
    return (
      <article
        className="product-card skeleton"
        aria-busy="true"
        aria-label="Carregando produto"
        role="article"
      >
        <div className="product-media skeleton-rect" />
        <div className="product-body">
          <div className="skeleton-line short" />
          <div className="skeleton-line" />
          <div className="product-footer">
            <div className="skeleton-line tiny" />
            <div className="skeleton-line button" />
          </div>
        </div>
      </article>
    );
  }

  function handleAdd() {
    if (disabled) return;
    setAdded(true);
    onAdd({ id, title, price });
    // feedback visual curto
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <article
      className={`product-card ${disabled ? "disabled" : ""}`}
      aria-disabled={disabled}
      role="article"
      aria-label={title}
    >
      <div className="product-media">
        <img src={image} alt={title} loading="lazy" />

        {/* tag opcional (novo, oferta, promo...) */}
        {tag && <span className="product-tag">{tag}</span>}

        {/* wishlist button */}
        <button
          className="wish-btn"
          onClick={() => onWishlist({ id, title })}
          aria-label={`Adicionar ${title} à lista de desejos`}
          title="Adicionar à lista de desejos"
        >
          <FaHeart aria-hidden="true" />
        </button>
      </div>

      <div className="product-body">
        <h3 className="product-title">{title}</h3>

        <div className="product-rating" aria-label={`Avaliação ${rating} de 5`}>
          <div className="stars" aria-hidden="true">
            {Array.from({ length: fullStars }).map((_, i) => (
              <FaStar key={i} className="star" />
            ))}
            {hasHalf && <FaStar className="star half" />}
          </div>
          <span className="rating-value">{(rating || 0).toFixed(1)}</span>
        </div>

        <div className="product-footer">
          <div className="product-price">{price}</div>

          <button
            className={`btn-add ${added ? "added" : ""}`}
            onClick={handleAdd}
            disabled={disabled}
            aria-label={`Adicionar ${title} ao carrinho`}
            title="Adicionar ao carrinho"
          >
            <FaShoppingCart className="icon" aria-hidden="true" />
            <span className="btn-text">{added ? "Adicionado" : "Adicionar"}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
