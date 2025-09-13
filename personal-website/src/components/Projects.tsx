import { projects} from "../data/projectsData"

function Projects() {
    return (
        // Section wrapper
        <section className="py-12">
            {/* Title container  */}
            <div className="text-center mb-8"> 
                <h2 className="text-3xl font-bold mb-3"> My Recent Work </h2>
                <h3 className="text-gray-600"> Here are a few recent projects I've been working on. </h3>
            </div>

            {/* Grid layout
            - 1 column on small screens
            - 3 columns on medium+ screens */}

            {/* Project card
            - relative: anchor for "absolute" children
            - fixed width and height
            - overflow-hidden: prevents content from spilling
            - group: hover effects on children
            - mx-auto: center card horizontally */}

            {/* Button anchor tag 
            - href: project link
            - target-"_blank": opens in new tab
            - rel="noopener noreferrer": security best practice */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 max-w-6xl mx-auto px-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative h-60 bg-gray-200 rounded-xl overflow-hidden shadow-md group flex flex-col"
                    >
                        {/* Front face */}
                        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold group-hover:opacity-0 transition-opacity">
                            {project.name}
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 px-8 flex flex-col items-center justify-center bg-dune bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity p-4 text-center">
                            <p className="text-md mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full transition"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    )
}

export default Projects