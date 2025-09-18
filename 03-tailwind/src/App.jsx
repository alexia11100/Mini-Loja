import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar";
import ProductCard from "./components/ProductCard";

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
  function handleAdd(prod) {
    // substitua por lógica real do carrinho
    console.log("Adicionado ao carrinho:", prod);
    alert(`Adicionado: ${prod.title}`);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-20 px-4 md:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold 
                         text-gray-900 dark:text-white mb-4 
                         animate-fade-in">
              <span className="text-gradient">Loja Online</span> — Produtos
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto
                        animate-slide-up">
              Descubra nossa coleção exclusiva de joias e acessórios 
              com qualidade premium e design moderno.
            </p>
          </header>

          {/* Products Grid */}
          <section 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                     xl:grid-cols-4 2xl:grid-cols-5 
                     gap-6 md:gap-8 animate-fade-in"
            aria-label="Lista de produtos"
          >
            {produtos.map((produto, index) => (
              <div 
                key={produto.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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
              </div>
            ))}
          </section>

          {/* Stats Section */}
          <section className="mt-16 py-12 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary-500">500+</h3>
                <p className="text-gray-600 dark:text-gray-400">Produtos Disponíveis</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-secondary-500">10k+</h3>
                <p className="text-gray-600 dark:text-gray-400">Clientes Satisfeitos</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-green-500">4.8★</h3>
                <p className="text-gray-600 dark:text-gray-400">Avaliação Média</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 Loja Online. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">
              Feito com ❤️ usando <span className="text-cyan-500 font-semibold">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
