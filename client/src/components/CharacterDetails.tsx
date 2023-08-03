import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ICharacter } from "../store";

export default function ChracterDetails() {
    const { characterId } = useParams();
    const [character, setCharacter] = useState<ICharacter | null>(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then((response) => response.json())
            .then(setCharacter);
    }, [characterId]);

    return (
        <>
            <button className="rounded border p-2">
                <Link to="/">Back Home</Link>
            </button>
            <h1>{character?.name}</h1>
        </>
    );
}
