
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        <Route
          path="/products"
          element={
            <Layout>
              <ProductListingPage />
            </Layout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <Layout>
              <ProductViewPage />
            </Layout>
          }
        />
        <Route
  path="/orders"
  element={
    <Layout>
      <main style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h1>Meus Pedidos</h1>
        <p>Funcionalidade demonstrativa, ainda não disponível.</p>
      </main>
    </Layout>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
