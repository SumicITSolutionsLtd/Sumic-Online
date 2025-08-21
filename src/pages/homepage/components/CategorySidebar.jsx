import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const CategorySidebar = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const categories = [
    {
      id: 1,
      name: "Sports & Entertainment",
      icon: "Gamepad2",
      subcategories: ["Fitness Equipment", "Outdoor Sports", "Water Sports", "Team Sports"]
    },
    {
      id: 2,
      name: "Beauty",
      icon: "Sparkles",
      subcategories: ["Skincare", "Makeup", "Hair Care", "Nail Care"]
    },
    {
      id: 3,
      name: "Industrial Machinery",
      icon: "Settings",
      subcategories: ["Manufacturing Equipment", "Processing Machinery", "Packaging Machines", "Testing Equipment"]
    },
    {
      id: 4,
      name: "Commercial Equipment & Machinery",
      icon: "Building",
      subcategories: ["Restaurant Equipment", "Office Equipment", "Medical Equipment", "Agricultural Machinery"]
    },
    {
      id: 5,
      name: "Construction & Real Estate",
      icon: "Home",
      subcategories: ["Building Materials", "Construction Equipment", "Real Estate Development", "Interior Design"]
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev?.[categoryId]
    }));
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Categories for you
      </h2>
      <div className="space-y-2">
        {categories?.map((category) => (
          <div key={category?.id} className="border-b border-border last:border-b-0 pb-2 last:pb-0">
            <button
              onClick={() => toggleCategory(category?.id)}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-smooth"
            >
              <div className="flex items-center space-x-3">
                <Icon name={category?.icon} size={18} color="#7BC97B" />
                <span className="text-sm font-medium text-foreground">
                  {category?.name}
                </span>
              </div>
              <Icon 
                name={expandedCategories?.[category?.id] ? "ChevronUp" : "ChevronDown"} 
                size={16} 
                color="#6B7280" 
              />
            </button>
            
            {expandedCategories?.[category?.id] && (
              <div className="ml-9 mt-2 space-y-1">
                {category?.subcategories?.map((subcategory) => (
                  <Link
                    key={subcategory}
                    to={`/product-catalog?category=${encodeURIComponent(subcategory)}`}
                    className="block px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-smooth"
                  >
                    {subcategory}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;