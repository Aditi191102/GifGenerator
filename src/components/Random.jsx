import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

function Random(){

    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false);
    

    async function generateGif() {
        setLoading(true);
        // const url = https://api.giphy.com/v1/gifs/random?api_key=${gif_API};
        // const {data} =  await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${'GXNBue0Bmu2t2rjM7YNYqCJVWgK5LCxI'}`);
        // const sourceImg = data.data.images.downsized_large.url;
        // setGif(sourceImg);
        // setLoading(false);
        // console.log(output);
    }

    useEffect(()=>{
        generateGif();
    },[])

    function clickHandler(){
        generateGif();
    }

    return(
        <div className="w-[50%] flex flex-col items-center rounded-xl gap-y-10 border border-black border-spacing-10 bg-yellow-300">

            <h3 className="text-2xl mt-15px underline uppercase font-semibold text-green-500">Random Gifs</h3>
            {
                loading ? (<Spinner/>) :  (<img src={gif} width="150" height="150" alt="img"/>)
            }
            
            <button 

            className="border border-black w-[50%] rounded-lg text-xl text-stone-800 bg-pink-500 uppercase mb-5"
            onClick={clickHandler}>
                Generate
            </button>

        </div>
    )
}
export default Random;