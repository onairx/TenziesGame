import React from "react";

type DieProps = {
    value: number;
    isHeld: boolean;
    flipClick: any;
    id: number;
};

export default function Die(props: DieProps) {
    return (
        <button className={`${props.isHeld ? "bg-green-300" : "bg-white"} 
            shadow-lg  md:rounded-2xl rounded-md text-[#0a0a0a] text-4xl font-bold md:w-20 md:h-20 w-14 h-14 p-2`}
            onClick={() => props.flipClick(props.id)}
        >
            {props.value}
        </button>
    );
}