import { useContext } from "react";
import { devContext } from "../App";
import {BsTwitter, BsLink, BsFillBuildingFill} from "react-icons/bs";
import {FaMapMarkerAlt} from "react-icons/fa";
import moment from "moment/moment";

const CardData = () => {
    const githubAPI = useContext(devContext);
    console.log(githubAPI.userData)

    return (
        <>
           <section className='flex gap-3 p-1 mb-2'>
                
                {
                    githubAPI.userData.avatar_url != null 
                    ?     
                        <img src={githubAPI.userData.avatar_url} alt="Avatar" className="h-24 w-24 rounded-full" /> 
                    :
                        <div className="flex justify-center items-center bg-black rounded-full">
                            <div className='px-6 py-2 bg-gradient-to-r from-slate-800 via-rose-800 inline-block text-transparent bg-clip-text to-indigo-400 text-5xl font-bold' >
                                {githubAPI.userData.name[0].toUpperCase() || githubAPI.userData.login[0].toUpperCase()}
                            </div> 
                        </div>    
                }
                <div>
                    <p className='text-black font-bold text-xl'>
                        {
                            githubAPI.userData.name != null ?
                            githubAPI.userData.name : githubAPI.userData.login
                        }
                    </p>
                    <p className='text-blue-500 mb-2'>
                        {
                            githubAPI.userData.name != null ?
                            githubAPI.userData.name.toLowerCase() : githubAPI.userData.login.toLowerCase()
                            
                        }
                    </p>
                    <p className='text-sm'>
                        Joined {moment(githubAPI.userData.created_at).format('DD-MM-YYYY')} 
                    </p>
                </div>
            </section>
            <p>
                {
                    githubAPI.userData.bio != null ?
                    githubAPI.userData.bio : ''
                }
            </p>
            <section className="flex gap-3 p-5 my-2 justify-between items-center text-black bg-violet-100">
                <div>
                    <p>Repos</p>
                    <p className=" font-black text-2xl">{githubAPI.userData.public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p className=" font-black text-2xl">{githubAPI.userData.followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p className=" font-black text-2xl">{githubAPI.userData.following}</p>
                </div>
            </section>
            <section>
                <p className="flex gap-3 mb-2 items-center">
                    <FaMapMarkerAlt />
                    {
                        githubAPI.userData.location != null ?
                        githubAPI.userData.location : 'No location'
                    }
                </p>
                <p className="flex gap-3 mb-2 items-center font-bold">
                    <BsTwitter /> 
                    {
                        githubAPI.userData.twitter_username != null ?
                        githubAPI.userData.twitter_username : 'Not Available'
                    }
                </p>
                <p className="flex gap-3 mb-2 items-center">
                    <BsLink className="-rotate-45" /> {githubAPI.userData && githubAPI.userData.url}
                </p>
                <p className="flex gap-3 mb-2 items-center">
                    <BsFillBuildingFill  /> 
                    {
                        githubAPI.userData.company != null ? 
                        githubAPI.userData.company : '@github'
                    }
                </p>
            </section> 
        </>
    )
}

export default CardData;
