import { Slide } from "../../Utlis/InterfaceObj";

interface CircleProps {
    activeSlide: number,
    handleDotClick: (index: number) => void,
    slide: Slide[],

}

const Circle = ({ activeSlide, handleDotClick, slide }: CircleProps) => {
    return (
        <div className="absolute text-pink-950 mt-16 flex justify-center w-[700px]">
            <div className="flex items-center gap-2">
                {slide.map((_, index) => (
                    <div
                        className={`w-3 h-3 rounded-full bg-[var(--mainTextGrey)] hover:bg-[var(--mainSecondaryRedish)] border-[var(--mainPrimaryColorBalticSea)] cursor-pointer ${index === activeSlide ? 'bg-[var(--mainSecondaryRedish)]' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Circle;