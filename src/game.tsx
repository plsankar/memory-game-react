import { useEffect, useMemo, useState } from "react";

import { Button } from "./components/ui/button";
import Confetti from "react-confetti";
import { cn } from "./lib/utils";
import { general } from "./data/boards";
import { generateBoard } from "./lib/game";
import { useWindowSize } from "react-use";
import { useGamePlay } from "./provider/game-play-provider";

const Game = () => {
    const { mode } = useGamePlay();

    const board = useMemo(
        () => generateBoard(general, mode?.items || 8),
        [mode?.items]
    );

    const [selected, setSelected] = useState([] as string[]);
    const [matched, setMatched] = useState([] as string[]);
    const { width, height } = useWindowSize();

    const [wrongMatch, setWrongMatch] = useState(false);

    const handleCardClick = (cardId: string) => {
        if (matched.includes(cardId)) {
            return;
        }

        if (selected.length < 2 && !selected.includes(cardId)) {
            setSelected([...selected, cardId]);
        }
    };

    const gameOver = useMemo(
        () => matched.length === board.length,
        [matched, board]
    );

    useEffect(() => {
        setSelected([]);
        setMatched([]);
    }, [board, setSelected, setMatched]);

    useEffect(() => {
        if (selected.length === 2) {
            console.log(selected);
            const card1 = board.find((card) => card.id === selected[0])!;
            const card2 = board.find((card) => card.id === selected[1])!;
            if (card1.name === card2.name) {
                setMatched([...matched, card1.id, card2.id]);
                setSelected([]);
            } else {
                setWrongMatch(true);
                setTimeout(() => {
                    setWrongMatch(false);
                    setSelected([]);
                }, 1000);
            }
        }
    }, [board, matched, selected]);

    return (
        <div>
            <p className="text-center mb-5">
                {gameOver
                    ? "Congratulations! You've matched all cards!"
                    : "Match the pairs of cards!"}
            </p>
            <div className="text-center mb-4">
                {gameOver && (
                    <>
                        <Button onClick={() => window.location.reload()}>
                            Play Again
                        </Button>
                        <Confetti width={width} height={height} />
                    </>
                )}
            </div>
            <div
                className={cn("grid gap-4 w-fit m-auto")}
                style={{
                    gridTemplateColumns: `repeat(${
                        mode?.grid || 4
                    }, minmax(0, 1fr))`,
                }}
            >
                {board.map((card) => (
                    <div
                        onClick={() => handleCardClick(card.id)}
                        key={card.id}
                        className={cn(
                            `w-24 h-24 m-2 shadow-xs text-gray-600 transition-all rounded-lg overflow-hiddenduration-1000 -rotate-x-180  bg-white transform-3d relative perspective-midrange select-none cursor-pointer`,
                            selected.includes(card.id) && "rotate-x-0",
                            matched.includes(card.id) &&
                                "bg-green-500 text-white rotate-x-0 pointer-events-none cursor-not-allowed",
                            selected.includes(card.id) &&
                                wrongMatch &&
                                "bg-red-500 text-white"
                        )}
                        title={card.name}
                    >
                        <div className="text-4xl border rounded-lg flex items-center justify-center absolute inset-0 backface-hidden">
                            {card.icon}
                        </div>
                        <div className="text-4xl border rounded-lg flex items-center justify-center absolute inset-0 backface-hidden rotate-x-180 text-opacity-0">
                            ?
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Game;
