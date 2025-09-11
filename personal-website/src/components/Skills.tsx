import {useState} from "react"
import {ChevronLeft} from "lucide-react"
import {categories, Category} from "../data/skills"

function Skills() {
    // track which category card is currently open (null means none)
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

    return (
        // main skill container
        <section 
            className="bg-dune py-12 px-6"
            id="skills"
        >
            {/* Section title */}
            <h2 className="font-segoe text-3xl text-dawn-pink font-bold mb-6"> My Skills </h2>

            {/* Container with fixed height */}
            <div className="w-full">
               
                    {/* If no category is selected, show category cards */}
                    {!selectedCategory ? (
                        <div className="flex flex-wrap gap-6 justify-center"> 
                            {categories.map((category) => (
                                <div
                                    key={category.name}
                                    className="bg-dawn-pink rounded-2xl shadow-md p-6 flex flex-col
                                               justify-center items-center cursor-pointer h-[200px]
                                               flex-1 min-w-[180px] max-w-[250px]  
                                               hover:scale-105 transition-transform"
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    <h3 className="text-xl font-semibold text-dune">
                                        {category.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // If category is selected show its skills
                        <div className="w-full flex flex-col">
                            {/* Header row */}
                            <div className="flex items-center mb-6">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className="flex items-center text-dawn-pink hover:underline"
                                >
                                    <ChevronLeft className="mr-2"/> Back
                                </button>
                                <h3 className="text-2xl font-bold text-dawn-pink ml-4">
                                    {selectedCategory.name}
                                </h3>
                            </div>

                            {/* Flexbox for skill cards */}
                            <div className="flex flex-wrap gap-6 justify-center">
                                {selectedCategory.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="bg-dawn-pink rounded-2xl shadow-md p-4 
                                                    h-[150px] flex flex-col justify-center items-center
                                                    flex-1 min-w-[150px] max-w-[220px]"
                                    >
                                        <h4 className="text-lg font-semibold text-dune mb-2 text-center">
                                            {skill.name}
                                        </h4>

                                        {"percent" in skill ? (
                                            <>
                                                <span className="text-sm text-dune mb-2">
                                                    {skill.percent}%
                                                </span>
                                                {/* Progress bar */}
                                                <div className="w-full h-2 bg-gray-300 rounded-full">
                                                    <div
                                                        className="h-2 bg-dune rounded-full"
                                                        style={{width: `${skill.percent}%`}}
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <skill.icon className="text-dune text-3xl" />
                                            </>
                                        )
                                    
                                        }


                                    
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                    
                    }
                
            </div>
        </section>
    )
}

export default Skills