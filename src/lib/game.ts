import type { JSX } from "react";

export function generateBoard(icons: {
    name: string;
    icon: JSX.Element;
}[], length: number) {
    return icons.sort(() => 0.5 - Math.random()).slice(0, Math.min(length, icons.length)).flatMap((icon) => [
        { name: icon.name, icon: icon.icon, id: `${icon.name.toLowerCase()}-${1}` },
        { name: icon.name, icon: icon.icon, id: `${icon.name.toLowerCase()}-${2}` },
    ]).sort(() => 0.5 - Math.random())
}