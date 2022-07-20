import React from "react";
import * as S from './Header.styles';
import {} from '../../images';
import { Input } from "../Input/";

export const Header = ({onChange, inputPlaceHolder}) => {
    return (
        <S.Wrapper>
          <div>
            <Input onChange={onChange} placeholder={inputPlaceHolder}/>
          </div>
        </S.Wrapper>
    )
};