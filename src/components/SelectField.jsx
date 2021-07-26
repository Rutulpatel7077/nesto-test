import ReactSelect from "react-select";
import styled from "@emotion/styled";
import Box from "./styles/Box";

const Label = styled.div`
  margin-bottom: 6px;
`;

/**
 * SelectField Component
 *
 * @param {object} props component props
 * @param {string} label title for switch
 * @returns {React.Component} SelectField component
 */
const SelectField = ({ label, ...rest }) => (
  <Box>
    {label && <Label>{label}</Label>}
    <ReactSelect isClearable {...rest} />
  </Box>
);

export default SelectField;
