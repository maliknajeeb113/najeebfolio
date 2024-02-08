import najeeb from "../assets/images/najeeb.jpg";

const About = () => {
  return (
    <div className="bg-[rgb(3,15,10)]" id="about">
      <div className="container px-8 lg:mx-auto  flex flex-col h-screen items-center pt-14 text-left">
        <h1 className="text-6xl text-white font-Magilio ">Experience</h1>
        <div className="flex pt-10 flex-row w-full">
          {/* Work Experience */}
          <div className="flex lg:w-2/5 items-center justify-center">
            <img src={najeeb} className="h-96" alt="me" />
          </div>
          <div className="flex flex-col gap-7">
            ÏÏ
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
          <div className="flex items-center justify-center absolute right-0">
            <img src={najeeb} className="object-contain max-h-[700px]" alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
