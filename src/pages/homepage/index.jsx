import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import CategorySidebar from './components/CategorySidebar';
import FrequentlySearched from './components/FrequentlySearched';
import PopularSuppliers from './components/PopularSuppliers';
import FastCustomization from './components/FastCustomization';
import TopRankingProducts from './components/TopRankingProducts';
import NewArrivals from './components/NewArrivals';
import ProductCatalog from './components/ProductCatalog';
import Header from '../../components/ui/TrasparentHeader';
import HeroSection from './components/HeroSection';
import "../../styles/homepage.css"
import CardFeatures from './components/CardFeatures';
import Stats from "./components/Stats.jsx";
import Discover from './components/Discover';
import FromFactory from './components/FromFactory.jsx';
import Footer from '../../components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sumic-online - Global B2B Marketplace</title>
        <meta name="description" content="sumicIT B2B marketplace connecting manufacturers, suppliers, and business buyers worldwide. Find quality products, negotiate better prices." />
      </Helmet>

<Header/>
<HeroSection/>
<CardFeatures/>
<Stats/>
<Discover/>
<FromFactory/>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* featured will go here and extra cards */}
            <div className="lg:col-span-9 space-y-8">
          
          </div>
      </main>

<Footer />
    </div>
  );
};

export default Homepage;