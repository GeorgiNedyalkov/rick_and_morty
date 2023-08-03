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
                const result = data.results.slice(0, 4);
                setCharacters(result);
            });
    }, []);

    return (
        <>
            <h1 className="text-3xl text-center font-semibold">
                Rick and Morty
            </h1>

            <CharacterList characters={characters} />
        </>
    );
}

export default App;

function Character({ character }: { character: Character }) {
    return (
        <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name + " image"} />
        </div>
    );
}

function CharacterList({ characters }: { characters: Character[] }) {
    const charactersList = (
        <ul>
            {characters.map((c: Character) => (
                <li key={c.id}>
                    <Character character={c} />
                </li>
            ))}
        </ul>
    );
    return <>{charactersList}</>;
}
