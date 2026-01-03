import ArrowDownSVG from "../assets/svg/arrowdown.svg";

function Scroll() {
    return (
        <div
            className={`w-full animate-bounce absolute bottom-0 pb-17.5 mx-auto flex items-center flex-col z-10`}
        >
            <p className="w-fit text-center">Scroll to learn more</p>
            <img src={ArrowDownSVG} alt="arrow down" height={32} width={32} />
        </div>
    );
}

export default Scroll;
