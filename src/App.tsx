import BackgroundAndAnimations from "./components/BackgroundAndAnimations";
import Header from "./components/Header";
import Main from "./components/Main";
import Scroll from "./components/Scroll";

function App() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Header />
            <Main />
            <Scroll />
            <BackgroundAndAnimations />
        </div>
    );
}

export default App;
