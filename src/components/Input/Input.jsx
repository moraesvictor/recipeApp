import React from 'react';

import * as S from './Input.styles';

export const Input = ({ placeholder, type = 'text', className, onChange }) => {
  return (
    <S.Input
      onChange={onChange}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};
