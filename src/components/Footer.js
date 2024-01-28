import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-[rgb(3,15,10)] lg:mx-auto">
      <Marquee autoFill>
        <div className="font-Satoshi text-white p-4 font-medium">
          Job de do ;-;
        </div>
        <div className="font-Satoshi text-xl text-white p-2 font-bold">---</div>
      </Marquee>

      <div className="container flex flex-col px-8 mx-auto text-white pt-8">
        <div className="text-2xl font-Satoshi font-bold">
          Want to get in touch?
        </div>
        <div className="flex flex-col md:flex-row md:space-x-36 ">
          <div className="text-[5rem] md:text-[10rem]  font-Magilio text-white text-left">
            Let's talk.
          </div>
          <div className=" flex flex-row">
            <div>
              <button className="bg-white text-[rgb(3,15,10)] rounded-full p-3">
                Contact Me
              </button>
            </div>

            {/* <ArrowRightCircleIcon className="h-14 w-14 text-white animate-bounce" /> */}
          </div>
        </div>

        <div className="flex justify-between items-center py-5 md:pb-10">
          <div className="text-5xl font-Magilio text-yellow-500 footer-logo-green">
            <Link to="/">N.</Link>
          </div>

          <div className="flex items-center ">
            {/* <ul
              className={`flex items-center justify-center gap-5 md:gap-10 flex-row left-0 right-0`}
            >
              <li className="flex items-center gap-x-2 p-1 font-medium">
                <Link
                  to="https://www.github.com/maliknajeeb113"
                  target="_blank"
                >
                  <img className="w-6 h-6" alt="Vector" src={github} />
                </Link>
              </li>
              <li className="flex items-center gap-x-2 p-1 font-medium">
                <Link
                  to="https://www.linkedin.com/in/maliknajeeb133"
                  target="_blank"
                >
                  <img className="w-6 h-6" alt="Vector" src={linkedin} />
                </Link>
              </li>
              <li className="flex items-center gap-x-2 p-1 font-medium">
                <Link to="mailto:maliknajeeb113@gmail.com" target="_blank">
                  <img className="w-6 h-6" alt="Vector" src={gmail} />
                </Link>
              </li>
              <li className="flex items-center gap-x-2 p-1 font-medium">
                <Link to="https://www.instagram.com/maliknajeeb133">
                  <img className="w-6 h-6" alt="Vector" src={instagram} />
                </Link>
              </li>
              <li className="flex items-center gap-x-2 p-1 font-medium">
                <Link to="https://www.x.com/maliknajeeb133" target="_blank">
                  <img className="w-6 h-6" alt="Vector" src={twitter} />
                </Link>
              </li>
            </ul> */}
            icons hai yaha pe
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
