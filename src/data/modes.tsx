export const modes = [
    {
        name: "Casual",
        description: "Play at your own pace, no pressure.",
        grid: 4,
        items: 8,
    },
    {
        name: "Medium",
        description: "A balanced challenge for most players.",
        grid: 6,
        items: 12,
    },
    {
        name: "Hard",
        description: "A tough challenge for experienced players.",
        grid: 8,
        items: 20,
    },
    {
        name: "Extreme",
        description: "Only for the bravest of players.",
        grid: 12,
        items: 24,
    },
];

export type Mode = {
    name: string;
    description: string;
    grid: number;
    items: number;
};
