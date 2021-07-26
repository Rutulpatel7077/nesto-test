import i18n from "i18next";

const restrictionsOption = () => [
  {
    label: i18n.t('options.noRestrictions'),
    value: 'NO_RESTRICTIONS'
  },
  {
    label: i18n.t('options.someRestrictions'),
    value: 'SOME_RESTRICTIONS'
  },
  {
    label: i18n.t('options.moreRestrictions'),
    value: 'MORE_RESTRICTIONS'
  },
]

const prepaymentOption = () => [
  {
    label: i18n.t('options.standard'),
    value: 'STANDARD'
  },
  {
    label: i18n.t('options.HELOC'),
    value: 'HELOC'
  }
]

const insurance = () => [
  {
    label: i18n.t('options.insured'),
    value: 'INSURED'
  },
  {
    label: i18n.t('options.conventional'),
    value: 'CONVENTIONAL'
  }
]

const term = () => [
  {
    label: i18n.t('options.year1'),
    value: '1_YEAR'
  },
  {
    label: i18n.t('options.year2'),
    value: '2_YEAR'
  },
  {
    label: i18n.t('options.year3'),
    value: '3_YEAR'
  },
  {
    label: i18n.t('options.year4'),
    value: '4_YEAR'
  },
  {
    label: i18n.t('options.year5'),
    value: '5_YEAR'
  },
  {
    label: i18n.t('options.year6'),
    value: '6_YEAR'
  },
  {
    label: i18n.t('options.year7'),
    value: '7_YEAR'
  },
  {
    label: i18n.t('options.year10'),
    value: '10_YEAR'
  }
]

const type = () => [
  {
    label: i18n.t('options.variable'),
    value: 'VARIABLE'
  },
  {
    label: i18n.t('options.fixed'),
    value: 'FIXED'
  }
]

const filterOptions = {
  term,
  insurance,
  prepaymentOption,
  restrictionsOption,
  type
}

export default filterOptions
