import React, { Fragment } from "react";
import { withTheme } from "styled-components";

import TradeCard from "../../components/cards/TradeCard";
import StoreTradeCardsPosition from "./StoreTradeCardsPosition";
import StoreTitlePosition from "./StoreTitlePosition";

import { Exo2_36Font } from "../../components/Fonts/Fonts";
import StorePosition from "./StorePosition";

const productCards = [
  {
    id: 1,
    preTitle: "Сказочное заморское яство",
    brandName: "Нямушка",
    withIngredient: "c фуа-гра",
    portions: 10,
    promotionAmount: 1,
    promotionText: "мышь в подарок",
    promotionAdditionText: "",
    weight: "0,5",
    description: "Печень утки разварная с артишоками.",
    disabled: false,
  },
  {
    id: 2,
    preTitle: "Сказочное заморское яство",
    brandName: "Нямушка",
    withIngredient: "с рыбой",
    portions: 40,
    promotionAmount: 2,
    promotionText: "мыши в подарок",
    promotionAdditionText: "",
    weight: "2",
    description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    disabled: false,
  },
  {
    id: 3,
    preTitle: "Сказочное заморское яство",
    brandName: "Нямушка",
    withIngredient: "с курой",
    portions: 100,
    promotionAmount: 5,
    promotionText: "мышей в подарок",
    promotionAdditionText: "заказчик доволен",
    weight: "5",
    description: "Филе из цыплят с трюфелями в бульоне.",
    disabled: false,
  },
];

const Store = ({ theme }) => {
  return (
    <StorePosition>
      <StoreTitlePosition>
        <Exo2_36Font
          as="h1"
          style={{ color: theme.colors.font.white, textAlign: "center" }}
        >
          Ты сегодня покормил кота?
        </Exo2_36Font>
      </StoreTitlePosition>
      <StoreTradeCardsPosition>
        {productCards.map((card) => (
          <TradeCard
            key={card.id}
            preTitle={card.preTitle}
            brandName={card.brandName}
            withIngredient={card.withIngredient}
            portions={card.portions}
            promotionAmount={card.promotionAmount}
            promotionText={card.promotionText}
            promotionAdditionText={card.promotionAdditionText}
            weight={card.weight}
            description={card.description}
          />
        ))}
      </StoreTradeCardsPosition>
    </StorePosition>
  );
};

export default withTheme(Store);
