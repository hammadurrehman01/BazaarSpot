import { HeroImgRightWihCont } from '..';
import DropDown from '../../assets/images/DropDown.svg';

interface SideList {
    lists: { name: string, id: string, img?: string }[];
}

export const sideListCategory: SideList[] = [
    {
        lists: [
            { name: "Woman’s Fashion", id: "Woman’s Fashion", img: DropDown },
            { name: "Men’s Fashion", id: "Men’s Fashion", img: DropDown },
            { name: "Home & Lifestyle", id: "Home & Lifestyle" },
            { name: "Medicine", id: "Medicine" },
            { name: "Sports & Outdoor", id: "Sports & Outdoor" },
            { name: "Baby’s & Toys", id: "Baby’s & Toys" },
            { name: "Groceries & Pets", id: "Groceries & Pets" },
            { name: "Health & Beauty", id: "Health & Beauty" },
        ]
    }
];

const HeroLeft = () => {
    return (
    //   <div>
    //       <div className="flex max-w-[365px] w-ful bg-pink-500">
    //         <div className="relative flex justify-end p-4 w-full">
    //             {
    //                 sideListCategory.map((item, index) => (
    //                     <ul key={index} className=''>
    //                         {item.lists.map((loop) => (
    //                             <li 
    //                                 key={loop.id} 
    //                                 className="flex items-center  gap-2 p-2 text-[var(--mainTextBlack)] font-medium"
    //                             >
    //                                 <span>{loop.name}</span>
    //                                 {loop.img && <img src={loop.img} alt={loop.name} className="inline-block ml-2" />}
    //                             </li>
    //                         ))}
    //                     </ul>
    //                 ))
    //             }
    //         </div>
    //         {/* <div  className="relative hidden sm:block lg:col-span-5 lg:-mr-8 xl:col-span-6">
    //                             <HeroImgRightWihCont/>
    //                         </div> */}

          
    //     </div>
        
    //   </div>
    <div className="flex max-w-[365px] w-full">
    <div className="relative flex justify-end p-4 w-full">
        {sideListCategory.map((item, index) => (
            <ul key={index} className="">
                {item.lists.map((loop) => (
                    <li
                        key={loop.id}
                        className="flex items-center gap-2 p-2 text-[var(--mainTextBlack)] font-medium"
                    >
                        <span>{loop.name}</span>
                        {loop.img && <img src={loop.img} alt={loop.name} className="inline-block ml-2" />}
                    </li>
                ))}
            </ul>
        ))}
    </div>
</div>
    );
};

export default HeroLeft;
