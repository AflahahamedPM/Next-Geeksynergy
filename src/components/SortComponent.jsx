import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const SortComponent = ({handleSort, isOpenSortDropdown, setIsOpenSortDropdown}) => {
    
    const sortOptions = ["Low - High", "High - Low"]
  return (
    <div className="relative mr-28 flex gap-2 justify-center cursor-pointer">
        <h1>sort</h1>
        <FontAwesomeIcon icon={faSort}  className='mt-1' onClick={()=>{setIsOpenSortDropdown(true)}}/>
        {
            isOpenSortDropdown && (
                <div className="absolute z-10 top-6 left-10  w-28 h-20 rounded-lg border border-gray-200">
                    
                       { sortOptions.map((option, i)=>(
                            <h1 key={i} className="text-black py-2 pl-4 hover:bg-gray-200" onClick={(e)=>handleSort(e)}>{option}</h1>
                        ))
                    }
                </div>
            )
        }
    </div>  
)
}

export default SortComponent