import { Link } from "react-router-dom";
import Logo from "./Logo";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import useAuth from "../hooks/useAuth";

const categories = [
  {
    id: 1,
    name: "Home & Office",
  },
  {
    id: 2,
    name: "Data & Technology",
  },
  {
    id: 3,
    name: "Business",
  },
  {
    id: 4,
    name: "Relaxation & Entertainment",
  },
  {
    id: 5,
    name: "Events & Decoration",
  },
  {
    id: 6,
    name: "Design & Marketing",
  },
  {
    id: 7,
    name: "Errands & Deliveries",
  },
  {
    id: 8,
    name: "Religion  Education",
  },
];

const Nav = () => {
  const { avatar, userLoggedIn: isLoggedIn } = useAuth();
  const [showNav, setShowNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const [isHome, setIsHome] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    pathname !== "/" ? setIsHome(false) : setIsHome(true);
  }, [pathname]);

  function scroll() {
    window.scrollY > 0 ? setIsScroll(true) : setIsScroll(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <section>
      <header
        className={`${
          isHome && !isScroll
            ? "bg-transparent text-white "
            : "bg-white text-black"
        } ${
          pathname === "/create/post-a-task" ? "hidden" : "visible"
        } transition-all ease duration-400 w-full   pt-2 fixed top-0 z-20`}
      >
        <div className="">
          <div className="flex justify-between items-center lg:w-[80%] lg:mx-auto ">
            <div className="">
              <Link to="/" className="cursor-pointer ">
                <Logo />
              </Link>
            </div>

            {/* Nav links */}
            <nav className="">
              <ul
                className={`hidden font-medium lg:flex text-[14px]   lg:flex-row lg:space-x-8  text-center space-y-4 lg:space-y-0 items-center lg:justify-between 
          
            
            `}
              >
                <li className="cursor-pointer border border-gray-400  px-6 rounded-full py-1.5 hover:transition duration-200 hover:bg-purple-800 hover:border-purple-800 hover:text-white">
                  <Link to="/create/post-a-task">Post a task</Link>
                </li>
                <li>
                  <Link to="/tasks">Browse tasks</Link>
                </li>
                <li>
                  <Link to="/explore">Explore </Link>
                </li>
                {isLoggedIn ? (
                  <li>
                    <Link to="/dashboard">
                      <img
                        src={avatar}
                        height={40}
                        width={40}
                        className="rounded-full h-10 w-10 p-1 "
                      />
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/signup">Become a tasker</Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className="bg-purple-800 text-white px-5 py-2 rounded"
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>

              <ul
                className={`fixed pt-40  items-center justify-start space-y-12 flex flex-col text-white left-0 lg:relative  w-full h-screen lg:h-max  z-20 shadow-md py-[2em]  top-0 bottom-0 transition:opacity delay-600 opacity-100 duration-1000  bg-gray-900 lg:hidden ${
                  showNav
                    ? "left-[0%] opacity-100"
                    : "opacity-0  left-[150%] lg:hidden"
                } `}
              >
                <li className="">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="details">Rooms</Link>
                </li>
                <li>
                  <Link to="/details">Restaurant</Link>
                </li>
                <li>
                  <Link to="/details">Event Space</Link>
                </li>
                <li>
                  <Link to="/details">Facilities</Link>
                </li>

                <li className="bg-primary px-6 py-1 rounded w-[30%] text-center">
                  <Link
                    to="/login"
                    className={`${isScroll ? "text-white" : ""}`}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setShowNav(false);
                    }}
                    className="absolute top-9  text-[2em] text-primary bg-white right-6 lg:hidden z-50"
                  >
                    <AiOutlineClose />
                  </button>
                </li>
              </ul>
            </nav>

            {/* Nav toggle  */}
            <div className="lg:hidden ">
              <button
                className=" text-white"
                onClick={() => setShowNav((prev) => !prev)}
              >
                <AiOutlineMenu className="w-[30px] h-[40px] " />
              </button>
            </div>
          </div>
          <div
            className={`w-full border-t shadow bg-transparent  ${
              isScroll ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-row justify-between text-sm  font-medium   lg:w-[80%] lg:mx-auto">
              {categories.map((category) => {
                return (
                  <li
                    key={category.id}
                    className="py-3 relative  after:absolute after:w-full after:h-[0px] hover:after:h-[3px] after:bottom-0 after:bg-purple-400 after:left-0  "
                  >
                    <button>{category.name}</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </section>
  );
};

// export default Navbar;

export default Nav;
