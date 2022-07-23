import React from "react";
import * as S from './Card.styles';


/**
 * Component that renders a card with a header and a body.
 */
export const Card = ({ title, srcImg, description}) => {
    return (
        <S.Wrapper>
            <S.Title>{title}</S.Title>
            <S.Img src={srcImg} />
            <S.Description>{description}</S.Description>
        </S.Wrapper>
    )
}