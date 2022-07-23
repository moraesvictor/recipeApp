import styled from "styled-components";

export const Input = styled.input`
  background-color: ${props => props.theme.colors.gray};
  border-radius: 8px;
  width: 100%;

  ::placeholder {
    font-size: 14px;
  }
`;