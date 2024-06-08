import { lazy } from "react";
const Hero = lazy(()=> import("../components/Hero/Hero"));

const Header = lazy(()=> import ("../components/Header/Header"));


const Home = () => {
  return (
   <div>
     <div>
      <Header/>
    </div>
    <div>
      <Hero/>
    </div>  
   </div>
  )
}

export default Home;    