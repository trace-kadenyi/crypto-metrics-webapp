import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_DATA = 'crypto-metrics-webapp/cryptoData.redux/FETCH_DATA';
const BASE_URL = 'https://api.nomics.com/v1/currencies/ticker?key=f4cdb994cd1b7d5758037615a32b7d1b0a7aa743&interval=1d,7d&convert=EUR';
export const initialState = [];

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_DATA}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

const restructuredData = (data) => {
  const dataContainer = [];
  data.forEach((item) => {
    const crypto = {};
    crypto.id = item.id;
    crypto.name = item.name;
    crypto.symbol = item.symbol;
    crypto.logo = item.logo_url;
    crypto.status = item.status;
    crypto.price = item.price;
    crypto.price_date = item.price_date;
    crypto.price_timestamp = item.price_timestamp;
    crypto.circulating_supply = item.circulating_supply;
    crypto.max_supply = item.max_supply;
    crypto.market_cap = item.market_cap;
    crypto.num_exchanges = item.num_exchanges;
    crypto.num_pairs = item.num_pairs;
    crypto.num_pairs_unmapped = item.num_pairs_unmapped;
    crypto.first_candle = item.first_candle;
    crypto.first_trade = item.first_trade;
    crypto.first_order_book = item.first_order_book;
    crypto.rank = item.rank;
    crypto.rank_delta = item.rank_delta;
    crypto.high = item.high;
    crypto.high_timestamp = item.high_timestamp;
    crypto['1d'] = item['1d'];
    crypto['7d'] = item['7d'];
    dataContainer.push(crypto);
  });
  return dataContainer;
};

export const fetchCryptoData = createAsyncThunk(FETCH_DATA,
  async () => {
    const { data } = await axios.get(BASE_URL);
    return restructuredData(data);
  });

export const selectCryptoData = (state) => state.crypto;
export default cryptoReducer;
