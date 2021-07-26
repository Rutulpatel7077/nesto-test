import PropTypes from "prop-types";
import { CommonWrapper } from "./styled-components/common.styled";

const MainLayout = ({ children }) => {
  return <CommonWrapper>{children}</CommonWrapper>;
};

MainLayout.propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MainLayout;
