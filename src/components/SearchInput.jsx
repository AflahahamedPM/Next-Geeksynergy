import React, {useState} from 'react'

const SearchInput = ({inputValue, setInputValue, handleSearch}) => {
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    handleSearch();
  };


  return (
    <form onSubmit={onSubmitHandler}>
    <input type="text" name="search" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="search product" className="px-4 py-2 border border-gray-200 outline-none rounded-xl" autoComplete="off"/>
    </form>
  )
}

export default SearchInput