import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const GlobalSearch = () => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('greentrade-search-history');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Debounced search suggestions
  useEffect(() => {
    if (query?.length > 2) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        // Mock suggestions - in real app, this would be an API call
        const mockSuggestions = [
          { type: 'product', text: `${query} products`, count: 45 },
          { type: 'supplier', text: `${query} suppliers`, count: 12 },
          { type: 'category', text: `${query} category`, count: 8 }
        ];
        setSuggestions(mockSuggestions);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setIsLoading(false);
    }
  }, [query]);

  // Handle click outside to close search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef?.current && !searchRef?.current?.contains(event?.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery = query) => {
    if (searchQuery?.trim()) {
      // Save to search history
      const newHistory = [searchQuery, ...searchHistory?.filter(item => item !== searchQuery)]?.slice(0, 5);
      setSearchHistory(newHistory);
      localStorage.setItem('greentrade-search-history', JSON.stringify(newHistory));
      
      // Navigate to product catalog with search
      navigate(`/product-catalog?search=${encodeURIComponent(searchQuery)}`);
      setIsExpanded(false);
      setQuery('');
    }
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter') {
      handleSearch();
    }
    if (e?.key === 'Escape') {
      setIsExpanded(false);
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('greentrade-search-history');
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Search Input */}
      <div className={`relative transition-all duration-300 ${
        isExpanded ? 'w-80' : 'w-64'
      } sm:w-80`}>
        <div className="relative">
          <Icon 
            name="Search" 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <input
            type="text"
            placeholder="Search products, suppliers..."
            value={query}
            onChange={(e) => setQuery(e?.target?.value)}
            onFocus={() => setIsExpanded(true)}
            onKeyDown={handleKeyPress}
            className="w-full pl-10 pr-10 py-2 bg-muted border border-border rounded-lg text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Icon name="X" size={16} />
            </button>
          )}
        </div>
      </div>
      {/* Search Dropdown */}
      {isExpanded && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-modal z-50 max-h-96 overflow-y-auto">
          {/* Loading State */}
          {isLoading && (
            <div className="p-4 text-center">
              <Icon name="Loader2" size={20} className="animate-spin mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground mt-2">Searching...</p>
            </div>
          )}

          {/* Search Suggestions */}
          {!isLoading && suggestions?.length > 0 && (
            <div className="p-2">
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide px-3 py-2">
                Suggestions
              </h4>
              {suggestions?.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(suggestion?.text)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-muted rounded-md transition-smooth"
                >
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={suggestion?.type === 'product' ? 'Package' : suggestion?.type === 'supplier' ? 'Building2' : 'Tag'} 
                      size={16} 
                      className="text-muted-foreground" 
                    />
                    <span>{suggestion?.text}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {suggestion?.count} results
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Search History */}
          {!isLoading && suggestions?.length === 0 && searchHistory?.length > 0 && (
            <div className="p-2">
              <div className="flex items-center justify-between px-3 py-2">
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Recent Searches
                </h4>
                <button
                  onClick={clearHistory}
                  className="text-xs text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Clear
                </button>
              </div>
              {searchHistory?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(item)}
                  className="w-full flex items-center space-x-3 px-3 py-2 text-sm hover:bg-muted rounded-md transition-smooth"
                >
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span>{item}</span>
                </button>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && suggestions?.length === 0 && searchHistory?.length === 0 && query?.length === 0 && (
            <div className="p-4 text-center">
              <Icon name="Search" size={24} className="mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                Start typing to search products and suppliers
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;