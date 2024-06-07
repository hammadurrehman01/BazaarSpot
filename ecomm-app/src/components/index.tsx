import { lazy } from 'react';

const Navbar = lazy(() => import('./Header/Navbar'));
const Logo = lazy(()=> import("./Header/Logo"));
const Header = lazy(()=> import("./Header/Header"));
const LanguageChanger =   lazy(()=> import("./Header/LanguageChanger"));
const HeaderTop =   lazy(()=> import("./Header/HeaderTop"));
const NavRight = lazy(()=> import("./Header/NavRight"));

export {
    Navbar,Logo,Header,LanguageChanger,HeaderTop,NavRight
}
