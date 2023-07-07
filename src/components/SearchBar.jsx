import { useContext, useState } from "react";
import { MdSearch } from "react-icons/md";
import { devContext } from "../App";
import { darkModeContext } from "../App";

const SearchBar = () => {
    const [username, setUsername] = useState('');
    // Destructuring the content of the useCustomhook
    const githubAPI = useContext(devContext);
    //console.log(githubAPI)
    const { fetchUserData } = githubAPI;
    
    const modeContext = useContext(darkModeContext);

    const changeHandle = (e) => {
        setUsername(e.target.value);
    }
    //console.log(username);

    const submitHandle = (e) => {
        e.preventDefault();
        if(username != '') {
            console.log(username);
            fetchUserData(username);
            setUsername('');
        }else{
            alert('Plear enter username');
        }
    }
    
    return (
        <div className={`p-1 mb-5 ${modeContext.darkMode ? 'bg-transparent' : 'bg-white'}`}>
            <form onSubmit={submitHandle} className="w-full flex justify-between items-center">
                <MdSearch className="h-7 w-9 pt-1 text-slate-400 " />
                <input type="search" value={username} onChange={changeHandle}
                placeholder="Search Github username"
                className="w-full border-none p-2 bg-transparent focus:border-white focus:outline-none" />
                <div className="flex items-center">
                    {   githubAPI.isNotice &&
                        <span className={githubAPI.isError ? 'text-sm text-white fontbold bg-green-400 px-3 py-1 mr-2 rounded-lg' : 'hidden text-sm text-white fontbold bg-green-400 px-3 py-1 mr-2 rounded-lg'}>
                            {githubAPI.isError}
                        </span>
                    }
                    <button type="submit" className="py-1 px-3 border-none rounded-lg text-white text-sm bg-blue-700">
                        Search
                    </button>
                </div>
            </form>
        
        </div>
    )
}

export default SearchBar;
