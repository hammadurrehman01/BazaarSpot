
import ConsoleImg from '../../assets/images/consoleRed.png'
import Star from '../../Utlis/Star';
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
import { products } from '../../Utlis/InterfaceObj';


const buttonStyles = {
    background: 'var(--mainPrimaryColorWhite)',
    borderRadius: '50%',
    padding: '0.5rem',
    minWidth: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const FlashSalesCard = () => {
    return (
        <div className=' '>
            <div className="flex justify-center gap-6 mt-10">


                {
                    products.map((item) => (
                        <div className=''>
                            <div className='relative bg-red-500' >
                                <img className='bg-[var(--mainTransparentType)] p-14' src={item.mainImg} alt="console" />
                                <span className=' text-center absolute bg-[var(--mainSecondaryRedish)]  top-[5%] right-[75%] w-[50px] text-[var(--mainPrimaryColorWhite)] rounded-md'>{item.discountText}</span>
                                <div className=' absolute top-[4%] right-[5%] space-y-2 duration-300 ease-in-out'>
                                    <button className="flex items-center justify-center bg-[var(--mainPrimaryColorWhite)] rounded-full w-7 h-7 p-[6px]">
                                        {/* <img src={item.img1HertIcon} alt="" /> */}
                                        <AiOutlineEye className="text-xl" />

                                    </button>
                                    <button className="flex items-center justify-center bg-[var(--mainPrimaryColorWhite)] rounded-full w-7 h-7 p-[5px]">
                                        <AiOutlineEye className="text-xl" />
                                    </button>
                                </div>
                            </div>
                            <h3>{item.productName}</h3>
                            <em>{item.price}</em><em>{item.oldPrice}</em>
                            <div className='flex'>
                                <Star /><span>(88)</span>
                            </div>
                        </div>
                    ))
                }









            </div>
        </div >
    )
}

export default FlashSalesCard;