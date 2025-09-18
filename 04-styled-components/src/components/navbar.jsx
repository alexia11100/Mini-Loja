import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import Toggle from "./Toggle";
import { FlexBox } from "../styles/GlobalStyles";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.colors.surface};
  box-shadow: ${props => props.theme.shadows.lg};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  z-index: 50;
  transition: all ${props => props.theme.transitions.normal};
`;

const NavbarContent = styled(FlexBox)`
  justify-content: space-between;
  padding: ${props => props.theme.spacing.md};
  height: 100%;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.lg};
  }
`;

const LogoContainer = styled.div`
  flex-shrink: 1;
  min-width: 0;
`;

const LogoText = styled.h1`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color ${props => props.theme.transitions.normal};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const LogoBrand = styled.span`
  color: ${props => props.theme.colors.primary};
`;

const LogoSubtitle = styled.span`
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const RightControls = styled(FlexBox)`
  gap: ${props => props.theme.spacing.md};
  flex-shrink: 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    gap: ${props => props.theme.spacing.lg};
  }
`;

const CartButton = styled.button`
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.lg};
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  transition: all ${props => props.theme.transitions.fast};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.theme.colors.surfaceHover};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.md};
  }

  svg {
    width: 20px;
    height: 20px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 24px;
      height: 24px;
    }
  }
`;

export default function Navbar() {
    return (
        <NavbarContainer>
            <NavbarContent>
                {/* Logo */}
                <LogoContainer>
                    <LogoText>
                        <LogoBrand>Loja Online</LogoBrand>
                        <LogoSubtitle> - Produtos</LogoSubtitle>
                    </LogoText>
                </LogoContainer>

                {/* Right side controls */}
                <RightControls>
                    {/* Shopping Cart Button */}
                    <CartButton 
                        aria-label="Carrinho de compras"
                        title="Carrinho de compras"
                    >
                        <FaShoppingCart />
                    </CartButton>

                    {/* Theme Toggle */}
                    <Toggle />
                </RightControls>
            </NavbarContent>
        </NavbarContainer>
    );
}