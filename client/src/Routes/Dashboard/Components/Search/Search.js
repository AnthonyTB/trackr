import React from 'react';
import './Search.css';

function Search() {
  const processSearch = e => {
    e.preventDefault();
    const { term } = e.target;
    console.log(term.value);
  };

  return (
    <div className='Search'>
      <form onSubmit={processSearch}>
        <input type='text' required placeholder='Search by username' />
        <button name='term' type='submit'>
          search
        </button>
      </form>
    </div>
  );
}

export default Search;
