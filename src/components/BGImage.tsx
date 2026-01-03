import { findPercent } from "../helper/findPercent";

function BGImage({
    src,
    className,
    top,
    left,
    alt,
}: {
    src: string;
    className?: string;
    top?: number;
    left?: number;
    alt: string;
}) {
    return (
        <img
            src={src}
            className={`absolute ${className ? className : ""}`}
            style={
                top && left
                    ? {
                          top: findPercent(top, 1080),
                          left: findPercent(left, 1920),
                      }
                    : {}
            }
            alt={alt}
        />
    );
}

export default BGImage;
