import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "src/components/Product";
import Axios from "src/utils/Axios";
import {
  PageWrapper,
  ProductsWrapper,
  MainContentWrapper,
  LoadingWrapper,
} from "./homepage.styled";
import parseProduct from "src/utils/parseProduct";
import Results from "src/components/Results";
import useFilters from "src/hooks/useFilters";
import { ConfirmationModal } from "src/components/Modal";
import useModal from "src/hooks/useModal";
import SideBar from "./Sidebar";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      Axios.get("/products")
        .then(({ data: products }) => setData(products))
        .finally(() => {
          setIsLoading(false);
        });
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
      <SideBar
        getSelectFieldProps={getSelectFieldProps}
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleClear={handleClear}
      />
      <MainContentWrapper>
        <Results results={filteredData?.length} />
        {isLoading && (
          <LoadingWrapper>
            <b>Loading...</b>
          </LoadingWrapper>
        )}
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
