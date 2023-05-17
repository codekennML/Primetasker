import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import useAuth from "../hooks/useAuth";
import { useDispatchLogoutMutation } from "../features/auth/slices/authApiSlice";

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
  const [dispatchLogout, { isLoading, isSuccess, isError, error }] =
    useDispatchLogoutMutation();

  const handleLogout = () => dispatchLogout();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);
  if (isLoading) return <p>Logging Out....</p>;
  if (isError) return <>{console.log("cant logout")}</>;

  const { avatar, userLoggedIn: isLoggedIn } = useAuth();

  console.log(avatar);
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
          pathname === "/create/post-a-task" ? "hidden" : "visible"
        } text-brand-text-deep sticky top-0 transition-all ease duration-400 w-full h-[70px] border-gray-200 border-b  pt-2 flex items-center bg-white   z-20`}
      >
        <div className="w-full px-2">
          <div className="flex justify-between items-center lg:w-[70%] lg:mx-auto ">
            <div className="ml-1">
              {/* <Link to="/" className="cursor-pointer ">
                <Logo />
              </Link> */}
            </div>

            {/* Nav links */}
            <nav className="">
              <ul
                className={`hidden  font-medium md:flex text-[14px] md:flex-row md:space-x-8  text-center space-y-4 lg:space-y-0 items-center md:justify-end
          
            
            `}
              >
                <li className="cursor-pointer   px-6 rounded-full py-1.5 hover:transition duration-200 bg-brand-accent  text-white hover:bg-brand-light">
                  <Link to="/create/post-a-task">Post a task</Link>
                </li>
                <li>
                  <Link to="/tasks">Browse tasks</Link>
                </li>
                <li>
                  <Link to="/explore">Explore </Link>
                </li>
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link to="/my-tasks">Your tasks</Link>
                    </li>

                    <li>
                      <Link to="/notification">Notifications </Link>
                    </li>

                    <li></li>
                    <li>
                      <Link to="/dashboard">
                        <img
                          src={avatar}
                          height={40}
                          width={40}
                          className="w-10 h-10 p-1 rounded-full "
                        />
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/signup">Become a tasker</Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className="px-5 py-2 text-white bg-brand-light rounded"
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>

              {/* Mobile navigaton dropdown */}
              <div
                className={`fixed md:hidden   items-start justify-start  flex flex-col text-gray-600 left-0 lg:relative  w-full min-h-screen h-full z-50 shadow-md pt-6  top-0 bottom-0 transition:opacity delay-600  duration-1000  bg-slate-50  ${
                  showNav
                    ? "top-[0%] opacity-100"
                    : "opacity-0  -top-[150%] md:hidden"
                } `}
              >
                <div className="flex flex-col w-full h-full px-8 overflow-hidden">
                  <div className="flex flex-row justify-center pt-3">
                    <Logo />
                  </div>

                  <div className="text-[.9rem] font-medium mt-4 h-full overflow-y-auto overflow-x-hidden w-full  scrollbar-thin">
                    <ul className="space-y-7 ">
                      {/* <li className="">
                        <Link to="/" className="font-medium rounded-full ">
                          Post a task
                        </Link>
                      </li> */}
                      <li
                        onClick={() => {
                          setShowNav(false);
                        }}
                      >
                        <Link to="/create/post-a-task">Post a task</Link>
                      </li>
                      <li
                        onClick={() => {
                          setShowNav(false);
                        }}
                      >
                        <Link to="/tasks">Browse tasks</Link>
                      </li>
                      <li>
                        <Link to="/explore">Discover</Link>
                      </li>
                      <li>
                        <Link to="/how-it-works">How it works</Link>
                      </li>

                      <li>
                        <Link to="/signup">Join Primetasker </Link>
                      </li>

                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                      <li className="py-1 rounded bg-primary ">
                        <Link
                          to="/login"
                          className={`${isScroll ? "text-white" : ""}`}
                        >
                          Log In
                        </Link>
                      </li>

                      <li>
                        <Link to="/terms-and-conditions">Blog</Link>
                      </li>
                      <li>
                        <Link to="/terms-and-conditions">Careers</Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy">Privacy Policy </Link>
                      </li>
                      <li>
                        <Link to="/terms-and-conditions">Service Guide</Link>
                      </li>
                      <li>
                        <Link to="/terms-and-conditions">
                          Terms &amp; Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="flex justify-center py-2 ">
                    <button
                      onClick={() => {
                        setShowNav(false);
                      }}
                      className="  text-[1em] text-brand-light border border-green-400 p-2 rounded-full right-6 lg:hidden z-50 text-center "
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile navigation trigger */}

              {/* Nav toggle  */}
              <div className="md:hidden ">
                <button
                  className="p-2  text-white bg-green-500 border rounded-full "
                  onClick={() => setShowNav((prev) => !prev)}
                >
                  <AiOutlineMenu className="w-[23px] h-[23px] " />
                </button>
              </div>
            </nav>
          </div>
          {/* <div
            className={`w-full border-t shadow bg-transparent hidden  ${
              isScroll ? "md:block " : ""
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
          </div> */}
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
