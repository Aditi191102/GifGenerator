import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

function Random(){

    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false);
    

    async function generateGif() {
        setLoading(true);
        // const url = https://api.giphy.com/v1/gifs/random?api_key=${gif_API};
        const {data} =  await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${'GXNBue0Bmu2t2rjM7YNYqCJVWgK5LCxI'}`);
        const sourceImg = data.data.images.downsized_large.url;
        setGif(sourceImg);
        setLoading(false);
        // console.log(output);
    }

    useEffect(()=>{
        generateGif();
    },[])

    function clickHandler(){
        generateGif();
    }

    return(
        <div className="w-[50%] flex flex-col items-center gap-y-10 mt-[5px] border border-black border-spacing-10">

            <h3 className="text-2xl mt-15px underline uppercase font-semibold">Random Gifs</h3>
            {
                loading ? (<Spinner/>) :  (<img src={gif} width="350" alt="img"/>)
            }
            
            <button 

            className="border border-black w-10/12 rounded-lg text-xl text-stone-800 btn uppercase mb-[15px]"
            onClick={clickHandler}>
                Generate
            </button>

        </div>
    )
}
export default Random;