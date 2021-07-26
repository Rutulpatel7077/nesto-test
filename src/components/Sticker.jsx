import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: inline-block;
  letter-spacing: normal;
  padding: 2px 5px;
  background-color: ${({ inverse }) =>
    inverse ? "rgb(0, 0, 0)" : "rgb(219, 219, 219)"};
  color: ${({ inverse }) => (inverse ? "rgb(219, 219, 219)" : "rgb(0, 0, 0)")};
  text-transform: uppercase;
  margin-right: 12px;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 700;
}
`;

/**
 * Sticker component
 *
 * @param {object} props component props
 * @param {array} props.children child component / element
 * @param {bool} inverse color preferences
 *
 * @returns {React.Component} Sticker component
 */
const Sticker = ({ children, inverse, ...rest }) => (
  <Wrapper as="span" inverse={inverse} {...rest}>
    {children}
  </Wrapper>
);

Sticker.propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  inverse: PropTypes.bool,
};

export default Sticker;
