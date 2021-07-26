import styled from "@emotion/styled";

const PageWrapper = styled.div`
  padding: 1rem;
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const SideBarWrapper = styled.div`
  height: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;

  @media (min-width: 576px) {
    position: sticky;
    top: 10px;
    z-index: 10;
    min-width: 300px;
  }
`;

const MainContentWrapper = styled.div`
  @media (min-width: 576px) {
    padding-left: 18px;
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Belt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

export { PageWrapper, Belt, SideBarWrapper, ProductsWrapper, MainContentWrapper };
