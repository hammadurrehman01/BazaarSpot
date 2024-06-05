import { lazy } from 'react';

const Navbar = lazy(() => import('./Navbar'));

const Header = () => {
  return (
    <div>
        <Navbar />
    </div>
  )
}

export default Header;