import React from 'react';
import { AvatarAndName } from '../AvatarAndName/AvatarAndName';
import * as S from './Header.styles';

const IMG = "https://www.thewrap.com/wp-content/uploads/2021/06/Soldier-Boy-Jensen-Ackles-936x527.jpg"

export const Header = ({ onChange, inputPlaceHolder, svg }) => {
  return (
    <S.Wrapper>
      {svg ? (
        <div>
          {svg}
          <S.Input onChange={onChange} placeholder={inputPlaceHolder} />
        </div>
      ) : (
        <S.Input onChange={onChange} placeholder={inputPlaceHolder} />
      )}
    <S.AvatarAndName name="Soldier boy" profileImageUrl={IMG} />
    </S.Wrapper>
  );
};
