/* CustomHooks creation and integration*/
import { useState } from "react"
import axios from "axios";

let repoGithub = {
    login : 'George',
	name : 'George',
    avatar_url: null,
	created_at : '2008-02-22T17:22:18Z',
    bio : 'Software Engineer',
	public_repos : '12',
	followers : 52,
	following : 7,
	location : null,
	twitter_username: null,
	url: 'https://api.github.com/users/george',
	company: null
}
const useGithubAPI = () => {
    // Checking loading stage
    const [isLoading, setIsLoading] = useState(false);
    const [isNotice, setIsNotice] = useState(null);

    // Presenting data
    const [userData, setUserData] = useState(repoGithub);
    // Checking error stage
    const [isError, setIsError] = useState(false);

    //Handling side effect
    const fetchUserData = async (username) => {
        try {
            setIsLoading(true);
            const res = await axios.get(`https://api.github.com/users/${username}`);    
            
            const data = res.data;
            setUserData(data);
            setIsNotice(prev => !prev);
            setIsError('Success');
            setIsLoading(false);

            setTimeout(() => {
                setIsNotice(prev => !prev);
            }, 3000);

        } catch (error) {
            console.log('Error response', error.response)
            if(error.response){
                if(error.response.status === 404){
                setIsNotice(prev => !prev);
                setIsError('Not found');
                setIsLoading(false);
                }else if(error.response.status >= 500){
                    setIsNotice(prev => !prev);
                    setIsError('Server error');
                    setIsLoading(false);
                }else{
                    setIsNotice(prev => !prev);
                    setIsError('No result', error);
                    setIsLoading(false); 
                }
            }else{
                setIsNotice(prev => !prev);
                setIsError('Offline', error);
                setIsLoading(false); 
            }
            setTimeout(() => {
                setIsNotice(prev => !prev)
            }, 3000);
        }
    }
    return {isLoading,  userData, isError, isNotice, fetchUserData}
}

export default useGithubAPI
