import styled, { css } from "styled-components";

const getButtonBackGroundColor = ({kind}) => {
    if(kind === 'primary') return css`${props => props.theme.colors.primary}`;
    if(kind === 'secundary') return css`${props => props.theme.colors.secondary}`;
    if(kind === 'tertiary') return css`${props => props.theme.colors.tertiary}`;
    if(kind === 'warning') return css`${props => props.theme.colors.warning}`;
    if(kind === 'tertiary-variant') return css`${props => props.theme.colors.white}`;

    return css`${props => props.theme.colors.primary}`;
}

const getButtonLabelColor = ({kind}) => {
    if(kind === 'primary') return css`${props => props.theme.colors.white}`;
    if(kind === 'secundary') return css`${props => props.theme.colors.white}`;
    if(kind === 'tertiary') return css`${props => props.theme.colors.white}`;
    if(kind === 'warning') return css`${props => props.theme.colors.black}`;
    if(kind === 'tertiary-variant') return css`${props => props.theme.colors.black}`;

    return css`${props => props.theme.colors.white}`;
}

const getHoverBackgroundColor = ({kind}) => {
    if(kind === 'primary') return css`${props => props.theme.colors.secondary}`;
    if(kind === 'secundary') return css`${props => props.theme.colors.tertiary}`;
    if(kind === 'tertiary') return css`${props => props.theme.colors.secondary}`;
    if(kind === 'warning') return css`${props => props.theme.colors.info}`;
    if(kind === 'tertiary-variant') return css`${props => props.theme.colors.gray}`;

    return css`${props => props.theme.colors.primary}`;
}

const getActiveBackgroundColor = ({kind}) => {
    if(kind === 'primary') return css`${props => props.theme.colors.tertiary}`;
    if(kind === 'secundary') return css`${props => props.theme.colors.secondary}`;
    if(kind === 'tertiary') return css`${props => props.theme.colors.primary}`;
    if(kind === 'warning') return css`${props => props.theme.colors.info}`;
    if(kind === 'tertiary-variant') return css`${props => props.theme.colors.tertiary}`;

    return css`${props => props.theme.colors.tertiary}`;
}


export const Button = styled.button`
  background-color: ${getButtonBackGroundColor};
  color: ${getButtonLabelColor};
  border-radius: 8px;
  height: 32px;

    &:hover {
     background-color: ${getHoverBackgroundColor};
    }

    &:active {
      background-color: ${getActiveBackgroundColor};
    }
`

export const ButtonLabel = styled.span``;

