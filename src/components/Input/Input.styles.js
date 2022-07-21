import styled from "styled-components";

export const Input = styled.input`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  border-radius: 8px;

  ::placeholder {
    font-size: 14px;
    background-color: ${props => props.theme.colors.placeholder};
  }
`;