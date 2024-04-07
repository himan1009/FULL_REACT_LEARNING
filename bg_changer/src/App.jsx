import { useState } from "react";
import './App.css'
function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        id="root"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 indet-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={()=>setColor("red")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "RED" }}
            >
              RED
            </button>
            <button
              onClick={()=>setColor("green")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "GREEN" }}
            >
              GREEN
            </button>
            <button
              onClick={()=>setColor("blue")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "BLUE" }}
            >
              BLUE
            </button>
            <button
              onClick={()=>setColor("lavender")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "LAVENDER" }}
            >
              LAVENDER
            </button>
            <button
              onClick={()=>setColor("orange")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "ORANGE" }}
            >
              ORANGE
            </button>
            <button
              onClick={()=>setColor("white")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "WHITE" }}
            >
              WHITE
            </button>
            <button
              onClick={()=>setColor("black")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "BLACK" }}
            >
              BLACK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
