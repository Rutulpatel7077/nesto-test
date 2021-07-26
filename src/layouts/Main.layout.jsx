import PropTypes from "prop-types";
import { Outlet } from "react-router";
import { CommonWrapper } from "./styled-components/common.styled";
import { MainLayoutWrapper } from "./styled-components/main.styled";

const MainLayout = ({ children }) => {
  return (
    <CommonWrapper>
      <MainLayoutWrapper>{children || <Outlet />}</MainLayoutWrapper>
    </CommonWrapper>
  );
};

MainLayout.propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MainLayout;
