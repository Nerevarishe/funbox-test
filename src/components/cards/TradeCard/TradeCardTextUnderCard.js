import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { Trebuchet13NormalFont } from "../../Fonts/Fonts";

//TODO: change color to appropriate

const TradeCardTextUnderCard = ({ text, cardStatus, theme, clickHandler }) => {
  return (
    <Trebuchet13NormalFont style={{ color: theme.colors.font.white }}>
      {text ? null : "Чего сидишь? Порадуй котэ, "}
      {text ? (
        text
      ) : (
        <span
          style={{
            color: theme.colors.border.default,
            borderBottom: `2px dashed ${theme.colors.border.default}`,
            cursor: "pointer",
          }}
          onClick={clickHandler}
          children={"купи"}
        />
      )}
    </Trebuchet13NormalFont>
  );
};

TradeCardTextUnderCard.propTypes = {
  text: PropTypes.string.isRequired,
};

TradeCardTextUnderCard.defaultProps = {
  text: "Чего сидишь? Порадуй котэ, ",
};

export default withTheme(TradeCardTextUnderCard);
