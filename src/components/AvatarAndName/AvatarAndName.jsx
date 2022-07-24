import { useMemo } from 'react';
import * as S from './AvatarAndName.styles';
import React from 'react';


export const AvatarAndName   = ({ name, profileImageUrl, className, onlyAvatar = false }) => {

  const memoizedInfo = useMemo(() => {
    const splitedName = name.split(' ');
    const firstName = splitedName[0];
    const lastName = splitedName[splitedName.length -1];

    return {
      firstName,
      lastName,
    }
  }, [name, profileImageUrl]);


  const initials = `${memoizedInfo.firstName[0]}${memoizedInfo.lastName[0]}`;

  return (
    <S.Wrapper className={className}>
      {profileImageUrl ? (
        <S.ProfileImage src={profileImageUrl} />
      ) : (
        <S.DefaultAvatarImage>{initials}</S.DefaultAvatarImage>
      )}
      {!onlyAvatar && <S.ProfileName>{`${memoizedInfo.firstName} ${memoizedInfo.lastName}`}</S.ProfileName>}
    </S.Wrapper>
  );
};
