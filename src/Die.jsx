import React from "react";
export default function Die(props) {
  const style = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  };

  return (
    <>
      <div>
        <button
          style={style}
          className="bg-white shadow-lg text-xl font-bold px-6 py-3 rounded-lg"
          onClick={props.hold}
        >
          {props.value}
        </button>
      </div>

      
    </>
  );
}
