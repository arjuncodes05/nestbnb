import { useAppContext } from "../context/AppContext.jsx";

const Filters = ({ visibilitySize,  otherClasses="", selectedFilters, setSelectedFilters, selectedSort, setSelectedSort, roomType, sortOptions, priceRange, setSearchParams}) => {

    const {currency} = useAppContext();

      // handle changes for filters and sorting
      const handleFilterChange = (checked, value, type) => {
        setSelectedFilters((prev) => {
          const updatedFilters = {...prev};
          if(checked){            
            updatedFilters[type].push(value);
          }else{
            updatedFilters[type] = updatedFilters[type].filter(item => item !== value);
          }
          return updatedFilters;
        })
      }

      const handleSortChange = (sortOption) => {
        setSelectedSort(sortOption)
      }

      // clear all filters
      const clearFilters = () => {
          setSelectedFilters({
            roomType: [],
            priceRange: []
          })
      
          setSelectedSort("");
          setSearchParams({})
      }
      

  return (
    <div className={` ${visibilitySize === "smallScreen" ? "md:hidden flex mt-2" : "hidden md:flex"} lg:w-2/6 items-start justify-end ${otherClasses}`}>
      <div className={`border border-gray-300 *:p-4 ${visibilitySize === "smallScreen" ? 'w-full' : 'w-50 lg:w-60 xl:w-70'}`}>
        <div className="hidden border-b border-gray-300 md:flex justify-between items-center">
          <span>FILTERS</span>
          <button onClick={clearFilters} className="text-gray-500 text-xs font-medium">CLEAR</button>
        </div>
        <div className={`space-y-5 ${visibilitySize === "smallScreen" && "flex justify-between flex-wrap gap-x-6"} `}>
          <div className="space-y-1">
            <h4 className="mb-2">Popular Filters</h4>
            {roomType.map((el, index) => (
              <div key={index} className="text-gray-600/90 flex items-center gap-4 font-mono text-sm md:text-md lg:text-base">
                <input 
                  checked={selectedFilters.roomType.includes(el.filter)}
                  onChange={(e) => handleFilterChange(e.target.checked, el.filter, 'roomType')}
                  type="checkbox" name={el.name} id={el.name} 
                />
                <label htmlFor={el.name}>{el.filter}</label>
              </div>
            ))}
          </div>

          <div className="space-y-1">
            <h4 className="mb-2">Price Range</h4>
            {priceRange.map((range, index) => (
              <div key={index} className="text-gray-600/90 flex items-center gap-4 font-mono text-sm md:text-md lg:text-base">
                <input
                  checked={selectedFilters.priceRange.includes(range.range)}
                  onChange={(e) => handleFilterChange(e.target.checked, range.range, 'priceRange')}
                  type="checkbox" name={range.name} id={range.name} />
                <label htmlFor={range.name}>{currency}{range.range}</label>
              </div>
            ))}
          </div>

          <div className="space-y-1">
            <h4 className="mb-2">Sort By</h4>
            {sortOptions.map((option, index) => (
              <div key={index} className="text-gray-600/90 flex items-center gap-4 font-mono text-sm md:text-md lg:text-base">
                <input 
                  checked={selectedSort?.name === option.name}
                  onChange={() => handleSortChange(option)}  
                  type="radio" name="sort" id={option.name} />
                <label htmlFor={option.name}>{option.by}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
