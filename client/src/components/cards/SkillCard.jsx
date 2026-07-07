import SlideX from "../motion/SlideX";

const SkillCard = ({ item }) => {
    return (
        <SlideX
            delay={item.delay}
            value="100vw"
            className="grid grid-cols-[auto_120px_1fr_auto] gap-3 items-center mb-3"
        >
            <div className="bg-surface rounded-full p-2 w-fit text-active">
                <item.icon size={20} />
            </div>

            <p className="font-bold">{item.name}</p>

            <div className="w-full h-3 rounded-full overflow-hidden border border-border bg-surface">
                <div
                    className="h-full bg-active rounded-full transition-all duration-700"
                    style={{ width: `${item.level}%` }}
                />
            </div>

            <span className="text-sm text-text-muted font-medium">
                {item.level}%
            </span>
        </SlideX>
    );
};

export default SkillCard;