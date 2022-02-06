import React from 'react';
import { HeaderSeachProps } from './types';
import './HeaderSearch.css';

const SearchBar = ({ onChange }: HeaderSeachProps) => (
    <div className="search-bar">
        <label className="search-bar__label" htmlFor="filter">
            Search by body type:{' '}
        </label>
        <input
            id="filter"
            type="search"
            className="search-bar__input"
            onChange={onChange}
            placeholder="Type here to search"
        />
    </div>
);

export default SearchBar;
