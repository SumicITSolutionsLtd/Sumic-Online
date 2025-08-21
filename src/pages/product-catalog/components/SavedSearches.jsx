import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SavedSearches = ({ currentFilters, searchQuery }) => {
  const [savedSearches, setSavedSearches] = useState([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [searchName, setSearchName] = useState('');

  // Load saved searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('greentrade-saved-searches');
    if (saved) {
      setSavedSearches(JSON.parse(saved));
    }
  }, []);

  // Save searches to localStorage
  const saveToStorage = (searches) => {
    localStorage.setItem('greentrade-saved-searches', JSON.stringify(searches));
    setSavedSearches(searches);
  };

  const handleSaveSearch = () => {
    if (!searchName?.trim()) return;

    const newSearch = {
      id: Date.now()?.toString(),
      name: searchName?.trim(),
      query: searchQuery,
      filters: currentFilters,
      createdAt: new Date()?.toISOString(),
      resultCount: 0 // This would be populated with actual results
    };

    const updatedSearches = [newSearch, ...savedSearches?.slice(0, 9)]; // Keep max 10
    saveToStorage(updatedSearches);
    setSearchName('');
    setShowSaveModal(false);
  };

  const handleDeleteSearch = (searchId) => {
    const updatedSearches = savedSearches?.filter(search => search?.id !== searchId);
    saveToStorage(updatedSearches);
  };

  const handleLoadSearch = (search) => {
    // This would trigger the parent component to load the saved filters
    console.log('Loading saved search:', search);
    // In a real app, you'd call a callback prop here
  };

  const hasActiveFilters = () => {
    return currentFilters?.categories?.length > 0 ||
           currentFilters?.locations?.length > 0 ||
           currentFilters?.certifications?.length > 0 ||
           currentFilters?.priceRange?.[0] > 0 ||
           currentFilters?.priceRange?.[1] < 10000 ||
           currentFilters?.moqRange?.[0] > 1 ||
           currentFilters?.moqRange?.[1] < 1000 ||
           searchQuery?.trim()?.length > 0;
  };

  if (savedSearches?.length === 0 && !hasActiveFilters()) {
    return null;
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Saved Searches</h3>
        {hasActiveFilters() && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSaveModal(true)}
            iconName="Bookmark"
            iconPosition="left"
          >
            Save Current Search
          </Button>
        )}
      </div>
      {savedSearches?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {savedSearches?.map((search) => (
            <div
              key={search?.id}
              className="border border-border rounded-lg p-3 hover:bg-muted/50 transition-smooth"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-foreground text-sm truncate">
                  {search?.name}
                </h4>
                <button
                  onClick={() => handleDeleteSearch(search?.id)}
                  className="text-muted-foreground hover:text-destructive transition-smooth"
                >
                  <Icon name="Trash2" size={14} />
                </button>
              </div>
              
              {search?.query && (
                <p className="text-xs text-muted-foreground mb-2 truncate">
                  Query: "{search?.query}"
                </p>
              )}
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {new Date(search.createdAt)?.toLocaleDateString()}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLoadSearch(search)}
                  className="text-xs"
                >
                  Load
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {savedSearches?.length === 0 && hasActiveFilters() && (
        <p className="text-sm text-muted-foreground text-center py-4">
          Save your current search to quickly access it later
        </p>
      )}
      {/* Save Search Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Save Search
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Search Name
                </label>
                <input
                  type="text"
                  value={searchName}
                  onChange={(e) => setSearchName(e?.target?.value)}
                  placeholder="Enter a name for this search..."
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  autoFocus
                />
              </div>
              
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowSaveModal(false);
                    setSearchName('');
                  }}
                  fullWidth
                >
                  Cancel
                </Button>
                <Button
                  variant="default"
                  onClick={handleSaveSearch}
                  disabled={!searchName?.trim()}
                  fullWidth
                >
                  Save Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedSearches;