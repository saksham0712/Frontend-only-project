import Reac, { useEffect, useState } from 'react'
import logo from '../assets/header/logo.svg'
import sun from '../assets/header/sun.svg'
import moon from '../assets/header/moon.svg'

const Navbar = () => {
  const [showNav, setShowNav] = useState("hidden")

  const toggleNavItems = () => {
    showNav === "hidden" ? setShowNav('block') : setShowNav("hidden")
    console.log(showNav)
  }

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = userTheme === 'dark' || (!userTheme && systemTheme);
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const themeSwitch = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  return (
    <>
      <nav className='bg-slate-100 dark:bg-[#222831] h-auto dark:text-white'>
        <div className='flex flex-auto flex-wrap justify-between md:justify-around items-center text-center p-2' >
          <div className="logo text-center align-middle"><img className='filter dark:brightness-200' src={logo} alt="logo" /></div>
          <div className="items hidden md:block">
            <ul className='flex gap-1 md:gap-2 lg:gap-4' >
              <li>Home</li>
              <li>Services</li>
              <li>Features</li>
              <li>Product</li>
              <li>Testimonial</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="buttons flex items-center">
            {isDarkMode ? (<button type='button' className='sun cursor-pointer hidden md:block' onClick={themeSwitch}><img src={sun} alt="sun" /></button>) : (<button type='button' className='moon cursor-pointer hidden md:block' onClick={themeSwitch}><img src={moon} alt="moon" /></button>)}


            <button type="button" className=" text-black dark:text-white hover:text-black hidden md:block hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:hover:bg-gray-500 dark:focus:ring-gray-100 dark:border-gray-100">Sign Up</button>
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 hidden md:block focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>

          </div>
          <button type="button" className='block md:hidden filter dark:stroke-slate-500' onClick={(e) => { toggleNavItems() }}><svg width="40px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000" />
          </svg></button>

          {/* <!-- Dropdown menu --> */}
          <div id="dropdown" className={`${showNav} absolute right-0 top-11 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Services</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Features</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Product</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Testimonial</a>
              </li>
              <li>
              {isDarkMode ? (<button type='button' className='sun cursor-pointer' onClick={themeSwitch}><img src={sun} alt="sun" /></button>) : (<button type='button' className='moon cursor-pointer' onClick={themeSwitch}><img src={moon} alt="moon" /></button>)}
              </li>
              <li>
              <button type="button" className="text-black dark:text-white hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:hover:bg-gray-500 dark:focus:ring-gray-100 dark:border-gray-100">Sign Up</button>
              </li>
              <li>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>

  )
}

export default Navbar
