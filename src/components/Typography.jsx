import styled from "@emotion/styled";

const Typography = styled("p")`
  font-size: ${(props) => `${props?.fontSize || 14}px`};
  color: ${(props) => props?.color || "rgb(118, 118, 118)"};
`;

export { Typography };
