import DotsSVG from "../assets/svg/dots.svg";
import MacSVG from "../assets/svg/mac.svg";
import BarSVG from "../assets/svg/bar.svg";

function Main() {
    return (
        <main className="flex gap-6 flex-col relative top-[102.5px] justify-center py-12 md:py-0">
            <div className="bg-white rounded-full w-fit flex px-2 py-1 mx-auto gap-2 text-[#006FE8]">
                <img src={DotsSVG} alt="Dots" />
                <p className="font-medium">#1 iMessage Automation Tool</p>
            </div>
            <h2
                className="md:text-[64px] text-3xl font-bold text-center max-w-184 mx-auto text-[#1D2026] -tracking-[2%] leading-[1.2]"
                style={{ fontStyle: "bold" }}
            >
                <span className="text-[#007AFF]">iMessage</span> Automation
                <br />
                for Teams and AI Workflows.
            </h2>
            <p className="md:text-base text-sm text-center max-w-146.5 sm:px-8 md:p-0 mx-auto xl:text-[18px]">
                Coup lets you, your team, or AI workflows send iMessages
                directly from your phone number, running securely on your Mac or
                Mac Mini.{" "}
            </p>

            <div className="buttons mx-auto flex justify-between gap-3">
                <button
                    type="button"
                    className="py-3 px-5 bg-[#007AFF] text-white text-[18px] rounded-full"
                >
                    Get Started
                </button>
                <button
                    type="button"
                    className="flex py-3 px-5 text-[18px] gap-3 border border-[#6C788F] rounded-full"
                >
                    <img src={MacSVG} alt="Mac" />
                    <img src={BarSVG} alt="seperator" />
                    Download the Mac app
                </button>
            </div>
        </main>
    );
}

export default Main;
