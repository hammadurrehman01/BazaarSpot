import { Link } from 'react-router-dom';
import AppleIcon from '../../assets/images/appleIcon.svg'
import ApplePhone from '../../assets/images/ApplePhone.png'

import IconArrow from '../../assets/images/icons-arrow-right.svg'


const HeroImgRightWihCont = () => {
  return (
    // <div className='flex items-center justify-center  ml-32 bg-slate-500'>
    //   <h1>I am Ninja</h1>
    // </div>
    <div className="flex flex-wrap w-[59%] mt-6 justify-center  ml-20 bg-[var(--mainTextBlack)]">

    <div className='py-10 text-[var(--mainSecondary1LightWhite)]'>

      <div className='flex items-center gap-4 py-2 px-10'>
      <img src={AppleIcon} alt="appleIcon" width={80} height={80} />
      <span className='text-[.900rem]'>iPhone 14 Series</span>
      </div>

      <div className='py-2 px-14 text-[2rem] font-bold'>
      <h3>Up to 10% </h3>
      <h3>off Voucher</h3>
      </div>


     <div className='flex gap-4 py-2 px-16'>
     <Link to={'#'} className='text-[1.300rem] font-medium underline'>
      Shop Now 
      </Link>
      <img src={IconArrow} alt="iconArrow" />
     </div>
    </div>

    <div className='py-10'>
      <img src={ApplePhone} alt="applePhone"  />
      </div>
  
</div>
  )
}

export default HeroImgRightWihCont;