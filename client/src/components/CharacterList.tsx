import { ICharacter, useCharacter } from "../store";
import { Link } from "react-router-dom";

export default function CharacterList() {
    const { characters } = useCharacter();

    const charactersList = (
        <ul className="grid grid-cols-2 gap-4 place-items-center sm:grid-cols-3 sm:gap-10 lg:w-9/12">
            {characters.map((c: ICharacter) => (
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

function Character({ character }: { character: ICharacter }) {
    return (
        <div className="w-40 sm:w-48 lg:w-96 cursor-pointer hover:scale-110 transition">
            <Link to={`/${character.id}`}>
                <img
                    className="rounded-xl"
                    src={character.image}
                    alt={character.name + " image"}
                />
                <h2 className="text-center">{character.name}</h2>
            </Link>
        </div>
    );
}
