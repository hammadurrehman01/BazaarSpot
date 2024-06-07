import { Link } from "react-router-dom";
import { Logo, NavRight } from "../index";
import { navbarItems } from "../../Utlis/InterfaceObj";


const Navbar = () => {
  return (
    <nav>
      <div>
      <Logo/>
      </div>
      <div>
      {
        navbarItems.map((items)=>(
          <ul>
            {
              items.items.map((navLink)=>(
                <li key={navLink.id}>
                  <Link to={navLink.id}>
                  {
                    navLink.name
                  }
                  </Link>
                </li>
              ))
            }
          </ul>
        ))
      }
      </div>

      <div>
      <NavRight/>
      </div>

      
    </nav>
  )
}

export default Navbar;