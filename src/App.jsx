import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import DevelopmentBanner from "./components/ui/DevelopmentBanner";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./components/ui/mega_menu.css"
import "./mobile.css"
import Layout from "./components/mobile_styles/Layout";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
        <DevelopmentBanner />
        <ScrollToTopButton />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
