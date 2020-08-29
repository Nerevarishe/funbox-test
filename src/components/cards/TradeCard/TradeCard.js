import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import TradeCardStyled from "./TradeCardStyled";
import TradeCardPreTitlePosition from "./TradeCardPreTitlePosition";
import TradeCardBrandNamePosition from "./TradeCardBrandNamePosition";
import TradeCardIngredientPosition from "./TradeCardIngredientPosition";
import TradeCardWeightPosition from "./TradeCardWeightPosition";
import TradeCardWeightStyled from "./TradeCardWeightStyled";
import TradeCardTextUnderCardPosition from "./TradeCardTextUnderCardPosition";
import TradeCardTextUnderCard from "./TradeCardTextUnderCard";

import {
  Trebuchet14BoldFont,
  Trebuchet14NormalFont,
  Trebuchet16NormalFont,
  Trebuchet21NormalFont,
  Trebuchet24BoldFont,
  Trebuchet42NormalFont,
  Trebuchet48BoldFont,
} from "../../Fonts/Fonts";
import TradeCardPromotionPosition from "./TradeCardPromotionPosition";

const TradeCard = ({
  preTitle,
  brandName,
  withIngredient,
  portions,
  promotionAmount,
  promotionText,
  promotionAdditionText,
  weight,
  theme,
}) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  // TODO: Add clipPath for IE11
  return (
    <div style={{ margin: "15px" }}>
      <TradeCardStyled
        status={{ hover: hover, selected: selected }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setSelected(!selected)}
      >
        <TradeCardPreTitlePosition>
          <Trebuchet16NormalFont style={{ color: theme.colors.font.gray }}>
            {preTitle}
          </Trebuchet16NormalFont>
        </TradeCardPreTitlePosition>
        <TradeCardBrandNamePosition>
          <Trebuchet48BoldFont>{brandName}</Trebuchet48BoldFont>
        </TradeCardBrandNamePosition>
        <TradeCardIngredientPosition>
          <Trebuchet24BoldFont>{withIngredient}</Trebuchet24BoldFont>
        </TradeCardIngredientPosition>
        <TradeCardPromotionPosition>
          <Trebuchet14NormalFont style={{ color: theme.colors.font.gray }}>
            <Trebuchet14BoldFont>{portions}</Trebuchet14BoldFont> порций
            <br />
            {promotionAmount === 1 ? (
              promotionText
            ) : (
              <Trebuchet14BoldFont
                children={promotionAmount.toString() + " "}
              />
            )}
            {promotionAmount !== 1 ? promotionText : null}
            <br />
            {promotionAdditionText ? promotionAdditionText : null}
          </Trebuchet14NormalFont>
        </TradeCardPromotionPosition>
        <TradeCardWeightPosition>
          <TradeCardWeightStyled status={{ hover: hover, selected: selected }}>
            <Trebuchet42NormalFont style={{ color: theme.colors.font.white }}>
              {weight}
            </Trebuchet42NormalFont>
            <Trebuchet21NormalFont style={{ color: theme.colors.font.white }}>
              кг
            </Trebuchet21NormalFont>
          </TradeCardWeightStyled>
        </TradeCardWeightPosition>
      </TradeCardStyled>
      <TradeCardTextUnderCardPosition>
        <TradeCardTextUnderCard clickHandler={() => setSelected(!selected)} />
      </TradeCardTextUnderCardPosition>
    </div>
  );
};

TradeCard.propTypes = {
  preTitle: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  withIngredient: PropTypes.string.isRequired,
  portions: PropTypes.number,
  promotionAmount: PropTypes.number,
  promotionText: PropTypes.string,
  promotionAdditionText: PropTypes.string,
  weight: PropTypes.string.isRequired,
};

TradeCard.defaultProps = {
  preTitle: "Сказочное заморское яство",
  brandName: "Нямушка",
  withIngredient: "c фуа-гра",
  portions: 10,
  promotionAmount: 1,
  promotionText: "мышь в подарок",
  promotionAdditionText: "",
  weight: "0,5",
  description: "Печень утки разварная с артишоками.",
};

export default withTheme(TradeCard);
