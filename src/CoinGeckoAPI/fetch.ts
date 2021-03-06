import { COINGECKO_BASE_URL, CURRENCY } from "../Configurations/constants";
import { CoinHistory, CoinInfo } from "../Models/coin";
import { HistoricalValue } from "../Models/graph";

export const getCoinHistoricalData = async (
  coin: string,
  days: string,
  signal: AbortSignal
) => {
  const url = `${COINGECKO_BASE_URL}/coins/${coin}/market_chart?vs_currency=${CURRENCY}&days=${days}`;
  const response = await fetch(url, { signal });
  const { prices }: CoinHistory = await response.json();
  return prices.map(([unix, price]) => ({ unix, price })) as HistoricalValue[];
};

export const getCoinInfo = async (coin: string, signal: AbortSignal) => {
  const url = `${COINGECKO_BASE_URL}/coins/${coin}?community_data=false&developer_data=false&sparkline=false&tickers=false&localization=false`;
  const response = await fetch(url, { signal });
  return await response.json() as Promise<CoinInfo>;
};
