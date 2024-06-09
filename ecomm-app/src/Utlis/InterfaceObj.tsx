
import AppleIcon from '../assets/images/appleIcon.svg'
import ApplePhone from '../assets/images/ApplePhone.png'

import IconArrow from '../assets/images/icons-arrow-right.svg'


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


export interface Slide {
    img: string;
    img1: string;
    img2: string;
    text: string;
    head1: string;
    head2: string;
    link: string;
  }
  
export const slide: Slide[] = [
    {
      img: ApplePhone,
      text: 'iPhone 14 Series',
      head1: 'Up to 10%',
      head2: 'off Voucher',
      link: 'Shop Now',
      img1: IconArrow,
      img2:AppleIcon,
    },
    {
      img: ApplePhone,
      text: 'iPhone 15 Series',
      head1: 'Up to 20%',
      head2: 'off Voucher',
      link: 'Shop Now',
      img1: IconArrow,
      img2:AppleIcon,
    },
    {
      img: ApplePhone,
      text: 'iPhone 13 Series',
      head1: 'Up to 5%',
      head2: 'off Voucher',
      link: 'Shop Now',
      img1: IconArrow,
      img2:AppleIcon,
    },
    {
      img: ApplePhone,
      text: 'iPhone x Series',
      head1: 'Up to 16%',
      head2: 'off Voucher',
      link: 'Shop Now',
      img1: IconArrow,
      img2:AppleIcon,
    },
    {
      img: ApplePhone,
      text: 'iPhone xs maz Series',
      head1: 'Up to 18%',
      head2: 'off Voucher',
      link: 'Shop Now',
      img1: IconArrow,
      img2:AppleIcon,
    },
  ]