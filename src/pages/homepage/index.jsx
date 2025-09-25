import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/TrasparentHeader';
import HeroSection from './components/HeroSection';
import "../../styles/homepage.css"
import CardFeatures from './components/CardFeatures';
import Stats from "./components/Stats.jsx";
import Discover from './components/Discover';
import FromFactory from './components/FromFactory.jsx';
import Footer from '../../components/Footer';
import MarketplaceSection from '../../components/ui/MarketplaceSection';
import ProductGrid from '../../components/ui/ProductGrid';
import TradeConfidence from './TradeConfidence';
import EmpoweringBusinesses from './components/EmpoweringBusinesses';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sumic-online - Global B2B Marketplace</title>
        <meta name="description" content="sumicIT B2B marketplace connecting manufacturers, suppliers, and business buyers worldwide. Find quality products, negotiate better prices." />
      </Helmet>

      <Header />
      <HeroSection />

      <CardFeatures />
      <Stats />
      <Discover />
      {/* main content */}
      <MarketplaceSection />

      {/* Products Section */}
      <ProductGrid />
      {/* products go here */}
      <FromFactory />
      <TradeConfidence />
      <EmpoweringBusinesses />
      <Footer />
    </div>
  );
};

export default Homepage;