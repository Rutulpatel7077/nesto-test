import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "src/components/styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "src/constants/theme";

const Root = ({ children }) => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
