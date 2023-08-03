import { Routes, Route } from "react-router-dom";

import CharacterProvider from "./store";
import CharaterDetails from "./components/CharacterDetails";
import Home from "./components/Home";
import Header from "./components/Header";

export default function App() {
    return (
        <CharacterProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:characterId" element={<CharaterDetails />} />
            </Routes>
        </CharacterProvider>
    );
}
