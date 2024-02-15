import { IoArrowDownCircleOutline } from "react-icons/io5";

import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <main className="snap-y snap-mandatory max-h-screen">
      <section className=" snap-start">
        <div className="min-h-screen bg-white overflow-x-hidden">
          <div className="container px-8 lg:mx-auto  flex flex-col h-screen pt-20 justify-between">
            {/* Hello text start*/}
            <h1 className="text-[5rem] lg:text-[12.5rem] font-Magilio text-[rgb(3,15,10)] text-right">
              Hello
              <br />
              I'm <span className="text-yellow-500 n-green">N</span>ajeeb.
            </h1>
            {/* Hello text end*/}

            {/* Intro div start*/}
            <div className="flex flex-col justify-between gap-28 lg:flex-row pb-16">
              {/* left text start*/}
              <div className="font-Satoshi flex lg:w-3/5 text-4xl ">
                <h1>
                  <span className="text-yellow-500 font-bold">
                    I'm front-end developer
                  </span>{" "}
                  who constantly keeps learning and seeks out innovative
                  solutions to everyday problems.
                </h1>
              </div>
              {/* left text end*/}

              {/* right items start*/}
              <div className="flex flex-col items-center lg:justify-end">
                <IoArrowDownCircleOutline className="h-10 w-10 text-yellow-500 animate-bounce " />

                <div className="font-Satoshi text-2xl">
                  <h1>SCROLL</h1>
                </div>
              </div>

              {/* right items start*/}
            </div>
            {/* Intro div end*/}
            <div className="-mx-96 bg-[rgb(3,15,10)] text-sm">
              <Marquee autoFill>
                <div className="font-Satoshi text-white p-4 font-medium">
                  Job de do ;-;
                </div>
                <div className="font-Satoshi text-xl text-white p-2 font-bold">
                  ---
                </div>
                {/* <div className="font-Satoshi text-white p-4 font-medium">
                BUILD
              </div>
              <div className="font-Satoshi text-xl text-white p-2 font-bold">
                ---
              </div>
              <div className="font-Satoshi text-white p-4 font-medium">
                CODE
              </div>
              <div className="font-Satoshi text-xl text-white p-2 font-bold">
                ---
              </div>
              <div className="font-Satoshi text-white p-4 font-medium">
                EVOLVE
              </div>
              <div className="font-Satoshi text-xl text-white p-2 font-bold">
                ---
              </div> */}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
