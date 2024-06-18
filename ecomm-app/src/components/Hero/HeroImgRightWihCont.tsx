// import { Link } from 'react-router-dom';

// import { Circle } from '../index';
// import { useState } from 'react';
// import { slide } from '../../Utlis/InterfaceObj';



// const HeroImgRightWihCont = () => {

//   const [activeSlide, setActiveSlide] = useState(0);

//   const handleDotClick = (index: number) => {
//     setActiveSlide(index);
//   };


//   return (
//     <div className="flex flex-wrap h-fit w-[59%] mt-6 justify-center ml-20 bg-[var(--mainTextBlack)]">
//     <div className="py-10 text-[var(--mainSecondary1LightWhite)]">
//       <div className="flex items-center gap-4 ">
//         <img src={slide[activeSlide].img2} alt="appleIcon" width={70} height={70} />
//         <span className="text-[.900rem]">{slide[activeSlide].text}</span>
//       </div>
//       <div className=" text-[2rem] font-bold">
//         <h3>{slide[activeSlide].head1}</h3>
//         <h3>{slide[activeSlide].head2}</h3>
//       </div>
//       <div className="flex gap-4 py-2 ">
//         <Link to={slide[activeSlide].link} className="text-[1.300rem] font-medium underline">
//         {slide[activeSlide].link}
//         </Link>
//         <img src={slide[activeSlide].img1} alt="iconArrow" />
        
//       </div>
// <div>

// </div>
//     </div>
//     <div className="flex items-center ml-14">
//         <img className="w-[300px] object-conatin" src={slide[activeSlide].img} alt="applePhone" />
//       </div>
//         </div>
//   )
// }

// export default HeroImgRightWihCont;
import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from '../../Utlis/InterfaceObj';

interface HeroImgRightWihContProps {
  slideData: Slide;
}

const HeroImgRightWihCont: React.FC<HeroImgRightWihContProps> = ({ slideData }) => {
  console.log('-->', slideData);

  return (
    <div className="flex  h-fit w-[80%] mt-6 justify-center ml-20 bg-[var(--mainTextBlack)]">
      <div className="py-10 text-[var(--mainSecondary1LightWhite)]">
        <div className="flex items-center gap-4 ">
          <img src={slideData.img2} alt="appleIcon" width={70} height={70} />
          <span className="text-[.900rem]">{slideData.text}</span>
        </div>
        <div className="text-[2rem] font-bold">
          <h3>{slideData.head1}</h3>
          <h3>{slideData.head2}</h3>
        </div>
        <div className="flex gap-4 py-2 ">
          <Link to={'#'} className="text-[1.300rem] font-medium underline">
            {slideData.link}
          </Link>
          <img src={slideData.img1} alt="iconArrow" />
        </div>
      </div>
      <div className="flex items-center ml-14">
        <img className="w-[300px] object-contain" src={slideData.img} alt="applePhone" />
      </div>
    </div>
  );
};

export default HeroImgRightWihCont;
