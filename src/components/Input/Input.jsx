import * as S from './Input.styles';
import React from "react";

export const Input = ({placeholder, type = 'text', className}) => {
    return (
        <S.Input className={className} type={type} placeholder={placeholder} />
    );
}