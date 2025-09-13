import {useNavigate} from "react-router-dom"
import { FiMessageCircle } from "react-icons/fi"

function Contact() {
    const navigate = useNavigate() 

    const handleClick = () => {
        navigate("/contact-form")
    }

    return (
        <section 
            className="py-16 bg-gray-100"
            id="contact"
        >
            <div className="max-w-2xl mx-auto text-center px-4">
                <h3 className="text-2xl font-bold mb-4"> 
                    Interested in collaborating with me? 
                </h3>
                <h4 className="text-lg text-gray-600 mb-6"> 
                    I'm still not a pro but I am open to collaboration. 
                    Let's grow and expand together. 
                </h4>
                <button
                    onClick={handleClick} 
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 
                                text-white font-medium rounded-full shadow-md 
                                hover:bg-blue-700 transition mx-auto"
                > 
                    <FiMessageCircle className="text-xl" />
                    Let's collab! 
                </button>
            </div>
        </section>
    )
}

export default Contact