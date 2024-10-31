'use client'
import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const SearchInput = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const searched = formData.get('search')
        console.log(searched);
    }
  return (
    <form className='relative flex mr-20 gap-4 justify-between items-center'onSubmit={(e)=>{handleSubmit(e)}}>
        <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} className='absolute bottom-4 right-3  text-myOrange h-5'/></button>
        <input type="text" name="search" id="" className='outline-none rounded-md border-none bg-gray-200  px-6 py-3'autoComplete='off' placeholder='what are you looking for' />
    </form>
  )
}

export default SearchInput