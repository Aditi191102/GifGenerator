import Random from "./components/Random";
import Tag from "./components/Custom";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center background relative overflow-hidden">
      
    <h1 className="absolute border-l-neutral-950 rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 font-bold text-3xl bg-transparent">
      RANDOM GIFS
    </h1>

    <div className="flex flex-col w-full items-center gap-y-10 mt-[150px]">
      <Random/>

      <Tag/>

    </div>

  </div>
  );
}

export default App;
