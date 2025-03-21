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
            className={`${props.isHeld ? "bg-[#25a18e] text-[#f7f7f7]" : "bg-white"} shadow-lg md:rounded-2xl rounded-lg text-[#0a0a0a] 
                md:text-4xl text-2xl font-bold md:w-20 md:h-20 w-[2.3em] h-[2.3em] md:p-2 p-0`}
            onClick={() => props.flipClick(props.id)}
        >
            {props.value}
        </button>
    );
}