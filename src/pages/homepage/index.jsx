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
import Header from '../../components/Header';
import HeroSection from './components/HeroSection';
import "../../styles/homepage.css"
import CardFeatures from './components/CardFeatures';
import Stats from "./components/Stats.jsx";
import Discover from './components/Discover';

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
{/* 
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <CategorySidebar />
          </div>

          <div className="lg:col-span-9 space-y-8">
            <FrequentlySearched />
            <PopularSuppliers />
            <FastCustomization />
            <TopRankingProducts />
            <NewArrivals />
            <ProductCatalog />
          </div>
        </div>
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Leaf" size={20} color="white" />
                </div>
                <span className="text-xl font-semibold text-foreground">
                  SumicIT
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Your trusted B2B marketplace connecting manufacturers, suppliers, and business buyers worldwide. Find quality products, negotiate better prices, and build lasting business relationships.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} color="#6B7280" />
                  <span className="text-sm text-muted-foreground">Secure Payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} color="#6B7280" />
                  <span className="text-sm text-muted-foreground">Verified Suppliers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} color="#6B7280" />
                  <span className="text-sm text-muted-foreground">Trade Assurance</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/product-catalog" className="hover:text-foreground transition-smooth">Products</Link></li>
                <li><Link to="/supplier-profile" className="hover:text-foreground transition-smooth">Suppliers</Link></li>
                <li><Link to="/dashboard" className="hover:text-foreground transition-smooth">Dashboard</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-smooth">Help Center</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground transition-smooth">Contact Us</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-smooth">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-smooth">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-smooth">Trade Services</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} sumicIT B2B. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <div className="flex items-center space-x-2">
                <Icon name="CreditCard" size={16} color="#6B7280" />
                <Icon name="Shield" size={16} color="#6B7280" />
                <Icon name="Truck" size={16} color="#6B7280" />
                <span className="text-sm text-muted-foreground">Secure & Fast</span>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Homepage;