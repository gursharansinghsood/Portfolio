
import Titlebar from "../components/cards/Titlebar";
import Fade from "../components/motion/Fade";

const TrackHirePage = () => {
    return (
        <div className="h-full w-full flex flex-col">
            <Titlebar name="Track Hire" />

            <div className="flex-1 overflow-hidden">
                <Fade as="iframe"
                    delay={0.5}
                    src="https://track-hire-prince.vercel.app/"
                    title="Track Hire"
                    className="w-full h-full border-0"
                />
            </div>
        </div>
    );
};

export default TrackHirePage;