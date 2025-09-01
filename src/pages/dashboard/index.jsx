import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import WelcomeSection from './components/WelcomeSection';
import RecommendedCategories from './components/RecommendedCategories';
import TrendingProducts from './components/TrendingProducts';
import PreferredSuppliers from './components/PreferredSuppliers';
import FrequentlySearched from './components/FrequentlySearched';
import PopularSuppliers from './components/PopularSuppliers';
import FastCustomization from './components/FastCustomization';
import TopRankingProducts from './components/TopRankingProducts';
import NewArrivals from './components/NewArrivals';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock user data - in real app, this would come from authentication context
  useEffect(() => {
    const mockUser = {
      name: "John Smith",
      email: "john.smith@company.com",
      company: "Smith Manufacturing Co.",
      role: "Procurement Manager",
      avatar: "/assets/images/avatar-placeholder.jpg"
    };
    
    // Simulate loading delay
    setTimeout(() => {
      setUser(mockUser);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading your dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dashboard - sumic-online</title>
        <meta name="description" content="Your personalized B2B marketplace dashboard with product recommendations, supplier insights, and procurement tools." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <WelcomeSection user={user} />
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Left Column - Recommended Categories */}
            <div className="lg:col-span-3">
              <RecommendedCategories />
            </div>
            
            {/* Center Column - Trending Products */}
            <div className="lg:col-span-6">
              <TrendingProducts />
            </div>
            
            {/* Right Column - Preferred Suppliers */}
            <div className="lg:col-span-3">
              <PreferredSuppliers />
            </div>
          </div>
          
          {/* Frequently Searched Items */}
          <FrequentlySearched />
          
          {/* Popular Suppliers */}
          <PopularSuppliers />
          
          {/* Fast Customization Section */}
          <FastCustomization />
          
          {/* Top Ranking Products */}
          <TopRankingProducts />
          
          {/* New Arrivals */}
          <NewArrivals />
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GT</span>
                </div>
                <span className="text-xl font-semibold text-foreground">
                  sumic-online
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Your trusted B2B marketplace connecting manufacturers, suppliers, and business buyers worldwide. Find quality products, negotiate better prices, and build lasting business relationships.
              </p>
              <div className="flex space-x-4">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Secure Payments</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Verified Suppliers</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Trade Assurance</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/product-catalog" className="hover:text-foreground transition-smooth">Products</a></li>
                <li><a href="/supplier-profile" className="hover:text-foreground transition-smooth">Suppliers</a></li>
                <li><a href="/dashboard" className="hover:text-foreground transition-smooth">Dashboard</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Trade Services</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} sumic-online. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <span className="text-sm text-muted-foreground">Powered by secure technology</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;