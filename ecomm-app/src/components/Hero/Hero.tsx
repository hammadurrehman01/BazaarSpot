import { HeroImgRightWihCont, HeroLeft } from "../index"

const Hero = () => {
  return (
    <section className="">
        {/* Hero Left Side */}
        <div>
            <HeroLeft/>
        </div>

        {/* Hero Right Side */}

        <div>
            <HeroImgRightWihCont/>
        </div>
    </section>
  )
}

export default Hero