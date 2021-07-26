import React from "react";
import styled from "@emotion/styled";
import Box from "./styles/Box";
import { Typography } from "./Typography";
import { useTranslation } from "react-i18next";
import { MdInfoOutline } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import Sticker from "./Sticker";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #707680;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  max-width: 360px;
  margin: 10px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  @media (max-width: 576px) {
    min-width: 400px;
  }
`;

const LowerCaseWrapper = styled.span`
  text-transform: lowercase;
`;

const CenterWrapper = styled.span`
  display: flex;
  align-items: center;
`;

/**
 * Product Component
 *
 * @param {object} props component props
 * @returns {React.Component} Product component
 */
const Product = ({
  insurable,
  insurance,
  type,
  term,
  prepaymentOption,
  lenderName,
  lenderType,
  restrictions,
  restrictionsOption,
  rate,
  ratePrimeVariance,
  rateHold,
  bestRate,
  name,
  ...rest
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper {...rest}>
        <ReactTooltip />
        <Box pb={1 / 3}>
          {name && (
            <Typography fontSize={24}>
              {name} By {lenderName}
            </Typography>
          )}
        </Box>
        {insurance && (
          <Box pb={1 / 3}>
            <Typography fontSize={16}>
              <LowerCaseWrapper>
                {insurance} {t("insurance")}
              </LowerCaseWrapper>
            </Typography>
          </Box>
        )}
        <Box pb={1 / 2}>
          {rate && (
            <Typography>
              <CenterWrapper>
                {t("rate")}: {rate}% &nbsp;{" "}
                <span data-tip={`best rate - ${bestRate}%`}>
                  <MdInfoOutline />
                </span>
              </CenterWrapper>
            </Typography>
          )}
          {rateHold && (
            <Typography>
              {t("rateHold")}: {rateHold}
            </Typography>
          )}
          {ratePrimeVariance !== 0 && (
            <Typography>Rate Prime Variance: {ratePrimeVariance}%</Typography>
          )}
        </Box>
        <div>
          <Sticker inverse={type === "VARIABLE"}>{type}</Sticker>
          <Sticker>{lenderType}</Sticker>
          {term && <Sticker>{term}</Sticker>}
        </div>
        <div>
          {insurable && <Sticker>insurable</Sticker>}
          {prepaymentOption && <Sticker>{prepaymentOption} PrePayment</Sticker>}
          <Sticker data-tip={restrictions}>{restrictionsOption}</Sticker>
        </div>
      </Wrapper>
    </>
  );
};

export default Product;
