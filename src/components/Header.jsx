import { useContext } from "react";
import {MdLightMode, MdDarkMode} from "react-icons/md";
import { darkModeContext } from "../App";

const Header = () => {
  const modeContext = useContext(darkModeContext);
  return (
    <header className={`flex justify-between items-center w-[90%] md:w-1/2 mx-auto pt-16 pb-5 px-3 ${modeContext.darkMode ? 'text-white' : 'text-black' }`}>
        <span className="text-2xl font-semibold tracking-[3px]">devfinder</span>
        <button onClick={()=>modeContext.setDarkMode(prev => !prev)} className="flex justify-center items-center text-sm">
             {modeContext.darkMode ? <>LIGHT <MdLightMode title="Enter day mode" className="h-6 w-6 pt-1" /> </>  : <>DARK <MdDarkMode title="Enter dark mode" className="h-6 w-6 pt-1" /></> }         
        </button>
    </header>
  )
}

export default Header;
