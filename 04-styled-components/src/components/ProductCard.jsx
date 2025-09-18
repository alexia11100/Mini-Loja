import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaShoppingCart, FaStar, FaHeart } from "react-icons/fa";
import { Card } from "../styles/GlobalStyles";

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const ProductCardContainer = styled(Card)`
  padding: 0;
  overflow: hidden;
  transition: all ${props => props.theme.transitions.normal};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  pointer-events: ${props => props.$disabled ? 'none' : 'auto'};
  border: ${props => props.$added ? `2px solid ${props.theme.colors.accent}` : `1px solid ${props.theme.colors.border}`};

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const LoadingCard = styled(Card)`
  padding: 0;
  overflow: hidden;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const LoadingImage = styled.div`
  width: 100%;
  height: 240px;
  background-color: ${props => props.theme.colors.border};
`;

const LoadingContent = styled.div`
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const LoadingBar = styled.div`
  height: ${props => props.height || '16px'};
  background-color: ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.sm};
  width: ${props => props.width || '100%'};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.surface};
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${props => props.theme.transitions.normal};

  ${ProductCardContainer}:hover & {
    transform: scale(1.1);
  }
`;

const WishlistButton = styled.button`
  position: absolute;
  top: ${props => props.theme.spacing.md};
  right: ${props => props.theme.spacing.md};
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  transition: all ${props => props.theme.transitions.fast};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
    color: ${props => props.theme.colors.primaryHover};
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Content = styled.div`
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  line-height: 1.4;
  min-height: 3.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const Star = styled(FaStar)`
  width: 16px;
  height: 16px;
  color: ${props => props.$filled ? '#fbbf24' : props.theme.colors.border};
`;

const RatingText = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 500;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${props => props.theme.spacing.sm};
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-weight: 600;
  font-size: 0.875rem;
  transition: all ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.theme.shadows.md};
  border: none;
  cursor: pointer;
  background-color: ${props => props.$added ? props.theme.colors.accent : props.theme.colors.primary};
  color: white;

  &:hover {
    background-color: ${props => props.$added ? props.theme.colors.accentHover : props.theme.colors.primaryHover};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  span {
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      display: none;
    }
  }
`;

const LoadingFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
      <LoadingCard aria-busy="true" aria-label="Carregando produto">
        <LoadingImage />
        <LoadingContent>
          <LoadingBar height="16px" width="75%" />
          <LoadingBar height="12px" width="50%" />
          <LoadingFooter>
            <LoadingBar height="16px" width="25%" />
            <LoadingBar height="32px" width="80px" />
          </LoadingFooter>
        </LoadingContent>
      </LoadingCard>
    );
  }

  return (
    <ProductCardContainer
      $disabled={disabled}
      $added={added}
      role="article"
      aria-label={title}
      aria-disabled={disabled}
    >
      {/* Image Container */}
      <ImageContainer>
        <ProductImage 
          src={image} 
          alt={title} 
          loading="lazy"
        />
        
        {/* Wishlist Button */}
        <WishlistButton
          onClick={() => onWishlist({ id, title })}
          aria-label={`Adicionar ${title} à lista de desejos`}
          title="Adicionar à lista de desejos"
        >
          <FaHeart />
        </WishlistButton>
      </ImageContainer>

      {/* Content */}
      <Content>
        {/* Title */}
        <Title>{title}</Title>

        {/* Rating */}
        <RatingContainer aria-label={`Avaliação ${rating} de 5`}>
          <StarsContainer aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                $filled={i < fullStars || (i === fullStars && hasHalf)}
              />
            ))}
          </StarsContainer>
          <RatingText>{rating.toFixed(1)}</RatingText>
        </RatingContainer>

        {/* Footer */}
        <Footer>
          {/* Price */}
          <Price>{price}</Price>

          {/* Add Button */}
          <AddButton
            onClick={handleAdd}
            disabled={disabled || added}
            $added={added}
            aria-label={`Adicionar ${title} ao carrinho`}
            title="Adicionar ao carrinho"
          >
            <FaShoppingCart />
            <span>{added ? 'Adicionado' : 'Adicionar'}</span>
          </AddButton>
        </Footer>
      </Content>
    </ProductCardContainer>
  );
}