import { Button } from "src/components/Button";
import SelectField from "src/components/SelectField";
import { useTranslation } from "react-i18next";
import Box from "src/components/styles/Box";
import Switch from "src/components/Switch";
import { Typography } from "src/components/Typography";
import filterOptions from "src/constants/filterOptions";
import { SideBarWrapper } from "./homepage.styled";
import { i18nHelpers } from "src/utils/i18n";

const SideBar = ({
  getSelectFieldProps,
  filter,
  handleFilterChange,
  handleClear,
}) => {
  const { t } = useTranslation();

  return (
    <SideBarWrapper>
      <Typography fontSize={30}>{t("nestoMortgages")}</Typography>
      <Box mt={1}>
        <SelectField
          label={t("insurance")}
          {...getSelectFieldProps("insurance")}
        />
      </Box>
      <Box mt={1}>
        <SelectField
          label={t("prePayment")}
          {...getSelectFieldProps("prepaymentOption")}
        />
      </Box>
      <Box mt={1}>
        <SelectField
          label={t("restrictions")}
          {...getSelectFieldProps("restrictionsOption")}
        />
      </Box>
      <Box mt={1}>
        <SelectField label={t("terms")} {...getSelectFieldProps("term")} />
      </Box>
      <Box mt={1}>
        <Switch
          onChange={({ value }) =>
            handleFilterChange({ name: "type", value: { value } })
          }
          label={t("type")}
          types={filterOptions.type()}
          selected={filter?.type?.value}
        />
      </Box>
      <Box mt={1}>
        <Button onClick={handleClear}>{t("clear")}</Button>
      </Box>
      <Box pt={1} pb={1}>
        <hr />
      </Box>
      <Box mt={1}>
        <SelectField
          label={t("changeLanguage")}
          isClearable={false}
          options={[
            { label: "English", value: "en" },
            { label: "French", value: "fr" },
          ]}
          value={i18nHelpers.getLanguage()}
          onChange={(selected) => i18nHelpers.setLanguage(selected)}
        />
      </Box>
    </SideBarWrapper>
  );
};

export default SideBar;
