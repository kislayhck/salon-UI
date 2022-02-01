import React, { useState, useEffect } from 'react';
import HomeCaraousel from '../components/HomeCaraousel';
import AllStore from '../components/AllStore';
import axios from 'axios';
import SearchComponent from '../components/SearchComponent';
const Home = () => {
  const [info, setInfo] = useState();

  useEffect(() => {
    let myIn = [];
    for (let i = 1; i <= 18; i++) {
      myIn.push({
        id: i,
        title: 'Loreal Professional Belle N Beau Salon',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      });
      setInfo(myIn);
    }
  }, []);

  console.log(info, 'vinfoinfo');
  return (
    <div>
      <HomeCaraousel />
      <SearchComponent />
      <AllStore info={info} />
    </div>
  );
};

export default Home;
