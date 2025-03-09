import React from "react";

export default function NavBar() {
    return (
        <nav>
            <div className="flex flex-col items-center gap-1 align-center text-center">
                <h1 className="font-bold text-4xl text-[#1d3557]">Tenzies</h1>
                <h2 className="text-[0.6em] font-mono text-[#457b9d]">Dice Dash: Tenzies Edition</h2>
            </div>
        </nav>
    )
}