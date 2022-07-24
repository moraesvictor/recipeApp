import styled from "styled-components";
import { Card as _Card } from "../../components/Card";

export const Card = styled(_Card)``;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${Card} {
    margin-right: 16px;
  };
`;

export const Wrapper = styled.div`
  ${CardWrapper} {
    Margin-top: 16px;
  }
`;