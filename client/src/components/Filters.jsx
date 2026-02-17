
const Filters = ({visibilitySize, otherClasses=""}) => {

    const PopularFilters = [
        { filter: "Single Bed", name: "singleBed" },
        { filter: "Double Bed", name: "doubleBed" },
        { filter: "Luxury Room", name: "luxuryRoom" },
        { filter: "Family Suite", name: "familySuite" },
    ]

    const priceRange = [
        { range: "$ 0 to 500", name: "range1" },
        { range: "$ 500 to 1000", name: "range2" },
        { range: "$ 1000 to 2000", name: "range3" },
        { range: "$ 2000 to 3000", name: "range4" },
    ]

    const sortBy = [
        { by: "Price Low to High", name: "lowToHigh" },
        { by: "Pirce High To Low", name: "highToLow" },
        { by: "Newest First", name: "newestFirst" },
    ]

  return (
    <div className={` ${visibilitySize === "smallScreen" ? "md:hidden flex mt-2" : "hidden md:flex"} lg:w-2/6 items-start justify-end ${otherClasses}`}>
      <div className={`border border-gray-300 *:p-4 ${visibilitySize === "smallScreen" ? 'w-full' : 'w-50 lg:w-60 xl:w-70'}`}>
        <div className="hidden border-b border-gray-300 md:flex justify-between items-center">
          <span>FILTERS</span>
          <button className="text-gray-500 text-xs font-medium">CLEAR</button>
        </div>
        <div className={`space-y-5 ${visibilitySize === "smallScreen" && "flex justify-between flex-wrap gap-x-6"} `}>
          <div className="space-y-1">
            <h4 className="mb-2">Popular Filters</h4>
            {PopularFilters.map((el, index) => (
              <div key={index} className="text-gray-600/90 flex items-center gap-4 font-mono text-sm md:text-md lg:text-base">
                <input type="checkbox" name={el.name} id={el.name} />
                <label htmlFor={el.name}>{el.filter}</label>
              </div>
            ))}
          </div>

          <div className="space-y-1">
            <h4 className="mb-2">Price Range</h4>
            {priceRange.map((el, index) => (
              <div key={index} className="text-gray-600/90 flex items-center gap-4 font-mono text-sm md:text-md lg:text-base">
                <input type="checkbox" name={el.name} id={el.name} />
                <label htmlFor={el.name}>{el.range}</label>
              </div>
            ))}
          </div>

          <div className="space-y-1">
            <h4 className="mb-2">Price Range</h4>
            {sortBy.map((el, index) => (
              <div key={index} className="text-gray-600/90 flex items-center gap-4 font-mono text-sm md:text-md lg:text-base">
                <input type="checkbox" name={el.name} id={el.name} />
                <label htmlFor={el.name}>{el.by}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
