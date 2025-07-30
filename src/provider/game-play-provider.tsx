import { type Mode } from "@/data/modes";
import React, { useContext, type ReactNode } from "react";

const GamePlayContext = React.createContext(
    {} as {
        mode: Mode | null;
        setMode: (mode: Mode) => void;
    }
);

// eslint-disable-next-line react-refresh/only-export-components
export const useGamePlay = () => useContext(GamePlayContext);

const GamePlayProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = React.useState(null as Mode | null);
    return (
        <GamePlayContext.Provider value={{ mode, setMode }}>
            {children}
        </GamePlayContext.Provider>
    );
};

export default GamePlayProvider;
