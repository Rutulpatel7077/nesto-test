import PropTypes from "prop-types";
import styled from "@emotion/styled";
import React from "react";
import Box from "./styles/Box";

const Item = styled.div`
  width: 50%;
  padding: 0.7rem 1rem;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: box-shadow 0.3s;
  color: ${(props) => (props?.selected ? "#fff" : "#000")};
  background-color: ${(props) =>
    props?.selected ? props.theme.colors.primary : props.theme.background};
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const Label = styled.div`
  margin-bottom: 6px;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ItemWrapper = styled.div`
  display: flex;
`;

/**
 * Switch for two options
 *
 * @param {object} props component props
 * @param {Array} props.types array of options
 * @param {func} onChange onChange function
 * @param {string} label title for switch
 * @param {bool} selected selected value
 *
 * @returns {React.Component} Switch component
 */
const Switch = ({ types, onChange, label, selected }) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Box mt={0.2}>
        <ItemWrapper>
          {types.map((item, index) => (
            <Item
              key={item?.value}
              as="button"
              selected={selected === item?.value}
              onClick={() => {
                if (onChange) {
                  onChange(item);
                }
              }}
            >
              {item.label}
            </Item>
          ))}
        </ItemWrapper>
      </Box>
    </Wrapper>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

export default Switch;
