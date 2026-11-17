import CategoriesPage from './pages/CategoriesPage';
import OrdersPage from './pages/OrdersPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import CheckoutPage from './pages/CheckoutPage';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import CartPage from './pages/CartPage';


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
        <OrdersPage />
      </Layout>
  }
/>
        <Route
          path="/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />
      <Route
  path="/checkout"
  element={
    <Layout>
      <CheckoutPage />
    </Layout>
  }
/>
<Route
  path="/order-confirmation"
  element={
    <Layout>
      <OrderConfirmationPage />
    </Layout>
  }
/>
<Route
  path="/login"
  element={
    <Layout>
      <LoginPage />
    </Layout>
  }
/>
<Route
  path="/register"
  element={
    <Layout>
      <RegisterPage />
    </Layout>
  }
/>
<Route
  path="/categories"
  element={
    <Layout>
      <CategoriesPage />
    </Layout>
  }
/>
</Routes>
    </BrowserRouter>
  );
}

export default App;

