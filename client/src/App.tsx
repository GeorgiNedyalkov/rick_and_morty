import CharacterList from "./components/CharacterList";
import Header from "./components/Header";

import CharacterProvider from "./store";

export default function App() {
    return (
        <>
            <CharacterProvider>
                <Header />

                <CharacterList />
            </CharacterProvider>
        </>
    );
}
