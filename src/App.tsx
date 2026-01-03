import { useEffect, useState } from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import Main from "./components/Main";
import Scroll from "./components/Scroll";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(true), 1000);
    });
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {loading && (
                <>
                    <Header />
                    <Main />
                    <Scroll />
                    <Background />
                </>
            )}
        </div>
    );
}

export default App;
