import './Home.css';
import Header from '../../Header/Header';
import ExploreMenu from '../../ExploreMenu/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from '../../FoodDisplay/FoodDisplay';
import AppDownload from '../../AppDownload/AppDownload';

const Home = () => {
  const[category,setCategory] = useState("All")
  return (
    
    <div className="home-container">
      <div><Header/></div>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    
    </div>
  );
};

export default Home;
