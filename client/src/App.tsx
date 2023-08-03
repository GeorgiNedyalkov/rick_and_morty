import { useEffect, useState } from "react";

const baseURL = "https://rickandmortyapi.com/api/character";

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    location: string;
    image: string;
}

function App() {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        fetch(baseURL)
            .then((response) => response.json())
            .then((data) => {
                const result = data.results.slice(0, 10);
                setCharacters(result);
            });
    }, []);

    return (
        <>
            <h1 className="text-3xl text-center font-bold mb-4 uppercase">
                Rick and Morty
            </h1>

            <CharacterList characters={characters} />
        </>
    );
}

export default App;

function Character({ character }: { character: Character }) {
    return (
        <div className="w-40 sm:w-48 lg:w-96">
            <img
                className="rounded-xl"
                src={character.image}
                alt={character.name + " image"}
            />
            <h2 className="text-center">{character.name}</h2>
        </div>
    );
}

function CharacterList({ characters }: { characters: Character[] }) {
    const charactersList = (
        <ul className="grid grid-cols-2 gap-4 place-items-center sm:grid-cols-3 sm:gap-10 lg:w-9/12">
            {characters.map((c: Character) => (
                <li key={c.id}>
                    <Character character={c} />
                </li>
            ))}
        </ul>
    );
    return (
        <div className="flex items-center justify-center">{charactersList}</div>
    );
}
