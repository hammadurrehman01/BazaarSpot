



// Navbar Items Interface
interface NavLink {
    items: { name: string, id: string }[];
}

export const navbarItems: NavLink[] = [
   {
    items: [
        { name: "Home", id: "home" },
        { name: "Contact", id: "contact" },
        { name: "About", id: "about" },
        { name: "Sign Up", id: "sign up" },
       ]
   }
]

