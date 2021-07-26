
/**
 * String value with underscore
 * @param {*} string input
 * @returns formatted string
 */
const formatString = (string = '') => string?.replace('_', ' ')

/**
 * Transform the product object
 *
 * @param {object} product product object
 * @returns {object} transformed product object
 */
const parseProduct = (product = {}) => {
  return {
    ...product,
    "term": formatString(product?.term),
    "restrictionsOption": formatString(product?.restrictionsOption),
    "lenderType": formatString(product?.lenderType),
    "restrictions": formatString(product?.restrictions),
    "fixedPenaltySpread": formatString(product?.fixedPenaltySpread),
    "helocOption": formatString(product?.helocOption),
    "rateHold": formatString(product?.rateHold),
  }
}

export default parseProduct
