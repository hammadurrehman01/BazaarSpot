import { lazy } from 'react';

const Navbar = lazy(() => import('./Header/Navbar'));
const Logo = lazy(()=> import("./Header/Logo"));
const Header = lazy(()=> import("./Header/Header"));
const LanguageChanger =   lazy(()=> import("./Header/LanguageChanger"));
const HeaderTop =   lazy(()=> import("./Header/HeaderTop"));
const NavRight = lazy(()=> import("./Header/NavRight"));
const HeroLeft = lazy(()=> import("./Hero/HeroLeft"));
const HeroImgRightWihCont = lazy(()=> import("./Hero/HeroImgRightWihCont"));
const TodaysFlashSaleCont = lazy(()=> import("./TodaysFlashSales/TodaysFlashSaleCont"));



export {
    Navbar,Logo,Header,LanguageChanger,HeaderTop,NavRight,HeroLeft,HeroImgRightWihCont
    ,TodaysFlashSaleCont
}
