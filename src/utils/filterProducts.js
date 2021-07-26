const initialFilters = {
  restrictionsOption: '',
  prepaymentOption: '',
  insurance: '',
  type: '',
  term: ''
}

/**
 * Get the value of the given object pair.
 *
 * @param {object} input product object field
 * @returns {string|number|undefined} value
 */
const getFilterValue = (input) => input?.value

/**
 * Filter data based on provided side bar filter values
 *
 * @param {object} filter selected filter values
 * @param {Array} data data
 * @returns {Array} filtered data
 */
const filterData = (filter, data) => {
  const hasNoFilters = Object.values(filter).every(item => item === '')
  if (hasNoFilters) {
    return data
  }

  return data.reduce((acc, current) => {
    const match = Object.keys(filter)
      .filter(name => !!getFilterValue(filter?.[name]))
      .map(name => current?.[name] === getFilterValue(filter?.[name]))
      .every(item => item)

    if (match) {
      acc.push(current)
    }
    return acc
  }, [])
}

export {
  initialFilters,
  filterData
}