import {useState} from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import {categories, Category} from "../data/skillsData"

function Skills() {
    // track which category card is currently open (null means none)
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

    return (
        // main skill container
        <section 
            className="bg-dawn-pink px-4 sm:px-8 lg:px-20 flex flex-col items-start justify-center min-h-[550px]"
            id="skills"
        >
            {/* Section title */}
            <h2 className="font-segoe text-3xl text-dune font-bold items-start sm:items-center">
                {selectedCategory ? selectedCategory.name : "My Skills"}
            </h2>
            
            {/* Main content container*/}
            <div className="w-full flex flex-col lg:flex-row gap-8 items-stretch mt-6">

                {/* Left column: categories */}

                <div className="flex flex-col justify-start lg:justify-between gap-8 mt-4 h-full w-full lg:w-1/4">

                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-6 rounded-xl shadow-md text-dawn-pink font-semibold
                                transition-colors hover:bg-dune hover:text-dawn-pink 
                                ${selectedCategory?.name === category.name ? "bg-dune text-dawn-pink" : "bg-kombu-green"}`}
                        >
                                {category.name}
                        </button>
                    ))}
                </div>

                {/* Right column: Category Contents */}

                <div className="justify-center w-full lg:w-3/4 bg-dawn-pink lg:pl-20 flex flex-col overflow-hidden">
                    {selectedCategory ? (
                        <>
                            {/* Skills content */}
                            <div className="flex flex-wrap gap-10 justify-between">
                                {selectedCategory.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex gap-4 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                                    >
                                        {"percent" in skill ? (
                                            // circular progress bar
                                            <div className="w-16 h-16">
                                                <CircularProgressbar 
                                                    value={skill.percent}
                                                    text={`${skill.percent}%`}
                                                     strokeWidth={10}
                                                    styles={buildStyles({
                                                        pathColor: "#384531",
                                                        textColor: "#384531",
                                                        trailColor: "#96a798ff",
                                                        strokeLinecap: "butt",
                                                        textSize: "24px"
                                                    })}
                                                />
                                            </div>
                                        ) : (
                                            <skill.icon className="text-dune text-3xl"/>
                                        )}

                                        {/* Skill name */}
                                        <span className="text-dune font-medium text-lg pl-2"> 
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </div>

        </section>
    )
}

export default Skills