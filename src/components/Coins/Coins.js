
import React, { useEffect, useState } from 'react'
import CoinCard from '../CoinCard/CoinCard';
// import CoinCard from '../CoinCard/CoinCard'
// import Spinner from '../Spinner/Spinner'
const Coins = () => {
    const [coins, setCoins] = useState([])
//   const [loading, setLoading] = useState(false)
  useEffect(() => {
    // setLoading(true)
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
    )
      .then(res => res.json())
      .then(data => {
          console.log(data)
        setCoins(data)
        // setLoading(false)
      })
  }, [])
    return (
        <div>
            <h3>Coins: {coins.length}</h3>
            {coins.map(coin => (
              <CoinCard key={coin.id} coin={coin} /> //first bracket na dile o hoy ,, second bracket use multi line er jonno 
            ))}
        </div>
    );
};

export default Coins;