import styled, { css }from "styled-components";
import { Button as _Button} from "../../components/Button";
import { Input as _Input } from "../../components/Input";

export const Title = styled.h2`
  color: ${props => props.theme.colors.info};`;

export const Button = styled(_Button)``;

export const Label = styled.label`
  color: ${props => props.theme.colors.info};
  font-size: 1.2rem;
`;

export const Input = styled(_Input)`
  width: 100%;
  margin-bottom: 4px;
  height: 32px;
  margin-top: 4px ;

  ${({ lastInput }) => lastInput && css`margin-bottom: 16px;`};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: 1px solid ${props => props.theme.colors.primary};
  width: 50%;
  height: 50%;
  border: 1px solid ${props => props.theme.colors.black};
  margin-top: 10%;
  padding: 100px 4px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.white};
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Input} {
    margin-left: 4px;
  }

  ${Button} {
    margin-right: 4px;
  }

  ${({toTheEnd}) => toTheEnd && css`justify-content: end;`}
`;