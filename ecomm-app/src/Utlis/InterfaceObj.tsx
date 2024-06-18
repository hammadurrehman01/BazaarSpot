// Images
import AppleIcon from '../assets/images/appleIcon.svg'
import ApplePhone from '../assets/images/ApplePhone.png'
import IconArrow from '../assets/images/icons-arrow-right.svg'

import AddidasShoe from '../assets/images/adidasShoe.png';
import CourtPink from '../assets/images/theNorthCourtPink.png';
// import JblSpeaker from '../assets/images/jblSpeaker.png';
import LaptopLenovo from '../assets/images/lenovoLaptop.png';
import ConfirtChair from '../assets/images/confirtChair.png';
import Ps5Slim from '../assets/images/ps5Slim.png';
import WirelessSpeaker from '../assets/images/WirlessSpeaker.png';
import GucchiPerfume from '../assets/images/Gucchiperfume.png';



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
    img?: string;
    img1?: string;
    img2?: string;
    text?: string;
    head1?: string;
    head2?: string;
    link?: string;
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
      img: Ps5Slim,
      text: 'Ps5 Slim',
      head1: 'Up to 5%',
      head2: 'off Voucher',
      link: 'Shop Now',
      img1: IconArrow,
      img2:AppleIcon,
    },
    {
      img: WirelessSpeaker,
      text: 'Jr.Zoom Soccer Cleats',
      head1: 'Up to 18%',
      head2: 'off Voucher',
      link: 'Shop Now',
      img1: IconArrow,
      img2:AppleIcon,
    },
    {
      img: GucchiPerfume,
      text: 'S-Series Comfort Chair',
      head1: 'Up to 14%',
      head2: 'off Voucher',
      link: 'Shop Now',
      img1: IconArrow,
      img2:AppleIcon,
    },
    {
      img: LaptopLenovo,
      text: 'lenovo Laptop Ideapad 3',
      head1: 'Up to 30%',
      head2: 'off Voucher',
      link: 'Shop Now',
      img1: IconArrow,
      img2:AppleIcon,
    },
  ]




          {/* <Circle activeSlide={activeSlide} handleDotClick={handleDotClick} slide={slide} /> */}
