import chescaImg from "../assets/chesca.png"

function Introduction() {
    return (
        <main className="bg-dawn-pink flex flex-1 min-h-0">
            {/* Photo */}
            <div className="hidden md:flex md:w-1/3 h-full pl-10">
                <img
                src={chescaImg}
                alt="Chesca"
                className="max-h-[calc(100vh-6rem)] w-auto object-cover rounded-xl"
                />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start md:items-start text-left px-8">
                <h1 className="font-segoe text-5xl md:text-6xl font-bold text-dune mb-2">
                    Hi, I'm Chesca!
                </h1>

                {/* H3 - Short descriptor / tagline */}
                <h3 className="font-eurostile text-2xl md:text-3xl text-gray-800 mb-4">
                    Frontend Developer & Creative Designer
                </h3>

                {/* Paragraph - Short intro / about me */}
                <p className="font-roboto text-lg md:text-xl text-gray-700 max-w-lg">
                    I create beautiful and user-friendly web experiences with React, 
                    TypeScript, and Tailwind CSS. I’m passionate about design, clean code, 
                    and building projects that make a difference.
                </p>
            </div>
        </main>
    )
}

export default Introduction
