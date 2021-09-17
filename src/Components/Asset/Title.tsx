import dayjs from "dayjs";
import React from "react";
import { COLORS } from "../../Configurations/colors";
import { numberToString } from "../../Utils/numberUtils";
import { ChangeSince24H } from "../../Models/coin";
import { Period } from "../../Models/graph";

export const Title = (props: {
  name: string;
  symbol: string;
  price: number;
  image: string;
  dailyChange: number;
  unix?: number;
  period?: Period;
  active?: boolean;
}) => {
  const {
    name,
    price,
    image,
    dailyChange,
    unix,
    period,
    active,
    symbol,
  } = props;

  const { POSITIVE, NEGATIVE } = ChangeSince24H;
  const change = dailyChange >= 0 ? POSITIVE : NEGATIVE;
  const color = change && COLORS[change];

  const price24HoursAgo = price + dailyChange;
  const dailyChangeDivision = Math.abs(dailyChange / price24HoursAgo);
  const dailyChangePercent = Math.round(dailyChangeDivision * 10000) / 100;

  return (
    <div
      className="flex-wrap"
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="flex-wrap" style={{ alignItems: "center" }}>
        <img
    src={image}
    alt={name}
    style={{padding: "4px"}}
    width="33px"
    height="33px"
    />
        <h2>
          {window.innerWidth < 1000 ? symbol : name} ${numberToString(price)}
        </h2>
      </div>
      <div style={{ marginLeft: "auto", textAlign: "right" }}>
        {!active && (
          <span style={{ color }}>
            {change === ChangeSince24H.POSITIVE ? "+" : "-"}
            {dailyChangePercent}%
          </span>
        )}
        {active && unix && period && (
          <span>{dayjs(unix).format(period.scrubFormat)}</span>
        )}
      </div>
    </div>
  );
};
