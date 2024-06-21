import { lazy } from "react";
const Hero = lazy(()=> import("../components/Hero/Hero"));
const Header = lazy(()=> import ("../components/Header/Header"));
const FlashSales = lazy(()=> import("../components/TodaysFlashSales/FlashSales"));


const Home = () => {
  return (
   <div>
     <div>
      <Header/>
    </div>
    <div>
      <Hero/>
    </div>  
    <div>
      <FlashSales/>
    </div>
   </div>
  )
}

export default Home;    