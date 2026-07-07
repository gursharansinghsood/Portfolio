import { useParams } from "react-router-dom";
import { projectList } from "../services/projectList";
import Titlebar from "../components/cards/Titlebar";
import GlassCard from "../components/cards/GlassCard";
import Fade from "../components/motion/Fade";
import { BsArrowUpRight } from "react-icons/bs";
import AMotion from "../components/motion/AMotion";

const ProjectDetailsPage = () => {
    const { id } = useParams();

    const project = projectList.find((item) => item.id === Number(id));

    return (
        <Fade className="h-full flex flex-col">
            <Titlebar name="Project Description" />

            <div className="flex-1 overflow-y-auto">
                <div className="mx-auto flex max-w-6xl flex-col gap-4 p-5 md:p-10">
                    <div>
                        <h1 className="text-3xl font-bold">{project.name}</h1>
                        <p className="mt-2 text-text/80">
                            {project.category}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:gap-8 gap-4 lg:grid-cols-2">
                        <div>
                            <img
                                src={project.image}
                                alt={project.name}
                                className="h-full w-full rounded-2xl border border-border "
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <h2 className="mb-2 text-2xl font-bold">
                                    About Project
                                </h2>

                                <p className="leading-7 text-text text-justify">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <h2 className="mb-3 text-2xl font-bold">
                                    Tech Stack
                                </h2>

                                <div className="flex flex-wrap gap-3">
                                    {project.skills.map((skill) => (
                                        <GlassCard
                                            key={skill}
                                            className="rounded-lg px-3 py-2 text-sm"
                                        >
                                            {skill}
                                        </GlassCard>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="text-sm font-bold flex justify-center items-center gap-10">
                        <AMotion to={project.liveLink} className='px-5 py-2 rounded-xl bg-bg/50 flex items-center w-fit sm:gap-5 gap-2 border-2 border-border truncate' >Live Demo <BsArrowUpRight /></AMotion>
                        <AMotion to={project.gitLink} className='px-5 py-2 rounded-xl bg-success/50 flex items-center w-fit sm:gap-5 gap-2 border-2 border-border truncate' >GitHub Repo <BsArrowUpRight /></AMotion>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default ProjectDetailsPage;