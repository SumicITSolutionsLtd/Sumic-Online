import React from 'react';
import { Link } from 'react-router-dom';
import product_0 from '../../../media/products/product_0.jpg';
import product_1 from '../../../media/products/product_1.jpg';
import product_2 from '../../../media/products/product_2.jpg';
import product_3 from '../../../media/products/product_3.jpg';
import product_4 from '../../../media/products/product_4.jpg';
import "../mega_menu.css"

const CategoriesMegaMenu = ({ isVisible, megaMenuData }) => {
  if (!isVisible || !megaMenuData) return null;

  const { categories, featuredProducts } = megaMenuData;

  return (
    <div className="mega absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-50 animate-in slide-in-from-top-2 duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Categories Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Categories for you</h3>
            </div>
            
            <div className="space-y-2">
              {categories?.map((category, index) => (
                <Link
                  key={index}
                  to={category.link}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 hover:border-green-200 border border-transparent transition-all group"
                >
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Featured Products Section */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Categories for you</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {featuredProducts?.map((product, index) => (
                <Link
                  key={index}
                  to={product.link}
                  className="group text-center hover:shadow-lg transition-all duration-200 p-3 rounded-lg border border-transparent hover:border-green-200 hover:bg-green-50"
                >
                  <div className="relative w-full h-20 mb-3 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    {product.badge && (
                      <span className="absolute top-1 right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full font-medium">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 group-hover:text-gray-900 font-medium line-clamp-2">
                    {product.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default mega menu data for "All Categories"
export const getAllCategoriesMegaMenuData = () => ({
  categories: [
    {
      name: "Apparel & Accessories",
      link: "/products",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    },
    {
      name: "Sports & Entertainment",
      link: "/products",
      icon: "m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
    },
    {
      name: "Packaging & Printing",
      link: "/products",
      icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    },
    {
      name: "Health & Medical",
      link: "/products",
      icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    },
    {
      name: "Industrial Machinery",
      link: "/products",
      icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    },
    {
      name: "Consumer Electronics",
      link: "/products",
      icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
    },
    {
      name: "Home & Garden",
      link: "/products",
      icon: "m2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    }
  ],
  featuredProducts: [
    {
      name: "Polo Shirts",
      image: product_0,
      link: "/products/polo-shirts",
      badge: "Hot"
    },
    {
      name: "Sport T-shirt",
      image: product_1,
      link: "/products/sport-tshirt"
    },
    {
      name: "Industrial Screws",
      image: product_2,
      link: "/products/screws"
    },
    {
      name: "Fasteners",
      image: product_3,
      link: "/products/fasteners"
    },
    {
      name: "Sport Shirt",
      image: product_4,
      link: "/products/sport-shirt"
    },
    {
      name: "Plus Size Men's Shirts",
      image: product_0,
      link: "/products/plus-size-shirts"
    },
    {
      name: "Men's T-Shirts",
      image: product_1,
      link: "/products/mens-tshirts",
      badge: "New"
    },
    {
      name: "Men's Shirts",
      image: product_2,
      link: "/products/mens-shirts"
    },
    {
      name: "Metal Studs",
      image: product_3,
      link: "/products/studs"
    },
    {
      name: "Men's Polo Shirts",
      image: product_4,
      link: "/products/mens-polo"
    },
    {
      name: "T-Shirt",
      image: product_0,
      link: "/products/tshirt"
    },
    {
      name: "Tactical Shirt",
      image: product_1,
      link: "/products/tactical-shirt"
    }
  ]
});

export default CategoriesMegaMenu;