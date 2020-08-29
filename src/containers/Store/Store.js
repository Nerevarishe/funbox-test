import React, { Fragment } from "react";
import TradeCard from "../../components/cards/TradeCard";
import StoreTradeCardsPosition from "./StoreTradeCardsPosition";

const productCards = [
  {
    id: 1,
    preTitle: "Сказочное заморское яство",
    brandName: "Нямушка",
    withIngredient: "c фуа-гра",
    description: "10 порций мышь в подарок",
    weight: "0,5",
  },
  {
    id: 2,
    preTitle: "Сказочное заморское яство",
    brandName: "Нямушка",
    withIngredient: "с рыбой",
    description: "40 порций 2 мыши в подарок",
    weight: "2",
  },
  {
    id: 3,
    preTitle: "Сказочное заморское яство",
    brandName: "Нямушка",
    withIngredient: "с курой",
    description: "100 порций 5 мышей в подарок\nзаказчик доволен",
    weight: "5",
  },
];

const Store = () => {
  return (
    <StoreTradeCardsPosition>
      {productCards.map((card) => (
        <TradeCard
          key={card.id}
          preTitle={card.preTitle}
          brandName={card.brandName}
          withIngredient={card.withIngredient}
          description={card.description}
          weight={card.weight}
        />
      ))}
    </StoreTradeCardsPosition>
  );
};

export default Store;
