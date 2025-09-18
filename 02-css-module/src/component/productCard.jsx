import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/ProductCard.module.css";
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
        className={`${styles.productCard} ${isDarkMode ? styles.productCardDark : ''}`}
        aria-busy="true"
        aria-label="Carregando produto"
      >
        <div className={styles.productMedia} />
        <div className={styles.productBody}>
          <div />
          <div />
          <div className={styles.productFooter}>
            <div />
            <div />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`${styles.productCard} ${isDarkMode ? styles.productCardDark : ''} ${disabled ? styles.disabled : ""}`}
      aria-disabled={disabled}
      role="article"
      aria-label={title}
    >
      <div className={styles.productMedia}>
        <img src={image} alt={title} loading="lazy" />
        <button
          className={`${styles.wishBtn} ${isDarkMode ? styles.wishBtnDark : ''}`}
          onClick={() => onWishlist({ id, title })}
          aria-label={`Adicionar ${title} à lista de desejos`}
          title="Adicionar à lista de desejos"
        >
          <FaHeart />
        </button>
      </div>

      <div className={styles.productBody}>
        <h3 className={`${styles.productTitle} ${isDarkMode ? styles.productTitleDark : ''}`}>{title}</h3>

        <div className={`${styles.productRating} ${isDarkMode ? styles.productRatingDark : ''}`} aria-label={`Avaliação ${rating} de 5`}>
          <div className={styles.stars} aria-hidden>
            {Array.from({ length: fullStars }).map((_, i) => (
              <FaStar key={i} className={styles.star} />
            ))}
            {hasHalf && <FaStar className={styles.star} />}
          </div>
          <span className={`${styles.ratingValue} ${isDarkMode ? styles.ratingValueDark : ''}`}>{rating.toFixed(1)}</span>
        </div>

        <div className={styles.productFooter}>
          <div className={`${styles.productPrice} ${isDarkMode ? styles.productPriceDark : ''}`}>{price}</div>

          <button
            className={`${styles.btnAdd} ${isDarkMode ? styles.btnAddDark : ''} ${added ? styles.added : ""}`}
            onClick={handleAdd}
            disabled={disabled}
            aria-label={`Adicionar ${title} ao carrinho`}
            title="Adicionar ao carrinho"
          >
            <FaShoppingCart className={styles.icon} />
            <span className={styles.btnText}>
              {added ? "Adicionado" : "Adicionar"}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
