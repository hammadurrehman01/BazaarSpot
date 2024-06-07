import { lazy } from 'react';

const Navbar = lazy(() => import('./Header/Navbar'));
const Logo = lazy(()=> import("./Header/Logo"));
const Header = lazy(()=> import("./Header/Header"));


export {
    Navbar,Logo,Header
}
