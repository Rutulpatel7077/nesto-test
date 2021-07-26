import styled from "@emotion/styled";


const DetailsPageWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 width: 100%;
 margin-top: 4rem;
`

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px 0;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const FormWrapper = styled.form`
 display: flex;
 flex-direction: column;
`

export { DetailsPageWrapper, Input, FormWrapper }
