import najeeb from "../assets/images/najeeb2.png";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div className="bg-[rgb(3,15,10)]" id="about">
      <div className="container px-8 lg:mx-auto  flex flex-col h-screen items-center pt-14 text-left">
        <h1 className="text-6xl text-white font-Magilio ">Experience</h1>
        <div className="flex pt-10 flex-row w-full justify-start">
          {/* Work Experience */}
          <div className="flex flex-col gap-7">
            <div className="font-Satoshi text-4xl text-yellow-500 ">
              Rubrik Inc.
              <div className="text-white text-2xl">
                Technical Support Engineer | Feb, 2023 - Present
              </div>
            </div>
            <div className="font-Satoshi text-4xl text-yellow-500 ">
              ShiftKart
              <div className="text-white text-2xl">
                Web developer | Sept, 2023 - Dec, 2023
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center absolute right-0 object-contain">
            <img src={najeeb} className="h-max object-contain" alt="me" />
          </div>
      </div>
      <Marquee autoFill>
        <div className="font-Satoshi text-white p-4 font-medium">
          Job de do ;-;
        </div>
        <div className="font-Satoshi text-xl text-white p-2 font-bold">---</div>
      </Marquee>
    </div>
  );
};

export default About;
