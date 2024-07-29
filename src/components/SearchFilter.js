import React from 'react';

const SearchFilter = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-filter">
      <input type="text" placeholder="Procure um herói..." onChange={handleInputChange} />
    </div>
  );
};

export default SearchFilter;
