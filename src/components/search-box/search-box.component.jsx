import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, onSetSearchChange }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={onSetSearchChange}
    />
  );
};
