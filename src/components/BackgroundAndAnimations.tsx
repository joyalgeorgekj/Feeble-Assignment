import CloudSVG from "../assets/svg/cloud.svg";
import SmallBirdSVG from "../assets/svg/smallbird.svg";
import Bird1SVG from "../assets/svg/bird1.svg";
import Bird2SVG from "../assets/svg/bird2.svg";
import Bird3SVG from "../assets/svg/bird3.svg";
import Bird4SVG from "../assets/svg/bird4.svg";
import AnimatedBird from "../assets/svg/animatedbird.svg";
import { findPercent } from "../helper/findPercent";

function BackgroundAndAnimations() {
    return (
        <div id="backgrounds">
            {/* Small Birds */}
            <img
                src={SmallBirdSVG}
                className={`absolute animate-from-bottom`}
                style={{
                    top: findPercent(291, 1080),
                    left: findPercent(298.18, 1920),
                }}
                alt="small bird"
            />
            <img
                src={SmallBirdSVG}
                className={`absolute`}
                style={{
                    top: findPercent(329.02, 1080),
                    left: findPercent(495.3, 1920),
                }}
                alt="small bird"
            />
            <img
                src={SmallBirdSVG}
                className={`absolute animate-from-bottom`}
                style={{
                    top: findPercent(305, 1080),
                    left: findPercent(1406.18, 1920),
                }}
                alt="small bird"
            />
            <img
                src={SmallBirdSVG}
                className={`absolute`}
                style={{
                    top: findPercent(465, 1080),
                    left: findPercent(1446.18, 1920),
                }}
                alt="small bird"
            />

            {/* Big Birds */}

            <img
                src={Bird1SVG}
                className={`absolute delay-500ms opacity-0 animate-from-bottom w-[8%] lg:w-auto`}
                style={{
                    top: findPercent(925.39, 1080),
                    left: findPercent(371.92, 1920),
                }}
                alt="small bird"
            />
            <img
                src={Bird2SVG}
                className={`absolute delay-500ms opacity-0 animate-from-bottom w-[8%] lg:w-auto`}
                style={{
                    top: findPercent(881, 1080),
                    left: findPercent(665.18, 1920),
                }}
                alt="small bird"
            />
            <img
                src={Bird3SVG}
                className={`absolute delay-500ms opacity-0 animate-from-bottom w-[8%] lg:w-auto`}
                style={{
                    top: findPercent(956, 1080),
                    left: findPercent(1263.18, 1920),
                }}
                alt="small bird"
            />
            <img
                src={Bird4SVG}
                className={`absolute delay-500ms opacity-0 animate-from-bottom w-[8%] lg:w-auto`}
                style={{
                    top: findPercent(882, 1080),
                    left: findPercent(1577.18, 1920),
                }}
                alt="small bird"
            />
            {/* Animated birds */}

            <img
                src={AnimatedBird}
                className={`absolute animate-from-bottom-left opacity-0 delay-2s w-[8%] lg:w-auto`}
                alt="Animated Bird"
            />
            <img
                src={AnimatedBird}
                className={`absolute animate-from-bottom-right opacity-0 delay-2s w-[8%] lg:w-auto`}
                alt="Animated Bird"
            />

            {/* Cloud Background */}

            <img
                className="absolute bottom-0 animate-from-bottom"
                src={CloudSVG}
                alt="cloud"
            />
        </div>
    );
}

export default BackgroundAndAnimations;
