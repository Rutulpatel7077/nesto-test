import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Modal, { BaseModalBackground } from "styled-react-modal";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";
import Box from "./styles/Box";
import { Typography } from "./Typography";

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

const StyledModal = Modal.styled`
  width: 30rem;
  border-radius: 0.5rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

const ModalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
`;

/**
 * ConfirmationModal component
 *
 * @param {object} modalProps modal props
 * @param {function} onYesClick handler function
 *
 * @returns {React.Component} ConfirmationModal component
 */
const ConfirmationModal = ({ modalProps, onYesClick }) => {
  const { t } = useTranslation();

  return (
    <StyledModal {...modalProps}>
      <ModalContentWrapper>
        <Typography fontSize={24}>{t("congratulations")}</Typography>
        <Typography fontSize={20}>{t("modal1")}</Typography>
        <Typography fontSize={20}>{t("modal2")}</Typography>
        <ButtonWrapper>
          <Box mr={1}>
            <Button onClick={onYesClick}> {t("yesButton")}</Button>
          </Box>
          <Button onClick={modalProps.toggleModal}>{t("cancel")}</Button>
        </ButtonWrapper>
      </ModalContentWrapper>
    </StyledModal>
  );
};

ConfirmationModal.propTypes = {
  modalProps: PropTypes.shape({
    toggleModal: PropTypes.func,
  }),
  onYesClick: PropTypes.func,
};

export { FadingBackground, ConfirmationModal };
