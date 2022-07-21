import React from "react";
import * as S from './Card.styles';

/**
 * Component that renders a card with a header and a body.
 */
export const Card = ({ title, srcImg, description, className}) => {
    return (
        <S.Wrapper className={className}>
            <S.Title>{title}</S.Title>
            <S.Img src={srcImg} />
            <S.Description>{description}</S.Description>
        </S.Wrapper>
    )
}