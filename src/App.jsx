import { React, useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());

  const gameWon = dice.every(die => die.isHeld) && 
  dice.every(die => die.value === dice[0].value)
    
  

  //Generate a random dieObjber
  function generateAllNewDice() {
    console.log("The generate funtions is clicked")
    return Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      }));

    /*
   const newDie = []
   for(let i = 0; i <= 10; i++) {
    const ran = Math.ceil(Math.random()*6)
    newDie.push(ran)
   }
   return newDie
   */
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  //Handle Roll button click
  const rollDice = () => {
    if (!gameWon) {
      setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
      
    );
    }else {
      setDice(generateAllNewDice())
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
      <main className="bg-main-0 h-screen flex justify-center p-32 font-">
        {gameWon && <Confetti className="w-full" />}
        <div className="bg-grey-0 w-[500px] h-[480px] rounded-xl flex flex-col justify-center items-center min-w-max">
          <h1 className="text-3xl font-bold">Tenzies</h1>
          <p className="w-[340px] my-4">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className="grid grid-cols-5 gap-6 my-8">{diceElement}</div>
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded-md"
            onClick={rollDice}
          >
            {gameWon ? "New Game" : "Roll"}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
