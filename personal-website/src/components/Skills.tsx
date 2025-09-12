import {useState} from "react"
import {ChevronLeft} from "lucide-react"
import {categories, Category} from "../data/skills"

function Skills() {
    // track which category card is currently open (null means none)
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

    return (
        // main skill container
        <section 
            className="bg-dune py-12 px-20 flex flex-col items-center justify-center"
            id="skills"
        >
            {/* Section title */}
            <div className="flex justify-between gap-4 pb-6 mb-6">
                {selectedCategory && (
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className="flex items-center justify-center w-10 h-10 rounded-full
                                    bg-dawn-pink text-dune shadow-md hover:bg-dune 
                                    hover:text-dawn-pink transition-colors"
                    >
                        <ChevronLeft size={28} />
                    </button>
                )}
                <h2 className="font-segoe text-3xl text-dawn-pink font-bold pb-6 mb-6"> 
                    {selectedCategory ? selectedCategory.name : "My Skills"}
                </h2>
            </div>
            
            {/* Container with fixed height */}
            <div className="w-full">
               
                    {/* If no category is selected, show category cards */}
                    {!selectedCategory ? (
                        <div className="flex flex-wrap gap-20 justify-center"> 
                            {categories.map((category) => (
                                <div
                                    key={category.name}
                                    className="bg-dawn-pink rounded-2xl shadow-md p-6 flex flex-col
                                               justify-center items-center cursor-pointer h-[200px]
                                               flex-1 min-w-[180px] max-w-[300px]  
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

                            {/* Flexbox for skill cards */}
                            <div className="flex flex-wrap gap-6 justify-center">
                                {selectedCategory.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="bg-dawn-pink rounded-2xl shadow-md p-4 
                                                    h-[90px] flex flex-col justify-center
                                                    flex-1 min-w-[200px] max-w-[250px]"
                                    >

                                        {"percent" in skill ? (
                                            <>
                                                <div className="flex justify-between items-center mb-2">
                                                    <h4 className="text-base font-semibold text-dune"> {skill.name} </h4>
                                                    <span className="text-sm text-dune">
                                                        {skill.percent}%
                                                    </span>
                                                </div>
                                                

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
                                                <div className="flex items-center justify-center gap-3 w-full h-full">
                                                    <skill.icon className="text-dune text-3xl"/>
                                                    <span className="text-base font-medium text-dune text-center flex-1">{skill.name}</span>
                                                </div>
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