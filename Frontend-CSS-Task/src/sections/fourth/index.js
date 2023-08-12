import React, { useEffect } from "react";
import LeftArrow from "./leftArrow.svg";
import CarouselCard from "../../components/carouselCard";
import { ReactComponent as Zoomerr } from "./Zoomerr.svg";
import { ReactComponent as SHELLS } from "./SHELLS.svg";
import { ReactComponent as ArtVenue } from "./ArtVenue.svg";
import { ReactComponent as WAVES } from "./WAVES.svg";
import User1 from "./user1.png";
import User2 from "./user2.png";
import User3 from "./user3.png";
import User4 from "./user4.png";

const Index = () => {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 700;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 700;
  };
  useEffect(() => {
    document.getElementById("content").scrollLeft += 100;
  }, []);
  return (
    <div className="bg-fourth_back relative mb-12 max-sm:bg-white">
      <div className="  flex flex-col gap-10 text-blue_gray  font-roboto max-sm:gap-12">
        <div className="relative z-10 px-20 flex items-center justify-between gap-12 max-sm:px-4">
          <div className="text-[56px] font-extrabold leading-[180%] max-sm:text-[32px]">
            Because they love us
          </div>
          <div className="flex gap-6 max-sm:hidden">
            <div className="cursor-pointer">
              <img
                onClick={scrollLeft}
                src={LeftArrow}
                alt="left arrow"
                className="w-6 h-6 p-3 border-solid border-2 border-amber-900 rounded-[100px] box-content	"
              />
            </div>
            <div className="cursor-pointer">
              <img
                onClick={scrollRight}
                src={LeftArrow}
                alt="left arrow"
                className="w-6 h-6 p-3 rotate-180  border-solid border-2 border-amber-900 rounded-[100px] box-content"
              />
            </div>
          </div>
        </div>
        <div
          id="content"
          className="relative pb-8 z-10 flex gap-6  overflow-x-auto scroll-smooth scrollbar-hide
          max-sm:gap-4 
          "
        >
          <CarouselCard
            Icon={Zoomerr}
            title="Zoomerr"
            image={User1}
            name="Hellen Jummy"
            job="Team Lead"
            text="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
          />
          <CarouselCard
            Icon={SHELLS}
            image={User2}
            title="SHELLS"
            name="Hellena John"
            job="Co-founder"
            text="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
    
          <CarouselCard
            Icon={ArtVenue}
            image={User3}
            title="ArtVenue"
            text="A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed."
            name="David Oshodi"
            job="Manager"
          />
          <CarouselCard
            Icon={WAVES}
            image={User4}
            title="WAVES"
            text="Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque."
            name="Charolette Hanlin"
            job="CEO"
          />
     <CarouselCard
            Icon={Zoomerr}
            title="Zoomerr"
            image={User1}
            name="Hellen Jummy"
            job="Team Lead"
            text="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
          />
          <CarouselCard
            Icon={SHELLS}
            image={User2}
            title="SHELLS"
            name="Hellena John"
            job="Co-founder"
            text="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
    
          <CarouselCard
            Icon={ArtVenue}
            image={User3}
            title="ArtVenue"
            text="A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed."
            name="David Oshodi"
            job="Manager"
          />
          <CarouselCard
            Icon={WAVES}
            image={User4}
            title="WAVES"
            text="Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque."
            name="Charolette Hanlin"
            job="CEO"
          />
        </div>
        <div className="absolute top-[110px] left-[50%] rigth-[50%] -translate-x-[50%] bg-amber-200 w-[95%]  h-[421px] -z-1
        max-sm:w-[100%] max-sm:top-[86px] max-sm:h-[280px]
        " />
      </div>
    </div>
  );
};

export default Index;
