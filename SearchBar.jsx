import { Search, SearchIcon } from 'lucide-react';
import {options} from './items';
const SearchBar = ({activeSearch, onSearchChange}) => {
    const SearchOptions = ["Practice", "Assignment"];

    return (
        <div className="flex items-center gap-2 mb-5">
            <Search size={18} className='text-gray-400'/>
            <input 
            type="text"
            placeholder='Search...'
            className='bg-transparent outline-none flex text-sm'
            value={activeSearch}
            onChange={(e) => onSearchChange(e.target.value)}
            />




<div className='flex gap-4 ml-4'>
<span className="text-sm text-gray-600 font-medium">Show:</span>
    <button>
        <span><SearchIcon/></span>
    </button>



</div>

        </div>
    )
}


export default SearchBar