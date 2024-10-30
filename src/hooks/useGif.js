
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


function useGif(tag){
    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false);
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${'GXNBue0Bmu2t2rjM7YNYqCJVWgK5LCxI'}`;
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${'GXNBue0Bmu2t2rjM7YNYqCJVWgK5LCxI'}&tag=${tag}`;
   
    async function gifGenerator(tag){
        setLoading(true);
        const {data} = await axios.get(tag ? tagUrl : randomUrl);
        const dataFound = data.data.images.downsized_large.url;
        setGif(dataFound);
        console.log(data);
        setLoading(false);
    }

    useEffect(()=>{
        gifGenerator();
    },[])

    return {gif, loading, gifGenerator}
}
export default useGif;