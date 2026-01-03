import CloudSVG from "../assets/svg/cloud.svg";
import SmallBirdSVG from "../assets/svg/smallbird.svg";
import Bird1SVG from "../assets/svg/bird1.svg";
import Bird2SVG from "../assets/svg/bird2.svg";
import Bird3SVG from "../assets/svg/bird3.svg";
import Bird4SVG from "../assets/svg/bird4.svg";
import AnimatedBird from "../assets/svg/animatedbird.svg";
import BGImage from "./BGImage";

function Background() {
    const backgrounds = [
        {
            src: SmallBirdSVG,
            alt: "small bird",
            top: 291,
            left: 298.18,
            className: "animate-from-bottom opacity-0 delay-100ms",
        },
        {
            src: SmallBirdSVG,
            alt: "small bird",
            top: 329.02,
            left: 495.3,
        },
        {
            src: SmallBirdSVG,
            alt: "small bird",
            top: 329.02,
            left: 495.3,
            className: "animate-from-bottom-shadow opacity-0 delay-100ms"
        },
        {
            src: SmallBirdSVG,
            alt: "small bird",
            top: 305,
            left: 1406.18,
            className: "animate-from-bottom opacity-0 delay-100ms",
        },
        {
            src: SmallBirdSVG,
            alt: "small bird",
            top: 465,
            left: 1446.18,
        },
        {
            src: SmallBirdSVG,
            alt: "small bird",
            top: 465,
            left: 1446.18,
            className: "animate-from-bottom-shadow opacity-0 delay-100ms"
        },
        {
            src: Bird1SVG,
            alt: "Bird",
            top: 925.39,
            left: 371.92,
            className:
                "delay-200ms opacity-0 animate-from-bottom w-[8%] lg:w-auto",
        },
        {
            src: Bird2SVG,
            alt: "Bird",
            top: 881,
            left: 665.18,
            className:
                "delay-200ms opacity-0 animate-from-bottom w-[8%] lg:w-auto",
        },
        {
            src: Bird3SVG,
            alt: "Bird",
            top: 956,
            left: 1263.18,
            className:
                "delay-200ms opacity-0 animate-from-bottom w-[8%] lg:w-auto",
        },
        {
            src: Bird4SVG,
            alt: "Bird",
            top: 882,
            left: 1577.18,
            className:
                "delay-200ms opacity-0 animate-from-bottom w-[8%] lg:w-auto",
        },
        {
            src: AnimatedBird,
            className:
                "animate-from-bottom-left opacity-0 delay-2s w-[8%] lg:w-auto",
            alt: "Animated Bird",
        },
        {
            src: AnimatedBird,
            className:
                "animate-from-bottom-right opacity-0 delay-2s w-[8%] lg:w-auto",
            alt: "Animated Bird",
        },
        {
            className: "bottom-0 animate-from-bottom opacity-0 delay-100ms",
            src: CloudSVG,
            alt: "cloud",
        },
    ];

    return (
        <div id="backgrounds">
            {backgrounds.map((val, ind) => (
                <BGImage
                    key={ind}
                    src={val.src}
                    className={val.className}
                    top={val.top}
                    left={val.left}
                    alt={val.alt}
                />
            ))}
        </div>
    );
}

export default Background;
