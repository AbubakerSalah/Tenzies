import { React, useState } from "react";
import Die from "./Die";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  //Handle Roll button click
   const handleClick = () => {
    setDice(generateAllNewDice)
  };

  //Generate a random number
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));

    /*
   const newDie = []
   for(let i = 0; i <= 10; i++) {
    const ran = Math.ceil(Math.random()*6)
    newDie.push(ran)
   }
   return newDie
   */
  }



  

  const diceElement = dice.map((num) => <Die value={num} onClcik={() => setDice() } />);

  return (
    <>
      <main className="bg-main-0 h-screen flex justify-center p-32 font-">
        <div className="bg-grey-0 w-[400px] h-[400px] rounded-xl flex flex-col justify-center items-center min-w-max">
          <h1 className="text-3xl font-bold">Tenzies</h1>
          <p className="w-[330px]">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="grid grid-cols-5 gap-6 my-8">{diceElement}</div>
          <button className="bg-blue-500 text-white px-5 py-1 rounded-md"
          onClick={handleClick}
          >
            Roll</button>
        </div>
      </main>
    </>
  );
}

export default App;
