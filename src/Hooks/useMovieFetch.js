import {useState, useEffect, useCallback} from 'react';
import API from '../API';

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setloading] = useState(true);
    const[error, setError] = useState(false);


    const fetchMovie = useCallback(async() => {
        try{
            setloading(true);
            setError(false);

            const movie =await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);
            //Get directors only
            const directors = credits.crew.filter(
                member => member.job === 'Director'
            );
            setState({
                ...movie,
                actors: credits.cast,
                directors
            });
            setloading(false);

        }
        catch(error){
            setError(true);
        }
    }, [movieId]);

    useEffect(()=>{
        
        fetchMovie()

    },[movieId,fetchMovie]);
    return {state,loading,error};
}