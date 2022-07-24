import React, { useEffect } from 'react';
import * as S from './Home.styles';
import {ICONS} from '../../images/index';

import { Header } from '../../components/Header';

const img = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

// const mockedCardInfo = [
//   {title: "receita", srcImg: img, description: "descrição super supimpa da receita"},
//   {title: "receita", srcImg: img, description: "descrição super supimpa da receita"},
//   {title: "receita", srcImg: img, description: "descrição super supimpa da receita"},
//   {title: "receita", srcImg: img, description: "descrição super supimpa da receita"},
//   {title: "receita", srcImg: img, description: "descrição super supimpa da receita"}
//

export const Home = () => {
  const [cardInfoArray, setCardInfoArray] = React.useState([]);

  useEffect(() => {
    const getAPI = async () => {
      const API = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
      const response = await fetch(API);
      const { meals } = await response.json();
      const cardInfo = meals.map((item) => item);
      
      setCardInfoArray(cardInfo);
    };
    getAPI();
  }, []);

  console.log(cardInfoArray);

  return (
    <S.Wrapper>
      <Header svg={ICONS['search-icon']} inputPlaceHolder="Pesquise aqui"/>
      <S.CardWrapper>
      {cardInfoArray.map(cardInfo => {
        return (
          <S.Card 
          key={cardInfo.idMeal}
          title={cardInfo.strMeal} 
          srcImg={cardInfo.strMealThumb} 
          description={cardInfo.strInstructions}/>
          );
        })}
      </S.CardWrapper>
    </S.Wrapper>
  );
};
