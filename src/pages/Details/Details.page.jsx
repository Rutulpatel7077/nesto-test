import { Button } from "src/components/Button";
import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "src/components/styles/Box";
import { useTranslation } from "react-i18next";
import { Typography } from "src/components/Typography";
import {
  DetailsPageWrapper,
  FormWrapper,
  Input,
} from "./detailspage.styled";
import Axios from "src/utils/Axios";
import { PageWrapper } from "../Home/homepage.styled";

const DetailsPage = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();

  const handleChange = (event) =>
    setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleApplicationDetailsSubmit = (e) => {
    e.preventDefault();
    const body = {
      applicants: [state],
    };
    Axios.put(`applications/${id}`, body)
      .then(() => {
        alert(t("successfullyUpdated"));
        navigate("/");
      })
      .catch(() => {
        alert(t("errorUpdating"));
      });
  };

  const submitDisabled = useMemo(() => {
    return (
      Object.values(state).some((item) => item === "") ||
      // phoneNumber validation
      !(state.phoneNumber.match(/\d/g).length === 10)
    );
  }, [state]);

  return (
    <PageWrapper>
      <DetailsPageWrapper>
        <Box>
          <Typography fontSize={26}>{t("detailsPage1")}</Typography>
          <Typography fontSize={18}>{t("detailsPage2")}</Typography>
          <Box mt={1}>
            <FormWrapper onSubmit={handleApplicationDetailsSubmit}>
              <Input
                onChange={handleChange}
                value={state?.firstName}
                name="firstName"
                required
                type="text"
                placeholder={t("firstName")}
              />
              <Input
                onChange={handleChange}
                value={state?.lastName}
                name="lastName"
                required
                type="text"
                placeholder={t("lastName")}
              />
              <Input
                onChange={handleChange}
                value={state?.email}
                required
                name="email"
                type="email"
                placeholder={t("email")}
              />
              <Input
                onChange={handleChange}
                value={state?.phoneNumber}
                required
                name="phoneNumber"
                type="tel"
                placeholder={t("phoneNumber")}
              />
              <Box mt={1}>
                <Button type="submit" disabled={submitDisabled}>
                  {t("submit")}
                </Button>
                <Box mt={1}>
                  <Button type="button" onClick={() => navigate("/")}>
                    {t("cancel")}
                  </Button>
                </Box>
              </Box>
            </FormWrapper>
          </Box>
        </Box>
      </DetailsPageWrapper>
    </PageWrapper>
  );
};

export default DetailsPage;
