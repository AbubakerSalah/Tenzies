import React from "react";
import { motion } from "framer-motion";

export default function Die(props) {
  const style = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <button
          style={style}
          className="bg-white shadow-lg text-xl font-bold px-5 lg:px-6 md:px-8 py-4 rounded-lg"
          onClick={props.hold}
        >
          {props.value}
        </button>
      </motion.div>
    </>
  );
}