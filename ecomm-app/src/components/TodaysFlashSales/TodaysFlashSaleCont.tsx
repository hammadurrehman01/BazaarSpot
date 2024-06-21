// import { Button } from '@mui/material';
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";

// const TodaysFlashSaleCont = () => {
//   return (
//     <div className='bg-yellow-300 max-w-[90%]'>
//         <div className='flex '>
//         <span></span>
//         <h3 className='ml-40'>Today’s</h3>
//         </div>

//        <div className='flex justify-between bg-pink-500 max-w-[90%] ml-40'>
//         <h2 className=''>Flash Sales</h2>
//        <div>
//         <div className=''>
//             <strong>Days</strong>
//             <em>03</em><span>:</span>

//             <strong>Days</strong>
//             <em>03</em><span>:</span>

//             <strong>Days</strong>
//             <em>03</em><span>:</span>

//             <strong>Days</strong>
//             <em>03</em><span>:</span>
//         </div>
//         </div>

//         <div>
//         <Button>
//         <FaArrowLeft />
//         </Button>
//         <Button>
//         <FaArrowRight />
//         </Button>
//         </div>
//        </div>
//     </div>
//   )
// }

// export default TodaysFlashSaleCont


import { Button } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CountdownTimer from './CountDownTimer';


const buttonStyles = {
    background: 'var(--mainTransparentType)',
    borderRadius: '50%',
    padding: '0.5rem',
    minWidth: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };


//   interface CountdownUnit {
//     label: string;
//     value: number;
//   }


const TodaysFlashSaleCont = () => {
    return (
        <div className='max-w-[80%] mx-auto'>
            <div className='flex items-center max-w-full'>

                <span
                    // className='text-[var(--mainSecondaryRedish)] border text-[1rem] w-[20px]' 
                    className='flex text-[var(--mainSecondaryRedish)] bg-red-500 border border-red-500 text-[1rem] w-[25px] h-[35px]'
                ></span>
                <h3 className='ml-4 text-[var(--mainSecondaryRedish)] text-[1.2rem] font-bold'>
                    Today’s</h3>
            </div>

            <div className='flex flex-col justify-between md:flex-row items-center w-full'>
                <div className='flex gap-16 p-2'>
                    <h2 className='text-center md:text-left  text-[var(--mainTextBlack)] text-[2.300rem] font-semibold'>Flash Sales</h2>
                    {/* <div className='flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0'>
                        <div className=' items-center space-x-1 ml-10'>
                            <h4 className='text-[var(--mainTextBlack)] font-semibold'>Days</h4>
                            <em className='text-[var(--mainTextBlack)] font-bold text-[1.7rem]'>03
                                <span className='text-[var(--mainSecondaryRedish)] ml-4'>:</span>
                            </em>
                        </div>
                        <div className=' items-center space-x-1'>
                            <h4 className='text-[var(--mainTextBlack)] font-semibold'>Hours</h4>
                            <em className='text-[var(--mainTextBlack)] font-bold text-[1.7rem]'>23
                                <span className='text-[var(--mainSecondaryRedish)] ml-4'>:</span>
                            </em>

                        </div>
                        <div className=' items-center space-x-1'>
                            <h4 className='text-[var(--mainTextBlack)] font-semibold'>Minutes</h4>
                            <em className='text-[var(--mainTextBlack)] font-bold text-[1.7rem]'>19
                                <span className='text-[var(--mainSecondaryRedish)] ml-4'>:</span>
                            </em>
                        </div>
                        <div className=' items-center space-x-1'>
                            <h4 className='text-[var(--mainTextBlack)] font-semibold'>Seconds</h4>
                            <em className='text-[var(--mainTextBlack)] font-bold text-[1.7rem]'>56</em>
                        </div>
                    </div> */}
                <CountdownTimer/>
                </div>
                <div className='flex gap-2'>
                    <Button
                        sx={
                           buttonStyles
                        }
                    >
                        <FaArrowLeft color='black' />
                    </Button>
                    <Button
                        sx={buttonStyles}
                    >
                        <FaArrowRight color='black' />
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default TodaysFlashSaleCont;
