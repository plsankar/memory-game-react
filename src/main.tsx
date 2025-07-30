import "./index.css";
import "@fontsource-variable/geist-mono/index.css";
import "@fontsource-variable/sora/index.css";

import App from "./app.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GamePlayProvider from "./provider/game-play-provider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GamePlayProvider>
            <App />
        </GamePlayProvider>
    </StrictMode>
);
