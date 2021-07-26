import { useEffect, useState } from "react";
import { Button } from "src/components/Button";
import { useNavigate } from "react-router-dom";
import Product from "src/components/Product";
import SelectField from "src/components/SelectField";
import { useTranslation } from "react-i18next";
import Box from "src/components/styles/Box";
import Switch from "src/components/Switch";
import { Typography } from "src/components/Typography";
import Axios from "src/utils/Axios";
import filterOptions from "src/constants/filterOptions";
import {
  PageWrapper,
  ProductsWrapper,
  MainContentWrapper,
  SideBarWrapper,
} from "./styled-components/homepage.styled";
import parseProduct from "src/utils/parseProduct";
import Results from "src/components/Results";
import useFilters from "src/hooks/useFilters";
import { ConfirmationModal } from "src/components/Modal";
import useModal from "src/hooks/useModal";
import { i18nHelpers } from "src/utils/i18n";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    getSelectFieldProps,
    handleFilterChange,
    handleClear,
    filteredData,
    filter,
  } = useFilters(data);
  const modalProps = useModal();

  useEffect(() => {
    const fetchProducts = () => {
      Axios.get("/products").then(({ data: products }) => setData(products));
    };
    fetchProducts();
  }, []);

  const handleSelect = (product) => {
    setSelectedItem(product);
    modalProps.toggleModal();
  };

  const handleCreateApplication = () => {
    modalProps.closeModal();
    const body = {
      productId: selectedItem?.id,
    };
    Axios.post("/applications", body).then(({ data: application }) => {
      navigate(`/details/${application?.id}`);
    });
  };

  return (
    <PageWrapper>
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
      <MainContentWrapper>
        <Results results={filteredData?.length} />
        <ProductsWrapper>
          {filteredData.map((product) => (
            <Product
              onClick={handleSelect}
              key={product.id}
              {...parseProduct(product)}
            />
          ))}
        </ProductsWrapper>
      </MainContentWrapper>
      <ConfirmationModal
        modalProps={modalProps}
        onYesClick={handleCreateApplication}
      />
    </PageWrapper>
  );
};

export default HomePage;
