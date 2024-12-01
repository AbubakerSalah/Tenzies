import React from "react";
export default function Die(props) {

  return (
    <>
      <div>
        <button className="bg-white shadow-lg text-xl font-bold px-4 py-2 rounded-lg">
            {props.value}</button>
      </div>
    </>
  );
}
