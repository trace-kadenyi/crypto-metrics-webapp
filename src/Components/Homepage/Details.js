import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';
import { fetchCryptoData, selectCryptoData } from '../../redux/cryptoData.redux';

const Details = () => {
  const dispatch = useDispatch();
  const crypto = useSelector(selectCryptoData);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  const { id } = useParams();
  const foundItem = crypto.find((item) => item.id === id);

  return (
    <div>
      <ul className="details_list">
        <li>
          NAME:
          {foundItem.name}
        </li>
        <li>
          SYMBOL:
          {foundItem.symbol}
        </li>
        <li>
          RANK:
          {foundItem.rank}
        </li>
        <li>
          PRICE_USD:
          {foundItem.price}
        </li>
        <li>
          PRICE_DATE:
          {foundItem.price_date}
        </li>
        <li>
          price_timestamp:
          {foundItem.price_timestamp}
        </li>
        <li>
          circulating_supply:
          {foundItem.circulating_supply}
        </li>
        <li>
          max_supply:
          {foundItem.max_supply}
        </li>
        <li>
          market_cap:
          {foundItem.market_cap}
        </li>
        <li>
          num_exchanges:
          {foundItem.num_exchanges}
        </li>
        <li>
          num_pairs:
          {foundItem.num_pairs}
        </li>
        <li>
          num_pairs_unmapped:
          {foundItem.num_pairs_unmapped}
        </li>
        <li>
          first_candle:
          {foundItem.first_candle}
        </li>
        <li>
          first_trade:
          {foundItem.first_trade}
        </li>
        <li>
          first_order_book:
          {foundItem.first_order_book}
        </li>
        <li>
          rank_delta:
          {foundItem.rank_delta}
        </li>
        <li>
          high:
          {foundItem.high}
        </li>
        <li>
          high_timestamp:
          {foundItem.high_timestamp}
        </li>
        <li>
          one_day:
          {foundItem['1d'].price_change}
        </li>
        <li>
          seven_day:
          {foundItem['7d'].price_change}
        </li>
      </ul>
    </div>
  );
};

export default Details;
