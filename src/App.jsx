import { useRoutes } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import routes from "src/routes";
import ReactTooltip from "react-tooltip";
import { FadingBackground } from "./components/Modal";
import { useEffect } from "react";
import { i18nHelpers } from "./utils/i18n";

const App = () => {
  const content = useRoutes(routes);

  useEffect(() => {
    i18nHelpers.initialize();
  }, []);

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      {content}
      <ReactTooltip />
    </ModalProvider>
  );
};

export default App;
