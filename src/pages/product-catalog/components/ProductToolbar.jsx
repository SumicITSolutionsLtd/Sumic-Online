import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const ProductToolbar = ({ 
  totalResults,
  currentPage,
  totalPages,
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
  activeFilters,
  onFilterRemove,
  onFiltersToggle
}) => {
  const [imageSearchOpen, setImageSearchOpen] = useState(false);

  const sortOptions = [
    { value: 'relevance', label: 'Best Match' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'moq-low', label: 'MOQ: Low to High' },
    { value: 'moq-high', label: 'MOQ: High to Low' },
    { value: 'rating', label: 'Supplier Rating' },
    { value: 'newest', label: 'Newest First' }
  ];

  const getActiveFilterCount = () => {
    return activeFilters?.categories?.length + 
           activeFilters?.locations?.length + 
           activeFilters?.certifications?.length +
           (activeFilters?.priceRange?.[0] > 0 || activeFilters?.priceRange?.[1] < 10000 ? 1 : 0) +
           (activeFilters?.moqRange?.[0] > 1 || activeFilters?.moqRange?.[1] < 1000 ? 1 : 0);
  };

  const handleImageSearch = () => {
    setImageSearchOpen(true);
    // In a real app, this would open an image upload modal
    console.log('Image search opened');
  };

  const getFilterChips = () => {
    const chips = [];
    
    // Category chips
    activeFilters?.categories?.forEach(category => {
      chips?.push({
        id: `category-${category}`,
        label: category?.replace('-', ' ')?.replace(/\b\w/g, l => l?.toUpperCase()),
        type: 'category',
        value: category
      });
    });

    // Location chips
    activeFilters?.locations?.forEach(location => {
      chips?.push({
        id: `location-${location}`,
        label: location?.replace('-', ' ')?.replace(/\b\w/g, l => l?.toUpperCase()),
        type: 'location',
        value: location
      });
    });

    // Certification chips
    activeFilters?.certifications?.forEach(cert => {
      chips?.push({
        id: `cert-${cert}`,
        label: cert?.toUpperCase(),
        type: 'certification',
        value: cert
      });
    });

    // Price range chip
    if (activeFilters?.priceRange?.[0] > 0 || activeFilters?.priceRange?.[1] < 10000) {
      chips?.push({
        id: 'price-range',
        label: `$${activeFilters?.priceRange?.[0]} - $${activeFilters?.priceRange?.[1]}`,
        type: 'priceRange',
        value: 'priceRange'
      });
    }

    // MOQ range chip
    if (activeFilters?.moqRange?.[0] > 1 || activeFilters?.moqRange?.[1] < 1000) {
      chips?.push({
        id: 'moq-range',
        label: `MOQ: ${activeFilters?.moqRange?.[0]} - ${activeFilters?.moqRange?.[1]}`,
        type: 'moqRange',
        value: 'moqRange'
      });
    }

    return chips;
  };

  const filterChips = getFilterChips();

  return (
    <div className="space-y-4">
      {/* Main Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={onFiltersToggle}
            iconName="Filter"
            iconPosition="left"
            className="lg:hidden"
          >
            Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
          </Button>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            {totalResults?.toLocaleString()} products found
            {totalPages > 1 && (
              <span className="ml-2">
                • Page {currentPage} of {totalPages}
              </span>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Image Search */}
          <Button
            variant="outline"
            size="sm"
            onClick={handleImageSearch}
            iconName="Camera"
            iconPosition="left"
          >
            Image Search
          </Button>

          {/* Sort Dropdown */}
          <div className="w-48">
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={onSortChange}
              placeholder="Sort by..."
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`
                p-2 transition-smooth
                ${viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }
              `}
              title="Grid view"
            >
              <Icon name="Grid3X3" size={18} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`
                p-2 transition-smooth
                ${viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }
              `}
              title="List view"
            >
              <Icon name="List" size={18} />
            </button>
          </div>
        </div>
      </div>
      {/* Active Filters */}
      {filterChips?.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-foreground">Active filters:</span>
          {filterChips?.map((chip) => (
            <div
              key={chip?.id}
              className="flex items-center space-x-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              <span>{chip?.label}</span>
              <button
                onClick={() => onFilterRemove(chip?.type, chip?.value)}
                className="hover:bg-primary/20 rounded-full p-0.5 transition-smooth"
              >
                <Icon name="X" size={12} />
              </button>
            </div>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onFilterRemove('all')}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductToolbar;