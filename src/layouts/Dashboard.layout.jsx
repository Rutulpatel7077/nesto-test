import PropTypes from "prop-types";
import { CommonWrapper } from "./styled-components/common.styled";
import { DashboardWrapper } from "./styled-components/dashboard.styled";
import { Outlet } from "react-router";

const DashboardLayout = ({ children }) => {
  return (
    <CommonWrapper>
      <DashboardWrapper>{children || <Outlet />}</DashboardWrapper>
    </CommonWrapper>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default DashboardLayout;
