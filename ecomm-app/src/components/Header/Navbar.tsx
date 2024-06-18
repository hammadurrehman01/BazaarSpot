import { Link } from "react-router-dom";
import { Logo, NavRight } from "../index";
import { navbarItems } from "../../Utlis/InterfaceObj";


const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center w-full border-b-2 ">
      <div>
      <Logo/>
      </div>
      <div className="">
      {
        navbarItems.map((items)=>(
          <ul className="flex gap-10">
            {
              items.items.map((navLink)=>(
                <li key={navLink.id} className="text-[1.100rem]">
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