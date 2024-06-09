import { Link } from 'react-router-dom';

import { Circle } from '../index';
import { useState } from 'react';
import { slide } from '../../Utlis/InterfaceObj';

// export interface Slide {
//   img: string;
//   img1: string;
//   img2: string;
//   text: string;
//   head1: string;
//   head2: string;
//   link: string;
// }

//  const slide: Slide[] = [
//   {
//     img: ApplePhone,
//     text: 'iPhone 14 Series',
//     head1: 'Up to 10%',
//     head2: 'off Voucher',
//     link: 'Shop Now',
//     img1: IconArrow,
//     img2:AppleIcon,
//   },
//   {
//     img: ApplePhone,
//     text: 'iPhone 15 Series',
//     head1: 'Up to 20%',
//     head2: 'off Voucher',
//     link: 'Shop Now',
//     img1: IconArrow,
//     img2:AppleIcon,
//   },
//   {
//     img: ApplePhone,
//     text: 'iPhone 13 Series',
//     head1: 'Up to 5%',
//     head2: 'off Voucher',
//     link: 'Shop Now',
//     img1: IconArrow,
//     img2:AppleIcon,
//   },
//   {
//     img: ApplePhone,
//     text: 'iPhone x Series',
//     head1: 'Up to 16%',
//     head2: 'off Voucher',
//     link: 'Shop Now',
//     img1: IconArrow,
//     img2:AppleIcon,
//   },
//   {
//     img: ApplePhone,
//     text: 'iPhone xs maz Series',
//     head1: 'Up to 18%',
//     head2: 'off Voucher',
//     link: 'Shop Now',
//     img1: IconArrow,
//     img2:AppleIcon,
//   },
// ]

const HeroImgRightWihCont = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };


  return (
    <div className="flex flex-wrap w-[59%] mt-6 justify-center ml-20 bg-[var(--mainTextBlack)]">
    <div className="py-10 text-[var(--mainSecondary1LightWhite)]">
      <div className="flex items-center gap-4 py-2 px-10">
        <img src={slide[activeSlide].img2} alt="appleIcon" width={80} height={80} />
        <span className="text-[.900rem]">{slide[activeSlide].text}</span>
      </div>
      <div className="py-2 px-14 text-[2rem] font-bold">
        <h3>{slide[activeSlide].head1}</h3>
        <h3>{slide[activeSlide].head2}</h3>
      </div>
      <div className="flex gap-4 py-2 px-16">
        <Link to={slide[activeSlide].link} className="text-[1.300rem] font-medium underline">
          Shop Now
        </Link>
        <img src={slide[activeSlide].img1} alt="iconArrow" />
      </div>
      <Circle activeSlide={activeSlide} handleDotClick={handleDotClick} slide={slide} />
    </div>
    <div className="py-10">
      <img src={slide[activeSlide].img} alt="applePhone" />
    </div>
  </div>
  )
}

export default HeroImgRightWihCont;