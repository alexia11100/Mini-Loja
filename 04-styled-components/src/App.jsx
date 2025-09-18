import React from "react";
import styled, { ThemeProvider as StyledThemeProvider, keyframes } from "styled-components";
import { ThemeProvider } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles, Container, Grid } from "./styles/GlobalStyles";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/navbar";
import ProductCard from "./components/ProductCard";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  transition: background-color ${props => props.theme.transitions.normal};
`;

const MainContent = styled.main`
  padding-top: 80px;
  padding-bottom: ${props => props.theme.spacing.xl};
`;

const PageHeader = styled.header`
  text-align: center;
  padding: ${props => props.theme.spacing.xl} 0;
  animation: ${fadeIn} 0.8s ease-out;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing['3xl']} 0;
  }
`;

const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: 3rem;
  }
`;

const TitleGradient = styled.span`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.textSecondary};
  max-width: 32rem;
  margin: 0 auto;
  line-height: 1.6;
`;

const ProductsSection = styled.section`
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
`;

const ProductGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.lg};

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    gap: ${props => props.theme.spacing.xl};
  }
`;

const ProductItem = styled.div`
  animation: ${slideUp} 0.6s ease-out;
  animation-delay: ${props => props.$delay}s;
  animation-fill-mode: both;
`;

const StatsSection = styled.section`
  margin-top: ${props => props.theme.spacing['3xl']};
  padding: ${props => props.theme.spacing['3xl']} 0;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.xl};
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const StatNumber = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.color || props.theme.colors.primary};
`;

const StatLabel = styled.p`
  color: ${props => props.theme.colors.textSecondary};
`;

const Footer = styled.footer`
  background-color: ${props => props.theme.colors.surface};
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const FooterContent = styled.div`
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  color: ${props => props.theme.colors.textSecondary};
`;

const FooterText = styled.p`
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const FooterTech = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
`;

const produtos = [
  { id: 1, title: "Colar", price: "R$ 279,90", image: "../public/colar1.jpg", rating: 4.7 },
  { id: 2, title: "Aneis", price: "R$ 189,90", image: "../public/aneis1.jpg", rating: 4.3 },
  { id: 3, title: "Brincos", price: "R$ 129,90", image: "../public/brinco1.jpg", rating: 4.6 },
  { id: 4, title: "Colar", price: "R$ 499,90", image: "../public/colar2.jpg", rating: 4.4 },
  { id: 5, title: "Bracelete", price: "R$ 349,90", image: "../public/bracelete1.jpg", rating: 4.8 },
  { id: 6, title: "Colar", price: "R$ 899,90", image: "../public/brinco3.jpg", rating: 4.5 },
  { id: 7, title: "Brinco", price: "R$ 899,90", image: "../public/brinco4.jpg", rating: 4.5 },
];

function AppContent() {
  const { isDarkMode } = useTheme();

  function handleAdd(prod) {
    // substitua por lógica real do carrinho
    console.log("Adicionado ao carrinho:", prod);
    alert(`Adicionado: ${prod.title}`);
  }

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        
        {/* Main Content */}
        <MainContent>
          <Container>
            {/* Header */}
            <PageHeader>
              <MainTitle>
                <TitleGradient>Loja Online</TitleGradient> — Produtos
              </MainTitle>
              <Subtitle>
                Descubra nossa coleção exclusiva de joias e acessórios 
                com qualidade premium e design moderno.
              </Subtitle>
            </PageHeader>

            {/* Products Grid */}
            <ProductsSection aria-label="Lista de produtos">
              <ProductGrid>
                {produtos.map((produto, index) => (
                  <ProductItem 
                    key={produto.id}
                    $delay={index * 0.1}
                  >
                    <ProductCard
                      id={produto.id}
                      image={produto.image}
                      title={produto.title}
                      price={produto.price}
                      rating={produto.rating}
                      onAdd={handleAdd}
                      onWishlist={(data) => console.log("Wishlist:", data)}
                    />
                  </ProductItem>
                ))}
              </ProductGrid>
            </ProductsSection>

            {/* Stats Section */}
            <StatsSection>
              <StatsGrid>
                <StatItem>
                  <StatNumber>500+</StatNumber>
                  <StatLabel>Produtos Disponíveis</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber color="#10b981">10k+</StatNumber>
                  <StatLabel>Clientes Satisfeitos</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber color="#f59e0b">4.8★</StatNumber>
                  <StatLabel>Avaliação Média</StatLabel>
                </StatItem>
              </StatsGrid>
            </StatsSection>
          </Container>
        </MainContent>

        {/* Footer */}
        <Footer>
          <Container>
            <FooterContent>
              <FooterText>&copy; 2024 Loja Online. Todos os direitos reservados.</FooterText>
              <FooterText>
                Feito com ❤️ usando <FooterTech>Styled Components</FooterTech>
              </FooterText>
            </FooterContent>
          </Container>
        </Footer>
      </AppContainer>
    </StyledThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
