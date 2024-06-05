import { lazy } from "react";

const Header = lazy(()=> import ("../components/Header/Header"));


const Home = () => {
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Home;    