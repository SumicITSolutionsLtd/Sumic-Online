import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { Checkbox } from '../../../components/ui/Checkbox';
import Select from '../../../components/ui/Select';

const CategorySidebar = ({ onFiltersChange, activeFilters, isOpen, onClose }) => {
  const [expandedCategories, setExpandedCategories] = useState(['sports', 'electronics']);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [moqRange, setMoqRange] = useState([1, 1000]);

  const categories = [
    {
      id: 'sports',
      name: 'Sports & Entertainment',
      icon: 'Trophy',
      subcategories: [
        { id: 'fitness', name: 'Fitness Equipment', count: 1245 },
        { id: 'outdoor', name: 'Outdoor Sports', count: 892 },
        { id: 'water-sports', name: 'Water Sports', count: 567 },
        { id: 'team-sports', name: 'Team Sports', count: 734 }
      ]
    },
    {
      id: 'electronics',
      name: 'Electronics & Technology',
      icon: 'Smartphone',
      subcategories: [
        { id: 'consumer-electronics', name: 'Consumer Electronics', count: 2156 },
        { id: 'components', name: 'Electronic Components', count: 1834 },
        { id: 'telecommunications', name: 'Telecommunications', count: 945 },
        { id: 'security', name: 'Security Systems', count: 678 }
      ]
    },
    {
      id: 'machinery',
      name: 'Industrial Machinery',
      icon: 'Settings',
      subcategories: [
        { id: 'manufacturing', name: 'Manufacturing Equipment', count: 1567 },
        { id: 'construction', name: 'Construction Machinery', count: 892 },
        { id: 'agricultural', name: 'Agricultural Equipment', count: 634 },
        { id: 'packaging', name: 'Packaging Machinery', count: 456 }
      ]
    },
    {
      id: 'beauty',
      name: 'Beauty & Personal Care',
      icon: 'Sparkles',
      subcategories: [
        { id: 'skincare', name: 'Skincare Products', count: 1234 },
        { id: 'cosmetics', name: 'Cosmetics', count: 987 },
        { id: 'hair-care', name: 'Hair Care', count: 765 },
        { id: 'fragrances', name: 'Fragrances', count: 543 }
      ]
    },
    {
      id: 'textiles',
      name: 'Textiles & Apparel',
      icon: 'Shirt',
      subcategories: [
        { id: 'fabrics', name: 'Fabrics & Materials', count: 1456 },
        { id: 'clothing', name: 'Ready-made Clothing', count: 1123 },
        { id: 'accessories', name: 'Fashion Accessories', count: 789 },
        { id: 'footwear', name: 'Footwear', count: 654 }
      ]
    }
  ];

  const supplierLocations = [
    { value: 'china', label: 'China', count: 15420 },
    { value: 'india', label: 'India', count: 8934 },
    { value: 'usa', label: 'United States', count: 5678 },
    { value: 'germany', label: 'Germany', count: 3456 },
    { value: 'turkey', label: 'Turkey', count: 2890 },
    { value: 'south-korea', label: 'South Korea', count: 2345 }
  ];

  const certifications = [
    { id: 'iso9001', name: 'ISO 9001', count: 4567 },
    { id: 'ce', name: 'CE Certified', count: 3456 },
    { id: 'fda', name: 'FDA Approved', count: 2345 },
    { id: 'rohs', name: 'RoHS Compliant', count: 1890 },
    { id: 'fcc', name: 'FCC Certified', count: 1567 },
    { id: 'ul', name: 'UL Listed', count: 1234 }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => 
      prev?.includes(categoryId) 
        ? prev?.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategorySelect = (categoryId, subcategoryId = null) => {
    const filterKey = subcategoryId ? `${categoryId}-${subcategoryId}` : categoryId;
    const newCategories = activeFilters?.categories?.includes(filterKey)
      ? activeFilters?.categories?.filter(cat => cat !== filterKey)
      : [...activeFilters?.categories, filterKey];
    
    onFiltersChange({
      ...activeFilters,
      categories: newCategories
    });
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    onFiltersChange({
      ...activeFilters,
      priceRange: newRange
    });
  };

  const handleMoqRangeChange = (newRange) => {
    setMoqRange(newRange);
    onFiltersChange({
      ...activeFilters,
      moqRange: newRange
    });
  };

  const handleLocationChange = (locations) => {
    onFiltersChange({
      ...activeFilters,
      locations
    });
  };

  const handleCertificationChange = (certId, checked) => {
    const newCertifications = checked
      ? [...activeFilters?.certifications, certId]
      : activeFilters?.certifications?.filter(cert => cert !== certId);
    
    onFiltersChange({
      ...activeFilters,
      certifications: newCertifications
    });
  };

  const clearAllFilters = () => {
    setPriceRange([0, 10000]);
    setMoqRange([1, 1000]);
    onFiltersChange({
      categories: [],
      priceRange: [0, 10000],
      moqRange: [1, 1000],
      locations: [],
      certifications: []
    });
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
        w-80 lg:w-full bg-card border-r border-border
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto h-full lg:h-auto
      `}>
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-smooth"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* Filter Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Filters</h3>
            <button
              onClick={clearAllFilters}
              className="text-sm text-primary hover:text-primary/80 transition-smooth"
            >
              Clear All
            </button>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Categories</h4>
            <div className="space-y-2">
              {categories?.map((category) => (
                <div key={category?.id} className="space-y-2">
                  <div 
                    className={`
                      flex items-center justify-between p-2 rounded-md cursor-pointer transition-smooth
                      ${activeFilters?.categories?.includes(category?.id) 
                        ? 'bg-primary/10 text-primary' :'hover:bg-muted'
                      }
                    `}
                    onClick={() => handleCategorySelect(category?.id)}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon name={category?.icon} size={16} />
                      <span className="text-sm font-medium">{category?.name}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e?.stopPropagation();
                        toggleCategory(category?.id);
                      }}
                      className="p-1 hover:bg-muted rounded transition-smooth"
                    >
                      <Icon 
                        name={expandedCategories?.includes(category?.id) ? "ChevronUp" : "ChevronDown"} 
                        size={14} 
                      />
                    </button>
                  </div>
                  
                  {expandedCategories?.includes(category?.id) && (
                    <div className="ml-6 space-y-1">
                      {category?.subcategories?.map((sub) => (
                        <div
                          key={sub?.id}
                          className={`
                            flex items-center justify-between p-2 rounded-md cursor-pointer transition-smooth
                            ${activeFilters?.categories?.includes(`${category?.id}-${sub?.id}`)
                              ? 'bg-primary/10 text-primary' :'hover:bg-muted'
                            }
                          `}
                          onClick={() => handleCategorySelect(category?.id, sub?.id)}
                        >
                          <span className="text-sm">{sub?.name}</span>
                          <span className="text-xs text-muted-foreground">({sub?.count})</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Price Range (USD)</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={priceRange?.[0]}
                  onChange={(e) => handlePriceRangeChange([parseInt(e?.target?.value), priceRange?.[1]])}
                  className="w-20 px-2 py-1 text-sm border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Min"
                />
                <span className="text-muted-foreground">-</span>
                <input
                  type="number"
                  value={priceRange?.[1]}
                  onChange={(e) => handlePriceRangeChange([priceRange?.[0], parseInt(e?.target?.value)])}
                  className="w-20 px-2 py-1 text-sm border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Max"
                />
              </div>
              <div className="text-xs text-muted-foreground">
                Current: ${priceRange?.[0]?.toLocaleString()} - ${priceRange?.[1]?.toLocaleString()}
              </div>
            </div>
          </div>

          {/* MOQ Range */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Minimum Order Quantity</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={moqRange?.[0]}
                  onChange={(e) => handleMoqRangeChange([parseInt(e?.target?.value), moqRange?.[1]])}
                  className="w-20 px-2 py-1 text-sm border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Min"
                />
                <span className="text-muted-foreground">-</span>
                <input
                  type="number"
                  value={moqRange?.[1]}
                  onChange={(e) => handleMoqRangeChange([moqRange?.[0], parseInt(e?.target?.value)])}
                  className="w-20 px-2 py-1 text-sm border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Max"
                />
              </div>
              <div className="text-xs text-muted-foreground">
                Current: {moqRange?.[0]} - {moqRange?.[1]} pieces
              </div>
            </div>
          </div>

          {/* Supplier Location */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Supplier Location</h4>
            <Select
              options={supplierLocations?.map(loc => ({
                value: loc?.value,
                label: `${loc?.label} (${loc?.count})`
              }))}
              value={activeFilters?.locations}
              onChange={handleLocationChange}
              placeholder="Select locations..."
              multiple
              searchable
              clearable
            />
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Certifications</h4>
            <div className="space-y-2">
              {certifications?.map((cert) => (
                <Checkbox
                  key={cert?.id}
                  label={`${cert?.name} (${cert?.count})`}
                  checked={activeFilters?.certifications?.includes(cert?.id)}
                  onChange={(e) => handleCertificationChange(cert?.id, e?.target?.checked)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySidebar;