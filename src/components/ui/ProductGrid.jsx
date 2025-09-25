import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ 
  title = "Only for you",
  products = [
    // {
    //   id: 1,
    //   title: "Big Save 2025 Dewalt 12V Cordless Drill Set",
    //   price: 256833,
    //   originalPrice: 327334,
    //   discountPrice: 70501,
    //   savings: 256832,
    //   rating: 4.5,
    // //   reviewCount: 14000,
    //   soldCount: 191,
    //   images: [
    //     '/src/media/products/product_0.jpg',
    //     '/src/media/products/product_1.jpg'
    //   ],
    //   badges: [
    //     { type: 'sale', text: 'Sale' },
    //     { type: 'new', text: 'Big Save' }
    //   ],
    //   promotions: []
    // },
    {
      id: 2,
      title: "New UV Squid Jig Fill Light Luminous Effect",
      price: 69351,
      originalPrice: 87810,
      rating: 4.7,
      reviewCount: 14000,
      images: [
        '/src/media/products/product_1.jpg',
        '/src/media/products/product_2.jpg'
      ],
      badges: [
        { type: 'sale', text: 'Sale' }
      ],
      savings: 88271
    },
    {
      id: 3,
      title: "Obd2 Diagnostic Scanner Full OBD Functions",
      price: 36511,
      originalPrice: 74135,
      rating: 4.4,
      reviewCount: 1000,
      images: [
        '/src/media/products/product_2.jpg',
        '/src/media/products/product_3.jpg'
      ],
      badges: [
        { type: 'sale', text: 'Sale' }
      ],
      savings: 64245,
      promotions: ['$3 off when you buy 3...']
    },
    {
      id: 4,
      title: "New Miniso Disney Stitch Series Plush Toy",
      price: 31360,
      originalPrice: 74150,
      rating: 5,
      reviewCount: 279,
      images: [
        '/src/media/products/product_3.jpg',
        '/src/media/products/product_4.jpg'
      ],
      badges: [
        { type: 'sale', text: 'Sale' },
        { type: 'hot', text: 'SuperDeals' }
      ],
      savings: 31360
    },
    {
      id: 5,
      title: "Trolley Storage Rack Mobile Cart 4 Tier",
      price: 24262,
      originalPrice: 74150,
      rating: 4.8,
      reviewCount: 810,
      soldCount: 191,
      images: [
        '/src/media/products/product_4.jpg',
        '/src/media/products/product_0.jpg'
      ],
      badges: [
        { type: 'sale', text: 'Sale' },
        { type: 'hot', text: 'SuperDeals' }
      ],
      savings: 24263
    },
    {
      id: 6,
      title: "2nd generation vein pen, painless vein finder",
      price: 50460,
      originalPrice: 186889,
      rating: 5,
      reviewCount: 79,
      images: [
        '/src/media/products/product_1.jpg',
        '/src/media/products/product_2.jpg'
      ],
      savings: 74150
    },
    {
      id: 7,
      title: "Gaming Mouse Pad Large Extended Mousepad",
      price: 15230,
      originalPrice: 28500,
      rating: 4.3,
      reviewCount: 500,
      images: [
        '/src/media/products/product_3.jpg'
      ],
      badges: [
        { type: 'new', text: 'New' }
      ]
    },
    {
      id: 8,
      title: "Wireless Gaming Controller for PC PS3 PS4",
      price: 42800,
      originalPrice: 65000,
      rating: 4.6,
      reviewCount: 1200,
      images: [
        '/src/media/products/product_4.jpg'
      ],
      badges: [
        { type: 'hot', text: 'Hot' }
      ]
    },
    {
      id: 9,
      title: "Smart Home WiFi Socket Remote Control",
      price: 18500,
      originalPrice: 25000,
      rating: 4.4,
      reviewCount: 800,
      images: [
        '/src/media/products/product_0.jpg'
      ]
    },
    {
      id: 10,
      title: "LED Strip Lights 5M RGB Color Changing",
      price: 32000,
      originalPrice: 48000,
      rating: 4.7,
      reviewCount: 950,
      images: [
        '/src/media/products/product_2.jpg'
      ],
      badges: [
        { type: 'sale', text: 'Sale' }
      ]
    },
    {
      id: 11,
      title: "Bluetooth Earbuds Wireless Headphones",
      price: 28500,
      originalPrice: 42000,
      rating: 4.5,
      reviewCount: 1500,
      images: [
        '/src/media/products/product_1.jpg'
      ]
    },
    {
      id: 12,
      title: " Power Supply Variable Voltage",
      price: 85000,
      originalPrice: 120000,
      rating: 4.8,
      reviewCount: 350,
      images: [
        '/src/media/products/product_4.jpg'
      ],
      badges: [
        { type: 'hot', text: 'Professional' }
      ]
    },

        {
      id: 13,
      title: "Digital Power Supply Variable Voltage",
      price: 85000,
      originalPrice: 12000,
      rating: 4.8,
      reviewCount: 350,
      images: [
        '/src/media/products/product_1.jpg'
      ],
      badges: [
        { type: 'hot', text: 'Professional' }
      ]
    }
  ],
  showTitle = true,
  columns = 6
}) => {
  
  const gridColsClass = {
    4: 'grid-cols-2 md:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    8: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-8'
  };

  return (
    <section className="product_grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {showTitle && (
        <div className="mb-8">
          <h2 className="discover_title text-3xl font-bold text-gray-900">{title}</h2>
        </div>
      )}
      
      <div className={`grid ${gridColsClass[columns] || 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'} gap-4`}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;