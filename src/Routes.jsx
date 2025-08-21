import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
// import ScrollToTop from "components/ScrollToTop";
// import ErrorBoundary from "components/ErrorBoundary";
// import NotFound from "pages/NotFound";
import ProductDetail from './pages/product-detail';
import ProductCatalog from './pages/product-catalog';
import SupplierProfile from './pages/supplier-profile';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <ErrorBoundary> */}
      {/* <ScrollToTop /> */}
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/product-catalog" element={<ProductCatalog />} />
        <Route path="/supplier-profile" element={<SupplierProfile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </RouterRoutes>
      {/* </ErrorBoundary> */}
    </BrowserRouter>
  );
};

export default Routes;