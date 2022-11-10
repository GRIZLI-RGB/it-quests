import Auth from "./pages/Auth";
import Quests from "./pages/quests/Quests";
import { Context } from "./extra/context";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/notfound/NotFound.jsx";

function App() {
    const [access, setAccess] = useState(false);
    return (
        <>
            <Context.Provider value={{ access, setAccess }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/auth" replace />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/quests" element={<Quests />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
            </Context.Provider>
        </>
    );
}

export default App;
