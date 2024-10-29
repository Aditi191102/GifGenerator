// function useGif(){
//     const [customGif,setCustomGif] = useState('');
//     const [imgLoading,setImgLoading] = useState(false);

//     async function customGifGenerator(){
//         setImgLoading(true);
//         // const {data} = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${'GXNBue0Bmu2t2rjM7YNYqCJVWgK5LCxI'}`);
//         // const dataFound = data.data.images.downsized_large.url;
//         // setCustomGif(dataFound);
//         // console.log(data);
//         // setImgLoading(false);
//     }

//     useEffect(()=>{
//         customGifGenerator();
//     },[])

//     function clickHandler(){

//         customGifGenerator();
//     }
// }
// export default useGif;