import React from "react";

type DieProps = {
    value: number;
    isHeld: boolean;
    id: number;
    flipClick: (id: number) => void;
};

export default function Die(props: DieProps) {
    return (
        <button 
            className={`${props.isHeld ? "bg-green-300" : "bg-white"} shadow-lg rounded-2xl text-[#0a0a0a] text-4xl font-bold w-20 h-20 p-2`}
            onClick={() => props.flipClick(props.id)}
        >
            {props.value}
        </button>
    );
}