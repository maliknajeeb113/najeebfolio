import { Cross as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const aboutComponent = document.querySelector("#about");
    if (aboutComponent && aboutComponent.getBoundingClientRect().top <= 147) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  const paths = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "#" },
  ];

  return (
    <nav>
      <div
        className={`${
          navColor ? "bg-[rgb(3,15,10)]" : "bg-white"
        }  fixed w-screen `}
      >
        <div className="p-6 px-10 container mx-auto ">
          <div className="flex justify-between items-center">
            {/* logo start */}
            <div className="text-5xl font-Magilio text-yellow-500 logo-green">
              <Link to="/">N.</Link>
            </div>
            {/* logo end */}

            {/* nav menu start */}

            <div className="lg:flex lg:items-center">
              <div className="lg:hidden" onClick={toggleNav}>
                <Hamburger
                  size={22}
                  color={`${navColor ? "white" : "black"}`}
                />
              </div>

              <ul
                className={`${isNavOpen ? "flex" : "hidden"} ${
                  navColor ? "bg-[rgb(3,15,10)]" : "bg-white"
                } items-center p-10 lg:p-0 lg:flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 absolute lg:static left-0 right-0`}
              >
                {paths.map((link) => (
                  <li
                    className="flex items-center gap-x-2 p-1 font-medium"
                    onClick={toggleNav}
                  >
                    <Link
                      to={link.link}
                      className={`${
                        navColor ? "text-white" : "text-[rgb(3,15,10)]"
                      } font-Satoshi font-semibold hover:text-yellow-500`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* nav menu end */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
