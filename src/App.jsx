import { React, useState, useRef, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null);

  const gameWon =
    dice.every((die) => die.isHeld) && dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  // Generate new dice
  function generateAllNewDice() {
    return Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      }));
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const rollDice = () => {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setDice(generateAllNewDice());
    }
  };

  const diceElement = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <>
      <main className="bg-main-0 h-screen flex justify-center items-center p-4 sm:p-8 md:p-12 lg:p-16">
        {gameWon && <Confetti className="w-full h-screen" />}
        <div className="bg-grey-0 w-full max-w-[600px] min-h-[500px] h-[70%] rounded-xl flex flex-col justify-center items-center px-6 py-8 md:px-10 md:py-12">
          <h1 className="text-3xl font-bold text-center">Tenzies</h1>
          <p className="text-base md:text-lg text-center my-4">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className="grid grid-cols-5 gap-4 my-6">{diceElement}</div>
          <motion.button
            ref={buttonRef}
            className="bg-blue-700 text-white w-auto h-12 px-6 py-2 rounded-md text-lg"
            onClick={rollDice}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{
              scale: 0.9,
              backgroundColor: "#2563eb",
              transition: { duration: 0.1 },
            }}
          >
            {gameWon ? "New Game" : "Roll"}
          </motion.button>
        </div>
      </main>
    </>
  );
}

export default App;