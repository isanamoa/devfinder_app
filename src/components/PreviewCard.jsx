import { useContext } from "react";
import { devContext } from "../App";
import Loading from "./Loading";
import CardData from "./CardData";
import { darkModeContext } from "../App";

const PreviewCard = () => {
  const githubAPI = useContext(devContext);
  const { isLoading } = githubAPI;
  const modeContext = useContext(darkModeContext);

  //console.log(githubAPI.isLoading)

  return (
    <div className={`h-[450px] relative flex flex-col gap-3 p-4 ${modeContext.darkMode ? 'bg-transparent text-white' : 'text-gray-500 bg-white'}`}>
        {
            isLoading ? <Loading /> : <CardData />
        } 
    </div>
  )
}

export default PreviewCard
