import React, { useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import TradeCardStyled from "./TradeCardStyled";
import TradeCardPreTitlePosition from "./TradeCardPreTitlePosition";
import TradeCardBrandNamePosition from "./TradeCardBrandNamePosition";
import TradeCardIngredientPosition from "./TradeCardIngredientPosition";
import TradeCardWeightStyled from "./TradeCardWeightStyled";

import TradeCardWeightPosition from "./TradeCardWeightPosition";
import {
  Trebuchet16NormalFont,
  Trebuchet21NormalFont,
  Trebuchet24BoldFont,
  Trebuchet42NormalFont,
  Trebuchet48BoldFont,
} from "../../Fonts/Fonts";
import TradeCardTextUnderCard from "./TradeCardTextUnderCard";
import TradeCardTextUnderCardPosition from "./TradeCardTextUnderCardPosition";

const TradeCard = ({ preTitle, brandName, withIngredient, weight, theme }) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // TODO: Add clipPath for IE11
  return (
    <div style={{ margin: "15px" }}>
      <TradeCardStyled>
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
        <TradeCardWeightPosition>
          <TradeCardWeightStyled>
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
        <TradeCardTextUnderCard />
      </TradeCardTextUnderCardPosition>
    </div>
  );
};

TradeCard.propTypes = {
  preTitle: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  withIngredient: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};

TradeCard.defaultProps = {
  preTitle: "Сказочное заморское яство",
  brandName: "Нямушка",
  withIngredient: "c фуа-гра",
  weight: "0,5",
};

export default withTheme(TradeCard);
