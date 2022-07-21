import styled from 'styled-components';

export const DefaultAvatarImage = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  object-fit: cover;
`;

export const ProfileName = styled.span``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${ProfileImage} {
    margin-right: 4px;
  }

  ${DefaultAvatarImage} {
    margin-right: 4px;
  }

  ${ProfileName} {
    font-size: 14px;
    font-weight: 500;
  }
`;