import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './Home.css';

const Home = ({
  id, name, symbol, rank, logo, price,
}) => {
// select certain names from the list of coins
  const darkLogos = ['Polkadot', 'ECOMI', 'Fantom', 'Stellar'];
  return (
    <li className="home_list">
      <div className="block">
        <div>
          <img className={darkLogos.includes(name) ? 'logo blurry_logo' : 'logo'} src={logo} alt={name} />
        </div>
        <div>
          <NavLink className="arrow" to={`details/${id}`}><FaLongArrowAltRight /></NavLink>
        </div>
      </div>
      <div role="list" className="content">
        <h5 className="name">
          {name}
          {' '}
          (
          {symbol}
          )
        </h5>
        <p>
          <strong>Rank:</strong>
          {' '}
          {rank}
        </p>
        <p>
          <strong>Price:</strong>
          {' '}
          {price}
        </p>
      </div>

    </li>
  );
};
Home.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  logo: PropTypes.node.isRequired,
};
export default Home;
