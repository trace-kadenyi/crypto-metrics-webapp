import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import icon from '../../fuse.png';
import './Home.css';

const Home = ({
  id, name, symbol, rank, logo, price,
}) => (
  <li className="home_list">
    <div className="block">
      <div>
        {name === 'Fuse-6 sOHM' ? (<img className="logo" src={icon} alt="fuse" />) : (<img className="logo" src={logo} alt="logo" />)}
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

Home.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  logo: PropTypes.node.isRequired,
};
export default Home;
