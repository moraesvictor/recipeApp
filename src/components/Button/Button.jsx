import React from 'react';

import * as S from './Button.styles';

/**
 * Component that renders a button with a text.
 * The button kind can be set to "primary", "secondary", "tertiary" or "tertiary-variant".
 */
export const Button = ({
  label,
  kind,
  className,
  onClick,
  disabled = false,
  messageError
}) => {
  return (
    <S.Button
      disabled={disabled}
      onClick={onClick}
      className={className}
      kind={kind}
      error={messageError}
    >
      <S.ButtonLabel>{label}</S.ButtonLabel>
    </S.Button>
  );
};
