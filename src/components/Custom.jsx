import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Custom(){

    // const [customGif,setCustomGif] = useState('');
    const [tag,setTag] = useState('car');
    // const [imgLoading,setImgLoading] = useState(false);

    // async function customGifGenerator(){
    //     setImgLoading(true);
    //     // const {data} = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${'GXNBue0Bmu2t2rjM7YNYqCJVWgK5LCxI'}&tag=${tag}`);
    //     // const dataFound = data.data.images.downsized_large.url;
    //     // setCustomGif(dataFound);
    //     // console.log(data);
    //     // setImgLoading(false);
    // }

    // useEffect(()=>{
    //     customGifGenerator();
    // },[])

    const {gif, loading, gifGenerator} = useGif(tag);

    function changeHandler(event){
        setTag(event.target.value);
    }

    function clickHandler(){

        gifGenerator(tag);
    }
    
    return(
        <div className="flex flex-col border border-black rounded-xl w-[50%] items-center mt-4 bg-pink-500">
            <h3 className="text-2xl font-semibold uppercase underline text-blue-600">Custom Gif</h3>

            {
                loading ? (<Spinner/>) : ( <img src={gif} className="bg-black mt-10" alt="customGif" width="150" height="150"></img>)
            }

            <input className="rounded-md w-[50%] mt-2 border border-black text-xl text-center"
            placeholder="Gif-name here"
            onChange={changeHandler}
            value={tag}>
            </input>

            <button className="rounded-md w-[50%] mt-5 mb-5 border border-black uppercase bg-yellow-400 text-xl"
            onClick={clickHandler}>Click Me</button>
        </div>
    )
}
export default Custom;