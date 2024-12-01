import Review from "./Review";
import FoodMenu from "./FoodMenu";
import ChefPart from "./ChefPart";
import Reservation from "./Reservation";
import Exclusiveitem from "./Exclusiveitem";
import About from "./About";
import IntroVd from "./IntroVd";
import React from 'react';
import PopDishes from "./PopDishes";
import Banner from "./Banner";
export default function Home() {
return (
<div>
  <Banner />
  <PopDishes />
  <About />
  <IntroVd />
  <FoodMenu />
  <ChefPart />
  <Reservation id="Reservation" />
  <Review />
  <Exclusiveitem />
</div>

)
}

