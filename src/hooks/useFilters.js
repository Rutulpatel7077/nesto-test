import { useCallback, useState } from 'react'
import filterOptions from 'src/constants/filterOptions';
import { initialFilters, filterData } from 'src/utils/filterProducts';

/**
 * This hook will manage the filters and responsible for filtering data
 *
 * @param {Array} data input data
 * @returns {object} utils and filter state
 */
const useFilters = (data) => {
  const [filter, setFilter] = useState(initialFilters);
  const handleFilterChange = useCallback(
    ({ name, value }) => setFilter((prev) => ({ ...prev, [name]: value })),
    []
  );
  const handleClear = useCallback(() => setFilter(initialFilters), []);
  const getSelectFieldProps = useCallback(
    (name) => ({
      options: filterOptions?.[name](),
      value: filter?.[name],
      onChange: (selected) =>
        handleFilterChange({
          name,
          value: selected || '',
        }),
    }),
    [handleFilterChange, filter]
  );

  return {
    getSelectFieldProps,
    handleFilterChange,
    handleClear,
    filter,
    filteredData: filterData(filter, data)
  }
}

export default useFilters
