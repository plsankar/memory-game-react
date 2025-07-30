import Game from "./game";
import { useGamePlay } from "./provider/game-play-provider";
import Welcome from "./welcome";

const App = () => {
    const { mode } = useGamePlay();
    return (
        <div className="py-20 w-fit m-auto">
            <h1 className="text-3xl font-serif text-center mb-3">
                Memory Game
            </h1>
            {mode ? <Game /> : <Welcome />}
        </div>
    );
};

export default App;
