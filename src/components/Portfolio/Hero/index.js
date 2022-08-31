import React from "react";
import { HeroSection, HeroContent, HeroTitle, HeroLeft, HeroDesc, HeroButton } from "./HeroElement";

const Hero = () => {
    return(
       <HeroSection>
           <HeroContent>
               <HeroLeft>
                    <HeroTitle>
                        Welcome to my portfolio, browse around and see what I have been up to.
                    </HeroTitle>
                    <HeroDesc>
                        I am a full-stack developer. I have been working on web development for the past 2 years. My name is Ahsan Ali, it's nice to meet you!
                    </HeroDesc>
                    <HeroButton href="https://05wxbvxngv6.typeform.com/to/aH9xykJg">
                        <span>Contact me</span>
                    </HeroButton>
               </HeroLeft>
           </HeroContent>
       </HeroSection>
    )
}

export default Hero;