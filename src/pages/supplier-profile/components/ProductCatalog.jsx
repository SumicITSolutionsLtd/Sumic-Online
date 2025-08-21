import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductCatalog = ({ supplier }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', label: 'All Products', count: supplier?.products?.length },
    { id: 'electronics', label: 'Electronics', count: 15 },
    { id: 'machinery', label: 'Machinery', count: 8 },
    { id: 'components', label: 'Components', count: 12 }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? supplier?.products 
    : supplier?.products?.filter(product => product?.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Filters and View Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category?.label} ({category?.count})
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md transition-smooth ${
              viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name="Grid3X3" size={18} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md transition-smooth ${
              viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name="List" size={18} />
          </button>
        </div>
      </div>
      {/* Products Grid/List */}
      <div className={viewMode === 'grid' ?'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' :'space-y-4'
      }>
        {filteredProducts?.map((product) => (
          <div
            key={product?.id}
            className={`bg-background border border-border rounded-lg overflow-hidden hover:shadow-card transition-smooth ${
              viewMode === 'list' ? 'flex' : ''
            }`}
          >
            {/* Product Image */}
            <div className={`overflow-hidden ${
              viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'aspect-square'
            }`}>
              <Image
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 flex-1">
              <h4 className="font-medium text-foreground mb-2 line-clamp-2">{product?.name}</h4>
              <div className="flex items-center justify-between mb-3">
                <div className="text-lg font-semibold text-primary">{product?.price}</div>
                <div className="text-sm text-muted-foreground">MOQ: {product?.moq}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-warning fill-current" />
                  <span className="text-sm text-muted-foreground">{product?.rating}</span>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center pt-6">
        <Button variant="outline">
          Load More Products
        </Button>
      </div>
    </div>
  );
};

export default ProductCatalog;