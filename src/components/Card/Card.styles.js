import styled from "styled-components";

export const Description = styled.span``;

export const Title = styled.h2``;

export const Img = styled.img``;

export const DescriptionWrapper = styled.div`
  width: 100%;

  ${Description} {
    color: ${props => props.theme.colors.black};
    font-size: 1.1rem;
    padding: 16px 8px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;

  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.info};
  background-color: ${props => props.theme.colors.white};
  width: 250px ;
  height: 350px;

  ${Img} {
    width: 100%;
    height: 50%;
  }

  ${Title} {
    color: ${props => props.theme.colors.info};
  }
`;