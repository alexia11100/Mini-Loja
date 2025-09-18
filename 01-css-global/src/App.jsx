import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./component/navbar";
import ProductCard from "./component/productCard";
import "./style/App.css";

const produtos = [
  { id: 1, title: "Colar", price: "R$ 279,90", image: "/colar1.jpg", rating: 4.7 },
  { id: 2, title: "Aneis", price: "R$ 189,90", image: "/aneis1.jpg", rating: 4.3 },
  { id: 3, title: "Brincos", price: "R$ 129,90", image: "/brinco1.jpg", rating: 4.6 },
  { id: 4, title: "Colar", price: "R$ 499,90", image: "/colar2.jpg", rating: 4.4 },
  { id: 5, title: "Bracelete", price: "R$ 349,90", image: "/bracelete1.jpg", rating: 4.8 },
  { id: 6, title: "Colar", price: "R$ 899,90", image: "/brinco3.jpg", rating: 4.5 },
  { id: 7, title: "Brinco", price: "R$ 899,90", image: "/brinco4.jpg", rating: 4.5 },
];

export default function App() {
  function handleAdd(prod) {
    // substitua por lógica real do carrinho
    console.log("Adicionado ao carrinho:", prod);
    alert(`Adicionado: ${prod.title}`);
  }

  return (
    <ThemeProvider>
      <Navbar/>
      <main>
        <h1><span>Loja Online</span> — Produtos</h1>
        <p>Descubra nossa coleção exclusiva de joias e acessórios com qualidade premium e design moderno.</p>

        <section className="products-grid">
          {produtos.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              image={p.image}
              title={p.title}
              price={p.price}
              rating={p.rating}
              onAdd={handleAdd}
              onWishlist={(data) => console.log("Wishlist:", data)}
            />
          ))}
        </section>

        <section className="sc-dClGHI">
          <div className="section-container">
            <div className="info">
              <h1 style={{
                "font-size": "1.5rem",
                "font-weight": "bold",
                "color": "#3b82f6"
              }}>500+</h1>  
              <p>Produtos Disponíveis</p>
            </div>

            <div className="info">
              <h1 style={{
                "font-size": "1.5rem",
                "font-weight": "bold",
                "color": "#10b981"
              }}>10k</h1>
              <p>Clientes Satisfeitos</p>
            </div>

            <div className="info">
            <h1 style={{
              "font-size": "1.5rem",
              "font-weight": "bold",
              "color": "#f59e0b",
              "margin":"0"
            }}>4.8★</h1>
            <p>Avaliação Media</p>
          </div>
          </div>
          
        </section>

        <footer>
          <p> &copy; 2024 Loja Online. Todos os direitos reservados.</p>
          <p>Feito com ❤️ usando <span>Styled Components</span></p>
        </footer>
      </main>
    </ThemeProvider>
  );
}
