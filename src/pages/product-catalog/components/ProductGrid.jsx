import React from 'react';
import ProductCard from './ProductCard';
import Icon from '../../../components/AppIcon';

const ProductGrid = ({ 
  products, 
  viewMode, 
  loading, 
  hasMore, 
  onLoadMore, 
  onShowNotification 
}) => {
  if (loading && products?.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <Icon name="Loader2" size={32} className="animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading products...</p>
        </div>
      </div>
    );
  }

  if (products?.length === 0) {
    return (
      <div className=" flex items-center justify-center py-12">
        <div className="text-center">
          <Icon name="Package" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No products found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search terms to find what you're looking for.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Product Grid */}
      <div className={`
        grid gap-6
        ${viewMode === 'grid' ?'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' :'grid-cols-1'
        }
      `}>
        {products?.map((product) => (
          <ProductCard
            key={product?.id}
            product={product}
            viewMode={viewMode}
            onShowNotification={onShowNotification}
          />
        ))}
      </div>
      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center py-8">
          {loading ? (
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Loader2" size={20} className="animate-spin" />
              <span>Loading more products...</span>
            </div>
          ) : (
            <button
              onClick={onLoadMore}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth"
            >
              Load More Products
            </button>
          )}
        </div>
      )}
      {/* End of Results */}
      {!hasMore && products?.length > 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            You've reached the end of the results
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;