import React, { useState } from 'react';
import Header from "./components/Header";
import PreviewCard from "./components/PreviewCard";
import SearchBar from "./components/SearchBar";
import useGithubAPI from "./api/useGithubAPI";

export let devContext = React.createContext();
export let darkModeContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const githubAPI = useGithubAPI();
  return (
    
    <devContext.Provider value={githubAPI} >
      <darkModeContext.Provider value={{darkMode, setDarkMode}}>
        <div className={`min-h-screen ${darkMode ? 'bg-slate-800' : 'bg-violet-50'}`}>
          <Header></Header>
          <main className="w-[90%] p-3 bg-transparent mx-auto flex flex-col md:w-1/2">
            <SearchBar />
            <PreviewCard ></PreviewCard>
          </main>
        </div>
      </darkModeContext.Provider>
    </devContext.Provider> 
  )
}

export default App
