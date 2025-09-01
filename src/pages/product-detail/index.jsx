import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import BreadcrumbNavigation from '../../components/ui/BreadcrumbNavigation';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import ProductTabs from './components/ProductTabs';
import RelatedProducts from './components/RelatedProducts';
import StickyActionBar from './components/StickyActionBar';
import product_0 from '../../media/products/product_0.jpg';
import product_1 from '../../media/products/product_1.jpg';
import product_2 from '../../media/products/product_2.jpg';
import product_3 from '../../media/products/product_3.jpg';
import product_4 from '../../media/products/product_4.jpg';

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const [selectedQuantity, setSelectedQuantity] = useState(1000);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Mock product data
  const product = {
    id: searchParams?.get('id') || '1',
    name: "Industrial Grade Stainless Steel Pipe Fittings",
    model: "SS316L-PF-001",
    images: [
      product_0,
      product_1,
      product_2,
      product_3
    ],
    badges: ["Trade Assurance", "Verified Supplier", "Quality Assured"],
    priceTiers: [
      { minQuantity: 1000, price: 12.50 },
      { minQuantity: 5000, price: 11.80 },
      { minQuantity: 10000, price: 10.95 },
      { minQuantity: 50000, price: 9.75 }
    ],
    moq: 1000,
    leadTime: "15-20 days",
    averageRating: 4.6,
    features: [
      "High corrosion resistance with SS316L material",
      "Precision machined for perfect fit and seal",
      "Temperature range: -40°C to +400°C",
      "Pressure rating up to 6000 PSI",
      "Available in multiple sizes from 1/4\" to 4\"",
      "Compliant with ASTM, ANSI, and DIN standards",
      "Suitable for chemical, petrochemical, and food industries",
      "Mirror finish for easy cleaning and maintenance"
    ]
  };

  const supplier = {
    name: "Shanghai Precision Manufacturing Co., Ltd.",
    location: "Shanghai, China",
    logo: product_4,
    rating: 4.7,
    reviewCount: 1247,
    yearsInBusiness: "15+",
    totalProducts: "2,500+",
    responseRate: "98%",
    onTimeDelivery: "96%",
    certifications: ["ISO 9001", "ISO 14001", "CE", "API", "ASME"]
  };

  const specifications = [
    { label: "Material", value: "Stainless Steel 316L" },
    { label: "Size Range", value: "1/4\" - 4\" (DN8 - DN100)" },
    { label: "Pressure Rating", value: "150LB - 2500LB" },
    { label: "Temperature Range", value: "-40°C to +400°C" },
    { label: "Thread Type", value: "NPT, BSP, Metric" },
    { label: "Surface Finish", value: "Mirror Polish" },
    { label: "Standards", value: "ASTM A182, ANSI B16.11" },
    { label: "Testing", value: "PMI, Hydrostatic, Visual" }
  ];

  const reviews = [
    {
      author: "Michael Chen",
      company: "Pacific Chemical Industries",
      rating: 5,
      date: "2025-01-15",
      comment: "Excellent quality fittings. We\'ve been using these for our chemical processing plant for over 2 years. No issues with corrosion or leakage. Highly recommended for industrial applications.",
      orderQuantity: 5000
    },
    {
      author: "Sarah Johnson",
      company: "Atlantic Manufacturing",
      rating: 4,
      date: "2025-01-10",
      comment: "Good quality product with fast delivery. The precision is excellent and fits perfectly with our existing piping system. Price is competitive for the quality provided.",
      orderQuantity: 2500
    },
    {
      author: "David Rodriguez",
      company: "Gulf Coast Petrochemicals",
      rating: 5,
      date: "2025-01-05",
      comment: "Outstanding supplier! The fittings exceeded our expectations. Great communication throughout the order process and delivery was on time. Will definitely order again.",
      orderQuantity: 10000
    }
  ];

  const relatedProducts = [
    {
      id: "2",
      name: "Stainless Steel Ball Valves",
      price: 45.80,
      moq: 500,
      rating: 4.5,
      reviewCount: 892,
      location: "Guangzhou, China",
      image: product_0,
      isNew: false
    },
    {
      id: "3", 
      name: "Industrial Pipe Flanges",
      price: 28.90,
      moq: 200,
      rating: 4.7,
      reviewCount: 654,
      location: "Shanghai, China",
      image: product_1,
      isNew: true
    },
    {
      id: "4",
      name: "Pressure Relief Valves",
      price: 125.00,
      moq: 100,
      rating: 4.8,
      reviewCount: 423,
      location: "Beijing, China", 
      image: product_2,
      isNew: false
    },
    {
      id: "5",
      name: "Stainless Steel Elbows",
      price: 18.50,
      moq: 1000,
      rating: 4.4,
      reviewCount: 756,
      location: "Shenzhen, China",
      image: product_3,
      isNew: false
    }
  ];

  const breadcrumbs = [
    { label: 'Home', path: '/dashboard' },
    { label: 'Products', path: '/product-catalog' },
    { label: 'Industrial Machinery', path: '/product-catalog?category=industrial' },
    { label: 'Pipe Fittings', path: '/product-catalog?category=pipe-fittings' },
    { label: product?.name, path: `/product-detail?id=${product?.id}`, isLast: true }
  ];

  useEffect(() => {
    setSelectedQuantity(product?.moq);
  }, [product?.moq]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 800;
      setShowStickyBar(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuantityChange = (quantity) => {
    if (quantity >= product?.moq) {
      setSelectedQuantity(quantity);
    }
  };

  const handleAddToCart = (quantity) => {
    console.log('Adding to cart:', { productId: product?.id, quantity });
    // In real app, this would add to cart context/state
    alert(`Added ${quantity?.toLocaleString()} units to cart`);
  };

  const handleRequestQuote = (quantity) => {
    console.log('Requesting quote:', { productId: product?.id, quantity });
    // In real app, this would open quote request modal
    alert(`Quote requested for ${quantity?.toLocaleString()} units`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BreadcrumbNavigation customBreadcrumbs={breadcrumbs} />
          
          {/* Product Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ProductImageGallery 
                images={product?.images} 
                productName={product?.name} 
              />
            </div>

            {/* Product Information */}
            <div>
              <ProductInfo
                product={product}
                onQuantityChange={handleQuantityChange}
                onAddToCart={handleAddToCart}
                onRequestQuote={handleRequestQuote}
              />
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-12">
            <ProductTabs
              product={product}
              supplier={supplier}
              reviews={reviews}
              specifications={specifications}
            />
          </div>

          {/* Related Products */}
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
      {/* Mobile Sticky Action Bar */}
      <StickyActionBar
        product={product}
        selectedQuantity={selectedQuantity}
        onQuantityChange={handleQuantityChange}
        onAddToCart={handleAddToCart}
        onRequestQuote={handleRequestQuote}
        isVisible={showStickyBar}
      />
    </div>
  );
};

export default ProductDetail;
