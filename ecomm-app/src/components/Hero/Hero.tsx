import { slide } from "../../Utlis/InterfaceObj";
import { HeroImgRightWihCont, HeroLeft } from "../index"
import HeroSwiper from "../SwiperSlider/HeroSwiper";


  const Hero= () => {
    // console.log('===>>',slideData);
    console.log('Slide data:', slide  );

    return (
      <section className="flex">
        <HeroLeft />
        {/* {slide.map((slideData, index) => (
        <HeroImgRightWihCont key={index} slideData={slideData} />
      ))}      */}

          <div className=" w-[61%] mt-6  ml-20 bg-[var(--mainTextBlack)]">

      <HeroSwiper/>
          </div>
      
       </section>
    )
  }

  export default Hero