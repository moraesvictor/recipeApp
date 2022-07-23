import * as S from './Button.styles';
import React from "react";

export const Button = ({ label, kind, className, onClick }) => {
    return (
        <S.Button onClick={onClick} className={className} kind={kind}>
            <S.ButtonLabel>{ label }</S.ButtonLabel>
        </S.Button>
    );
}