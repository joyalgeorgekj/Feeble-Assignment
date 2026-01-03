import Background from "./components/Background";
import Header from "./components/Header";
import Main from "./components/Main";
import Scroll from "./components/Scroll";

function App() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Header />
            <Main />
            <Scroll />
            <Background />
        </div>
    );
}

export default App;
