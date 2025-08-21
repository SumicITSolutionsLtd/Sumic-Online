import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CustomerReviews = ({ supplier }) => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [showAllReviews, setShowAllReviews] = useState(false);

  const ratingFilters = [
    { id: 'all', label: 'All Reviews', count: supplier?.reviews?.length },
    { id: '5', label: '5 Stars', count: 45 },
    { id: '4', label: '4 Stars', count: 23 },
    { id: '3', label: '3 Stars', count: 8 },
    { id: '2', label: '2 Stars', count: 2 },
    { id: '1', label: '1 Star', count: 1 }
  ];

  const filteredReviews = selectedRating === 'all' 
    ? supplier?.reviews 
    : supplier?.reviews?.filter(review => Math.floor(review?.rating) === parseInt(selectedRating));

  const displayedReviews = showAllReviews ? filteredReviews : filteredReviews?.slice(0, 5);

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Customer Reviews</h3>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={16}
                className={i < Math.floor(supplier?.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
              />
            ))}
          </div>
          <span className="text-lg font-semibold text-foreground">{supplier?.rating}</span>
          <span className="text-sm text-muted-foreground">({supplier?.reviewCount} reviews)</span>
        </div>
      </div>
      {/* Rating Distribution */}
      <div className="mb-6">
        <h4 className="font-medium text-foreground mb-3">Rating Distribution</h4>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1]?.map((rating) => {
            const count = ratingFilters?.find(f => f?.id === rating?.toString())?.count || 0;
            const percentage = (count / supplier?.reviewCount) * 100;
            
            return (
              <div key={rating} className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground w-8">{rating}</span>
                <Icon name="Star" size={14} className="text-warning fill-current" />
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div 
                    className="bg-warning rounded-full h-2 transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground w-8">{count}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Rating Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {ratingFilters?.map((filter) => (
          <button
            key={filter?.id}
            onClick={() => setSelectedRating(filter?.id)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
              selectedRating === filter?.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {filter?.label} ({filter?.count})
          </button>
        ))}
      </div>
      {/* Reviews List */}
      <div className="space-y-6">
        {displayedReviews?.map((review) => (
          <div key={review?.id} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-start space-x-4">
              {/* Reviewer Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={review?.reviewer?.avatar}
                  alt={review?.reviewer?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h5 className="font-medium text-foreground">{review?.reviewer?.name}</h5>
                    <p className="text-sm text-muted-foreground">{review?.reviewer?.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className={i < Math.floor(review?.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">{formatDate(review?.date)}</p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm text-muted-foreground mb-3">{review?.comment}</p>

                {/* Product Info */}
                {review?.product && (
                  <div className="flex items-center space-x-2 p-3 bg-muted rounded-lg mb-3">
                    <Icon name="Package" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">Product:</span>
                    <span className="text-sm text-muted-foreground">{review?.product}</span>
                  </div>
                )}

                {/* Review Images */}
                {review?.images && review?.images?.length > 0 && (
                  <div className="flex space-x-2 mb-3">
                    {review?.images?.map((image, index) => (
                      <div key={index} className="w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`Review image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Helpful Actions */}
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-smooth">
                    <Icon name="ThumbsUp" size={14} />
                    <span>Helpful ({review?.helpfulCount})</span>
                  </button>
                  <button className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More Reviews */}
      {filteredReviews?.length > 5 && (
        <div className="text-center pt-6">
          <Button 
            variant="outline" 
            onClick={() => setShowAllReviews(!showAllReviews)}
          >
            {showAllReviews ? 'Show Less' : `Show All ${filteredReviews?.length} Reviews`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;