import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCryptoData, selectCryptoData } from '../../redux/cryptoData.redux';
import icon from '../../fuse.png';
import './Details.css';

const Details = () => {
  const dispatch = useDispatch();
  const crypto = useSelector(selectCryptoData);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  const { id } = useParams();
  const foundItem = crypto.find((item) => item.id === id);

  return (
    <div role="navigation" className="details">
      <div className="intro">
        {foundItem.name === 'Fuse-6 sOHM' ? (<img className="my_logo" src={icon} alt="fuse" />) : (<img className="my_logo" src={foundItem.logo} alt={foundItem.name} />)}
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
          <span className="first_span">Volume</span>
          <span>{foundItem.volume}</span>
        </li>
        <li>
          <span className="first_span">Total Supply</span>
          <span>{foundItem.totalSupply}</span>
        </li>
        <li>
          <span className="first_span">Price change (1h)</span>
          <span>{foundItem.priceChange1h}</span>
        </li>
        <li>
          <span className="first_span">Price change (1d)</span>
          <span>{foundItem.priceChange1d}</span>
        </li>
        <li>
          <span className="first_span">Price change (1w)</span>
          <span>{foundItem.priceCHange1w}</span>
        </li>
        <li>
          <span className="first_span">Decimals</span>
          <span>{foundItem.decimals}</span>
        </li>
        <li>
          <span className="first_span">PriceBtc</span>
          <span>{foundItem.priceBtc}</span>
        </li>
      </ul>
    </div>
  );
};

export default Details;
