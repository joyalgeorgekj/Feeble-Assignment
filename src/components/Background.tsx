import { backgrounds } from "../constants/backgrounds";
import BGImage from "./BGImage";

function Background() {
    return (
        <div id="backgrounds" className="*:-z-10">
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
