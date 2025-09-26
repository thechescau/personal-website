import { footerLink } from "../data/footerData"

function Footer() {
    return (
        <footer className="bg-kombu-green flex flex-col gap-8 h-[500px] text-white px-6 py-4 flex flex-col items-center justify-center">
                <div className="mb-4 text-center text-3xl font-eurostile"> 
                    Logo 
                </div>
                <div className="mb-4"> 
                    <p className="font-eurostile text-md"> To live and to grow one day at a time.  </p>
                </div>
                <div className="flex justify-center gap-10 mt-6">
                    {footerLink.map((link) => (
                        <button
                            key={link.name}
                            // onClick={}
                            className="border-2 rounded-full w-14 h-14 flex items-center justify-center
                                        hover:bg-lime-600"
                        >
                            <link.icon className="text-xl"/>
                        </button>
                    ))}
                </div>
                <div className="mt-10">
                    <p className="text-sm">
                        © {new Date().getFullYear()} thechescau. All rights reserved.
                    </p>
                </div>
            
        </footer>
    )
}

export default Footer