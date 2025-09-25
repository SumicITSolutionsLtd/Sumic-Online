import React from 'react';
import { Link } from 'react-router-dom';
import HomeGardenImage from "../../media/home_garden.png"
import WigsImage from "../../media/hair_wigs.png"
import ElectronicsImage from "../../media/electronics.png"
import MenClothingsImage from "../../media/mens_clothing.png"
import HomeImprovemntImage from "../../media/home_improvement.png"
import Accessories from "../../media/accessories.png"
import ProductImage1 from "../../media/products/product_1.jpg"
import "./marketplace.css"

const MarketplaceSection = ({
  heroData = {
    title: "Ladies Only",
    subtitle: "Your marketplace choice",
    buttonText: "Shop now",
    buttonLink: "/shop",
    backgroundImage: "/src/media/blue_bg.png"
  },
  productCards = [
    {
      id: 1,
      price: "UGX40,182",
      originalPrice: "UGX91,297",
      rating: 4.1,
      image: ProductImage1,
      sold: "494 sold"
    },
    {
      id: 2,
      price: "UGX39,010",
      originalPrice: "UGX78,020",
      rating: 4.9,
      image: ProductImage1,

      sold: "700+ sold"
    },
    // {
    //   id: 3,
    //   image: ProductImage1,

    //   price: "UGX51,350",
    //   originalPrice: "UGX85,596",
    //   rating: 4.9,
    //   sold: "383 sold"
    // }
  ],
  categories = [
    {
      id: 1,
      title: "Home & Garden",
      icon: "home",
      color: "green",
      link: "/categories/home-garden",
      backgroundImage: HomeGardenImage
    },
    {
      id: 2,
      title: "Hair Extensions & Wigs",
      icon: "user",
      color: "pink",
      link: "/categories/hair-extensions",
      backgroundImage: WigsImage
    },
    {
      id: 3,
      title: "Men's Clothing",
      icon: "user",
      color: "blue",
      link: "/categories/mens-clothing",
      backgroundImage: MenClothingsImage
    },
    {
      id: 4,
      title: "Accessories",
      icon: "clock",
      color: "yellow",
      link: "/categories/accessories",
      backgroundImage: Accessories
    },
    {
      id: 5,
      title: "Electronics",
      icon: "monitor",
      color: "purple",
      link: "/categories/electronics",
      backgroundImage: ElectronicsImage
    },
    {
      id: 6,
      title: "Home Improvement & Lighting",
      icon: "lightbulb",
      color: "orange",
      link: "/categories/home-improvement",
      backgroundImage: HomeImprovemntImage
    }
  ]
}) => {

  const getIcon = (iconType, colorClass) => {
    const iconProps = {
      className: `w-8 h-8 ${colorClass}`,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24"
    };

    switch (iconType) {
      case 'home':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          </svg>
        );
      case 'user':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'clock':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'monitor':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'lightbulb':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      green: { bg: 'bg-green-100', text: 'text-green-600' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600' }
    };
    return colorMap[color] || colorMap.green;
  };

  return (
    <section className="Shop_by_category max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <h2 className='discover_title'>Shop by category</h2>

      <div className="sbc">

        {/* Left Section - Hero with Background */}
        <div className="sbc_grid_left relative overflow-hidden rounded-xl border-2 border-gray-200 shadow-lg">
          <div  className="relative" >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/80 to-transparent"></div>

            {/* Hero Content */}
            <div className="sbc_content relative z-10 p-8 h-full flex flex-col justify-between text-white">
              <div>
                <h1 className="text-3xl lg:text-3xl font-bold mb-1">{heroData.title}</h1>
                <p className="text-lg lg:text-xl mb-6">{heroData.subtitle}</p>
                <Link
                  to={heroData.buttonLink}
                  className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-semibold"
                >
                  {heroData.buttonText}
                </Link>
              </div>

              {/* Product Cards */}
              <div className="sbc_grid grid grid grid-cols-3 gap-3 mt-8">
                {productCards.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg p-3 text-black border border-gray-200">
                    <div className="h-32 bg-gray-100 rounded mb-2">
                      <img style={{ marginBottom: 1, borderRadius:5 }} src={product.image} alt="" />
                    </div>
                    <div style={{marginTop: "2rem"}} >
                      <div className="text-xs font-bold text-green-600">{product.price}</div>
                      <div className="text-xs text-gray-500 line-through">{product.originalPrice}</div>
                 
                      <div className="flex items-center text-xs mt-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="ml-1">{product.rating}</span>
                        <span className="ml-2 text-gray-500">{product.sold}</span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Category Grid */}
        <div className="sbc_grid_right grid grid-cols-2 gap-2">
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.link}
                className="sbc_card relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-black-300 transition-colors cursor-pointer block group"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${category.backgroundImage}')`,
                  }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0  group-hover:bg-black/30 transition-colors"></div>

                {/* Content */}
                <div className="relative z-10 p-4 h-full flex items-end">
                  <h3 className="text-sm font-semibold text-black drop-shadow-lg">{category.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;