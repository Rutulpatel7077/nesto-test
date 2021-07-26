import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const Wrapper = styled.p`
  margin: 10px;
`;

/**
 * Results component
 *
 * @param {string|number} results value of number of records
 * @returns {React.Component} Results component
 */
const Results = ({ results }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <b>{t("results")}: &nbsp;</b>
      <span>
        {results} {t("mortgagesFound")}
      </span>
    </Wrapper>
  );
};

Results.propTypes = {
  results: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Results;
