import { useGamePlay } from "./provider/game-play-provider";
import { modes } from "./data/modes";
import { Button } from "./components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "./components/ui/card";

const Welcome = () => {
    const { setMode } = useGamePlay();
    return (
        <div className="text-center grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {modes.map((mode) => (
                <Card key={mode.name} className="border p-4">
                    <CardHeader>{mode.name}</CardHeader>
                    <CardContent>
                        <p className="text-gray-600 text-xs">
                            {mode.description}
                        </p>
                    </CardContent>
                    <CardFooter className="p-0">
                        <Button
                            className="w-full"
                            onClick={() => setMode(mode)}
                        >
                            Start
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default Welcome;
