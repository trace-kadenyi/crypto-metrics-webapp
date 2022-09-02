import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoData, selectCryptoData } from '../../redux/cryptoData.redux';
import Home from './Home';

const MainList = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const crypto = useSelector(selectCryptoData);

  useEffect(() => {
    if (crypto.length === 0) {
      dispatch(fetchCryptoData());
    }
  }, [dispatch]);

  const filtered = crypto.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="search_bar">
        <input className="search" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <ul className="main_list">
        {filtered.map((item) => (
          <Home
            key={item.id}
            id={item.id}
            item={item}
            name={item.name}
            symbol={item.symbol}
            rank={item.rank}
            logo={item.logo}
            price={item.price}
            volume={item.volume}
            totalSupply={item.totalSupply}
            priceChange1h={item.priceChange1h}
            priceChange1d={item.priceChange1d}
            priceChange1w={item.priceChange1w}
            decimals={item.decimals}
            availableSupply={item.availableSupply}
            contractAddress={item.contractAddress}
            priceBtc={item.priceBtc}
          />
        ))}
      </ul>
      <footer>
        <p>
          Copyright &copy;
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default MainList;
