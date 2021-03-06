import React, { useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import TradeCardStyled from "./TradeCardStyled";
import TradeCardPreTitlePosition from "./positionElements/TradeCardPreTitlePosition";
import TradeCardBrandNamePosition from "./positionElements/TradeCardBrandNamePosition";
import TradeCardIngredientPosition from "./positionElements/TradeCardIngredientPosition";
import TradeCardWeightPosition from "./positionElements/TradeCardWeightPosition";
import TradeCardWeightStyled from "./TradeCardWeightStyled";
import TradeCardTextUnderCardPosition from "./positionElements/TradeCardTextUnderCardPosition";
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
import TradeCardPromotionPosition from "./positionElements/TradeCardPromotionPosition";

const TradeCard = ({
  preTitle,
  brandName,
  withIngredient,
  portions,
  promotionAmount,
  promotionText,
  promotionAdditionText,
  weight,
  description,
  theme,
}) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div style={{ margin: "15px" }}>
      <TradeCardStyled
        status={{ hover: hover, selected: selected }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          setSelected(!selected);
          setHover(false);
        }}
      >
        <TradeCardPreTitlePosition>
          <Trebuchet16NormalFont style={{ color: theme.colors.font.gray }}>
            {selected && hover ? (
              <Trebuchet16NormalFont
                children="Котэ не одобряет?"
                style={{ color: theme.colors.border.selectedHover }}
              />
            ) : (
              preTitle
            )}
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
        <TradeCardTextUnderCard
          text={selected ? description : ""}
          clickHandler={() => setSelected(!selected)}
        />
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
  description: PropTypes.string.isRequired,
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
