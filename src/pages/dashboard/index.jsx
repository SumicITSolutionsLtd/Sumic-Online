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
import Footer from '../../components/Footer';

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
<Footer />
    </div>
  );
};

export default Dashboard;