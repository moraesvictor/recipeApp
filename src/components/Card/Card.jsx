import React from "react";
import * as S from './Card.styles';

/**
 * Component that renders a card with a header and a body.
 */
export const Card = ({ title, srcImg, description, className, onImageClick, onCardClick}) => {
    return (
        <S.Wrapper onClick={onCardClick} className={className}>
            <S.Title>{title}</S.Title>
            <S.Img onClick={onImageClick} src={srcImg} />
            <S.DescriptionWrapper>
                <S.Description>{description}</S.Description>
            </S.DescriptionWrapper>

        </S.Wrapper>
    )
}