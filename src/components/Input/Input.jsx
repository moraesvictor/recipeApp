import * as S from './Input.styles';
import React from "react";

export const Input = ({placeholder, type = 'text', className, onChange}) => {
    return (
        <S.Input onChange={onChange} className={className} type={type} placeholder={placeholder} />
    );
}