import styled from "@emotion/styled";

const Box = styled("div")`
  padding-top: ${(props) => `${props?.pt || 0}rem`};
  padding-bottom: ${(props) => `${props?.pb || 0}rem`};
  padding-right: ${(props) => `${props?.pr || 0}rem`};
  padding-left: ${(props) => `${props?.pl || 0}rem`};
  margin-top: ${(props) => `${props?.mt || 0}rem`};
  margin-bottom: ${(props) => `${props?.mb || 0}rem`};
  margin-right: ${(props) => `${props?.mr || 0}rem`};
  margin-left: ${(props) => `${props?.ml || 0}rem`};
`;
export default Box;
