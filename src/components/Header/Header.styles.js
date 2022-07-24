import styled from "styled-components";

import { Input as _Input} from "../../components/Input";

import { AvatarAndName as _AvatarAndName } from "../../components/AvatarAndName";

export const Input = styled(_Input)`
    width: 200px;
`;

export const AvatarAndName = styled(_AvatarAndName)``;

export const Title = styled.h1`
  color: ${props => props.theme.colors.info};
`;

export const Wrapper = styled.header`
  width: 100vw; 
  height: 40px;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  align-items: center;

  ${Input} {
    margin-left: 16px;
  }

  ${AvatarAndName} {
    margin-right: 16px;
  }
`;