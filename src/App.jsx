import React from "react";
import ProductCard from "./component/productCard";
import "./style/App.css";

const produtos = [
  { id: 1, title: "Colar", price: "R$ 279,90", image: "../public/colar1.jpg", rating: 4.7 },
  { id: 2, title: "Aneis", price: "R$ 189,90", image: "../public/aneis1.jpg", rating: 4.3 },
  { id: 3, title: "Brincos", price: "R$ 129,90", image: "../public/brinco1.jpg", rating: 4.6 },
  { id: 4, title: "Colar", price: "R$ 499,90", image: "../public/colar2.jpg", rating: 4.4 },
  { id: 5, title: "Bracelete", price: "R$ 349,90", image: "../public/bracelete1.jpg", rating: 4.8 },
  { id: 6, title: "Colar", price: "R$ 899,90", image: "../public/brinco3.jpg", rating: 4.5 },
  { id: 7, title: "Brinco", price: "R$ 899,90", image: "../public/brinco4.jpg", rating: 4.5 },
];

export default function App() {
  function handleAdd(prod) {
    // substitua por lógica real do carrinho
    console.log("Adicionado ao carrinho:", prod);
    alert(`Adicionado: ${prod.title}`);
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Loja Online — Produtos</h1>

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
    </main>
  );
}
