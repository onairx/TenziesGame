import React from "react";
import Die from "./Die";
import { motion } from "framer-motion";
export default function GameBox() {

    // define a proper type for dice objects
    type DieObject = {
        id: number;
        value: number;
        isHeld: boolean;
    }
    // getting an array of objects
    function getRandomNumber(): DieObject[] {
        console.log("getting random number");
        const theNumber: number[] = [];
        for (let i = 0; i < 10; i++) {
            theNumber.push(Math.floor(Math.random() * 6) + 1)
        }
        return theNumber.map((num, index) => ({
            id: index,
            value: num,
            isHeld: false
        }))
    }
    // using useState to store the numbers
    const [theArrayNum, setTheArrayNum] = React.useState<DieObject[]>([]);
    // using useEffect to render the numbers on client side
    React.useEffect(() => {
        setTheArrayNum(getRandomNumber());
    },);
    // mapping the numbers to the Die component
    const theDiesNumbers = theArrayNum.map((num) => {
        return <Die
            value={num.value}
            key={num.id}
            isHeld={num.isHeld}
            flipClick={flipClick}
            id={num.id}
        />
    })
    // function to change color on click
    function flipClick(id: number) {
        setTheArrayNum(prev => {
            return prev.map(die => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
            })
        })
    }
    // function to change unclicked number on dice role
    function roleDice() {
        setTheArrayNum(prevNumbers => {
            return prevNumbers.map(theNum => {
                return theNum.isHeld ? theNum : { ...theNum, value: Math.floor(Math.random() * 6) + 1, isHeld: false }
            })
        })
    }
    const diceText = theArrayNum.every(die => die.isHeld) && theArrayNum.every(die => die.value === theArrayNum[0].value)

    function newGame() {
        setTheArrayNum(getRandomNumber());
    }
    // rendering the numbers to the screen
    return (
        // using motion to animate
        <div className="flex flex-col justify-center gap-5">
            <div className="md:h-full md:w-full h-fit overflow-hidden flex flex-col items-center ">
                <p className="text-[#0a0a0a] md:text-lg text-md font-mono md:max-w-[50%] md:min-w-[60%] h-auto">
                    Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
                </p>
            </div>
            <div className="h-[50vh] w-full overflow-hidden flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="md:w-fit md:h-fit h-full w-full p-5 border-2 border-[#aacdff7d] 
                        rounded-3xl flex flex-col justify-center items-center gap-10">
                    <div className="w-auto h-full grid md:grid-cols-5 md:grid-rows-2 gap-5 grid-cols-3 grid-rows-3">
                        {theDiesNumbers}
                    </div>
                    <button
                        className="text-white bg-[#f08080] py-3 px-7 rounded-lg font-bold text-xl shadow-lg hover:bg-[#f8ad9d]
                        transition-colors ease-in font-mono "
                        onClick={diceText ? newGame : roleDice}

                    >
                        {diceText ? "New Game" : "Roll Dice"}
                    </button>
                </motion.div>

            </div>
        </div>
    );
}