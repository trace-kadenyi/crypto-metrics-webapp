import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_DATA = 'crypto-metrics-webapp/cryptoData.redux/FETCH_DATA';
const BASE_URL = 'https://api.coinstats.app/public/v1/coins';
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
  data.coins.forEach((item) => {
    const crypto = {};
    crypto.id = item.id;
    crypto.name = item.name;
    crypto.symbol = item.symbol;
    crypto.rank = item.rank;
    crypto.logo = item.icon;
    crypto.price = item.price;
    crypto.volume = item.volume;
    crypto.totalSupply = item.totalSupply;
    crypto.priceChange1h = item.priceChange1h;
    crypto.priceChange1d = item.priceChange1d;
    crypto.priceChange1w = item.priceChange1w;
    crypto.decimals = item.decimals;
    crypto.availableSupply = item.availableSupply;
    crypto.contractAddress = item.contractAddress;
    crypto.decimals = item.decimals;
    crypto.priceBtc = item.priceBtc;
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
