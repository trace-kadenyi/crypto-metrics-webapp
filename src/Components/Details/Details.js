import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCryptoData, selectCryptoData } from '../../redux/cryptoData.redux';
import './Details.css';

const Details = () => {
  const dispatch = useDispatch();
  const crypto = useSelector(selectCryptoData);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  const { id } = useParams();
  const foundItem = crypto.find((item) => item.id === id);

  const darkLogos = ['Polkadot', 'ECOMI', 'Fantom', 'Stellar'];

  return (
    <div role="navigation" className="details">
      <div className="intro">
        <img className={darkLogos.includes(foundItem.name) ? 'my_logo my_blurry_logo' : 'my_logo'} src={foundItem.logo} alt={foundItem.name} />
        <div>
          <h3>
            {foundItem.name}
            {' '}
            (
            {foundItem.symbol}
            )
          </h3>
          <p>
            Ranking:
            {' '}
            {foundItem.rank}
          </p>
          <p>
            Price:
            {' '}
            {foundItem.price}
          </p>
        </div>
      </div>
      <div>
        <h4 className="breakdown">CRYPTOCURRENCY BREAKDOWN - 2022</h4>
      </div>
      <ul className="details_list">
        <li>
          <span className="first_span">Price date</span>
          <span>{foundItem.price_date}</span>
        </li>
        <li>
          <span className="first_span">Price time</span>
          <span>{foundItem.price_timestamp}</span>
        </li>
        <li>
          <span className="first_span">Circulating supply</span>
          <span>{foundItem.circulating_supply}</span>
        </li>
        <li>
          <span className="first_span">Market cap</span>
          <span>{foundItem.market_cap}</span>
        </li>
        <li>
          <span className="first_span">Num exchanges</span>
          <span>{foundItem.num_exchanges}</span>
        </li>
        <li>
          <span className="first_span">Num pairs</span>
          <span>{foundItem.num_pairs}</span>
        </li>
        <li>
          <span className="first_span">Num pairs unmapped</span>
          <span>{foundItem.num_pairs_unmapped}</span>
        </li>
        <li>
          <span className="first_span">First candle</span>
          <span>{foundItem.first_candle}</span>
        </li>
        <li>
          <span className="first_span">First trade</span>
          <span>{foundItem.first_trade}</span>
        </li>
        <li>
          <span className="first_span">First order book</span>
          <span>{foundItem.first_order_book}</span>
        </li>
        <li>
          <span className="first_span">Rank delta</span>
          <span>{foundItem.rank_delta}</span>
        </li>
        <li>
          <span className="first_span">High</span>
          <span>{foundItem.high}</span>
        </li>
        <li>
          <span className="first_span">High timestamp</span>
          <span>{foundItem.high_timestamp}</span>
        </li>
        <li>
          <span className="first_span">Daily price change</span>
          <span>{foundItem['1d'].price_change}</span>
        </li>
        <li>
          <span className="first_span">Weekly Price phange</span>
          <span>{foundItem['7d'].price_change}</span>
        </li>
      </ul>
    </div>
  );
};

export default Details;
