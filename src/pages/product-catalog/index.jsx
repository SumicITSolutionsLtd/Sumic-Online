import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/Header';
import BreadcrumbNavigation from '../../components/ui/BreadcrumbNavigation';
import CategorySidebar from './components/CategorySidebar';
import ProductToolbar from './components/ProductToolbar';
import ProductGrid from './components/ProductGrid';
import Footer from '../../components/Footer';
import SavedSearches from './components/SavedSearches';
import product_0 from '../../media/products/product_0.jpg';
import product_1 from '../../media/products/product_1.jpg';
import product_2 from '../../media/products/product_2.jpg';
import product_3 from '../../media/products/product_3.jpg';
import product_4 from '../../media/products/product_4.jpg';


const ProductCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter state
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 10000],
    moqRange: [1, 1000],
    locations: [],
    certifications: []
  });

  // Search query from URL params
  const searchQuery = searchParams.get('search') || '';

  // Mock products data
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Professional Fitness Equipment Set - Commercial Grade Dumbbells',
      description: 'High-quality commercial grade dumbbells perfect for gyms and fitness centers. Durable construction with anti-slip grip.',
      images: [product_0, product_1],
      priceRange: { min: 45, max: 120 },
      moq: 50,
      supplier: {
        id: 'sup1',
        name: 'FitPro Manufacturing Ltd.',
        rating: 4.8,
        reviewCount: 1247,
        location: 'China'
      },
      certifications: ['ISO 9001', 'CE'],
      isNew: true,
      isFeatured: false,
      isWishlisted: false
    },
    {
      id: '2',
      name: 'Wireless Bluetooth Headphones - Premium Audio Quality',
      description: 'Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for retail and wholesale.',
      images: [product_1, product_2],
      priceRange: { min: 25, max: 85 },
      moq: 100,
      supplier: {
        id: 'sup2',
        name: 'TechSound Electronics Co.',
        rating: 4.6,
        reviewCount: 892,
        location: 'South Korea'
      },
      certifications: ['FCC', 'CE', 'RoHS'],
      isNew: false,
      isFeatured: true,
      isWishlisted: true
    },
    {
      id: '3',
      name: 'Industrial Packaging Machine - Automatic Sealing System',
      description: 'Fully automatic packaging machine for industrial use. High-speed sealing with precision control systems.',
      images: [product_2, product_3],
      priceRange: { min: 15000, max: 45000 },
      moq: 1,
      supplier: {
        id: 'sup3',
        name: 'Industrial Solutions Inc.',
        rating: 4.9,
        reviewCount: 234,
        location: 'Germany'
      },
      certifications: ['ISO 9001', 'CE', 'UL'],
      isNew: false,
      isFeatured: false,
      isWishlisted: false
    },
    {
      id: '4',
      name: 'Organic Skincare Products - Natural Beauty Line',
      description: 'Premium organic skincare products made with natural ingredients. Perfect for beauty retailers and spas.',
      images: [product_3, product_4],
      priceRange: { min: 12, max: 35 },
      moq: 200,
      supplier: {
        id: 'sup4',
        name: 'Natural Beauty Co.',
        rating: 4.7,
        reviewCount: 567,
        location: 'USA'
      },
      certifications: ['FDA', 'Organic'],
      isNew: true,
      isFeatured: true,
      isWishlisted: false
    },
    {
      id: '5',
      name: 'Smart Home Security Camera System - 4K Resolution',
      description: '4K security camera system with AI detection and cloud storage. Ideal for residential and commercial use.',
      images: [product_4, product_0],
      priceRange: { min: 150, max: 400 },
      moq: 25,
      supplier: {
        id: 'sup5',
        name: 'SecureTech Systems',
        rating: 4.5,
        reviewCount: 1123,
        location: 'China'
      },
      certifications: ['FCC', 'CE'],
      isNew: false,
      isFeatured: false,
      isWishlisted: true
    },
    {
      id: '6',
      name: 'Premium Cotton Fabric - Wholesale Textile Materials',
      description: 'High-quality cotton fabric suitable for clothing manufacturing. Available in various colors and patterns.',
      images: [product_0, product_1],
      priceRange: { min: 8, max: 25 },
      moq: 500,
      supplier: {
        id: 'sup6',
        name: 'Global Textiles Ltd.',
        rating: 4.4,
        reviewCount: 789,
        location: 'India'
      },
      certifications: ['OEKO-TEX'],
      isNew: false,
      isFeatured: false,
      isWishlisted: false
    },
    {
      id: '7',
      name: 'LED Lighting Solutions - Energy Efficient Bulbs',
      description: 'Energy-efficient LED bulbs for commercial and residential use. Long-lasting with excellent light quality.',
      images: [product_1, product_2],
      priceRange: { min: 3, max: 15 },
      moq: 1000,
      supplier: {
        id: 'sup7',
        name: 'BrightLight Technologies',
        rating: 4.6,
        reviewCount: 1456,
        location: 'China'
      },
      certifications: ['CE', 'RoHS', 'Energy Star'],
      isNew: true,
      isFeatured: false,
      isWishlisted: false
    },
    {
      id: '8',
      name: 'Stainless Steel Kitchen Equipment - Commercial Grade',
      description: 'Professional stainless steel kitchen equipment for restaurants and commercial kitchens. Durable and hygienic.',
      images: [product_2, product_3],
      priceRange: { min: 200, max: 800 },
      moq: 10,
      supplier: {
        id: 'sup8',
        name: 'Kitchen Pro Manufacturing',
        rating: 4.8,
        reviewCount: 345,
        location: 'Turkey'
      },
      certifications: ['ISO 9001', 'NSF'],
      isNew: false,
      isFeatured: true,
      isWishlisted: true
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const totalResults = filteredProducts.length;
  const totalPages = Math.ceil(totalResults / 20); // 20 products per page

  // Initialize search from URL params
  useEffect(() => {
    if (searchQuery) {
      // Filter products based on search query
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.supplier.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery]);

  // Apply filters
  useEffect(() => {
    let filtered = [...products];

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.supplier.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filters
    if (filters.categories.length > 0) {
      // Mock category filtering - in real app, products would have category IDs
      filtered = filtered.filter(product => {
        // Simple mock logic - check if product name contains category keywords
        return filters.categories.some(category => {
          const keywords = category.split('-');
          return keywords.some(keyword => 
            product.name.toLowerCase().includes(keyword.toLowerCase()) ||
            product.description.toLowerCase().includes(keyword.toLowerCase())
          );
        });
      });
    }

    // Apply price range filter
    filtered = filtered.filter(product =>
      product.priceRange.min >= filters.priceRange[0] &&
      product.priceRange.max <= filters.priceRange[1]
    );

    // Apply MOQ range filter
    filtered = filtered.filter(product =>
      product.moq >= filters.moqRange[0] &&
      product.moq <= filters.moqRange[1]
    );

    // Apply location filters
    if (filters.locations.length > 0) {
      filtered = filtered.filter(product =>
        filters.locations.some(location =>
          product.supplier.location.toLowerCase().includes(location.toLowerCase())
        )
      );
    }

    // Apply certification filters
    if (filters.certifications.length > 0) {
      filtered = filtered.filter(product =>
        filters.certifications.some(cert =>
          product.certifications.some(productCert =>
            productCert.toLowerCase().includes(cert.toLowerCase())
          )
        )
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.priceRange.min - b.priceRange.min;
        case 'price-high':
          return b.priceRange.max - a.priceRange.max;
        case 'moq-low':
          return a.moq - b.moq;
        case 'moq-high':
          return b.moq - a.moq;
        case 'rating':
          return b.supplier.rating - a.supplier.rating;
        case 'newest':
          return b.isNew - a.isNew;
        default:
          return 0; // relevance - keep original order
      }
    });

    setFilteredProducts(filtered);
  }, [filters, sortBy, searchQuery, products]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleFilterRemove = (filterType, value) => {
    if (filterType === 'all') {
      setFilters({
        categories: [],
        priceRange: [0, 10000],
        moqRange: [1, 1000],
        locations: [],
        certifications: []
      });
      return;
    }

    const newFilters = { ...filters };
    
    switch (filterType) {
      case 'category':
        newFilters.categories = newFilters.categories.filter(cat => cat !== value);
        break;
      case 'location':
        newFilters.locations = newFilters.locations.filter(loc => loc !== value);
        break;
      case 'certification':
        newFilters.certifications = newFilters.certifications.filter(cert => cert !== value);
        break;
      case 'priceRange':
        newFilters.priceRange = [0, 10000];
        break;
      case 'moqRange':
        newFilters.moqRange = [1, 1000];
        break;
    }
    
    setFilters(newFilters);
  };

  const handleLoadMore = () => {
    setLoading(true);
    // Simulate loading more products
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setLoading(false);
      if (currentPage >= totalPages - 1) {
        setHasMore(false);
      }
    }, 1000);
  };

  const breadcrumbs = [
    { label: 'Home', path: '/dashboard' },
    { label: 'Product Catalog', path: '/product-catalog', isLast: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BreadcrumbNavigation customBreadcrumbs={breadcrumbs} />
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Browse Our Products
            </h1>
            <p className="text-muted-foreground">
              Discover quality products from verified suppliers worldwide
            </p>
          </div>

          {/* Saved Searches */}
          <SavedSearches 
            currentFilters={filters}
            searchQuery={searchQuery}
          />

          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <CategorySidebar
                onFiltersChange={handleFiltersChange}
                activeFilters={filters}
                isOpen={false}
                onClose={() => {}}
              />
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Toolbar */}
              <ProductToolbar
                totalResults={totalResults}
                currentPage={currentPage}
                totalPages={totalPages}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                sortBy={sortBy}
                onSortChange={setSortBy}
                activeFilters={filters}
                onFilterRemove={handleFilterRemove}
                onFiltersToggle={() => setSidebarOpen(true)}
              />

              {/* Product Grid */}
              <div className="mt-6">
                <ProductGrid
                  products={filteredProducts}
                  viewMode={viewMode}
                  loading={loading}
                  hasMore={hasMore}
                  onLoadMore={handleLoadMore}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {/* <CategorySidebar
          onFiltersChange={handleFiltersChange}
          activeFilters={filters}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        /> */}
      </main>
      <Footer />
    </div>
  );
};

export default ProductCatalog;