import { useEffect, useState, useContext, createContext } from "react";

const baseURL = "https://rickandmortyapi.com/api/character";

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    location: string;
    image: string;
}

function useCharacterSource(): { characters: ICharacter[] } {
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect(() => {
        fetch(baseURL)
            .then((response) => response.json())
            .then((data) => {
                const result = data.results.slice(0, 10);
                setCharacters(result);
            });
    }, []);

    return { characters };
}

const CharacterContext = createContext<ReturnType<typeof useCharacterSource>>(
    {} as unknown as ReturnType<typeof useCharacterSource>
);

export function useCharacter() {
    return useContext(CharacterContext);
}

export default function CharacterProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CharacterContext.Provider value={useCharacterSource()}>
            {children}
        </CharacterContext.Provider>
    );
}
