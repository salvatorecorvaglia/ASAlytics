import React from "react";

export const Header = () => (
  <header>
    <div
      className="flex-wrap p16"
      style={{ alignItems: "flex-end", justifyContent: "space-between" }}
    >
      <h1 className="ma0 Title">ASAlytics</h1>
      <p className="ma0 mt8 attribute">
        Algorand Standard Assets analytics powered by CoinGecko API
      </p>
    </div>
  </header>
);
