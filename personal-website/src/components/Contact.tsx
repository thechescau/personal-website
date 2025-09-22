import {useNavigate} from "react-router-dom"
import { FiMessageCircle } from "react-icons/fi"

function Contact() {
    const navigate = useNavigate() 

    const handleClick = () => {
        navigate("/contact-form")
    }

    return (
        <section 
            className="py-8 bg-gray-100 font-inter"
            id="contact"
        >
            <div className="w-[90%] bg-kombu-green mx-auto text-center py-10">
                <h3 className="text-2xl text-white font-semibold mb-4"> 
                    Interested in collaborating with me? 
                </h3>
                <h4 className="text-lg text-white mb-1"> 
                    What better way to learn than swapping tips and tricks over coffee and code?
                </h4>
                <h4 className="text-md text-white mb-6 italic"> 
                    Let's grow, break stuff, and fix it together!
                </h4>
                 
                <button
                    onClick={handleClick} 
                    className="flex items-center gap-2 px-6 py-3 bg-lime-700 
                                text-white font-medium rounded-full shadow-md 
                                hover:bg-lime-500 transition mx-auto"
                > 
                    <FiMessageCircle className="text-xl font-inter" />
                    Let's collab! 
                </button>
            </div>
        </section>
    )
}

export default Contact