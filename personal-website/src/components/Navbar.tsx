import { useState, useEffect } from "react"

type NavItem = {
    label: string;
    href: string
}

const navItems: NavItem[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects"},
    { label: "Contact", href: "#contact" } 
]

function Navbar()  {
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const sections = document.querySelectorAll("section")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            }, {threshold: 0.3}
        )

        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.observe(section))
        }
    }, [])


    return (
        <nav className="bg-kombu-green w-[90%] mx-auto mt-4 px-6 py-4 justify-between items-center flex sticky top-0 z-50">

            {/* Links */}
            <ul className="flex space-x-20 pl-10 text-white">
                {navItems.slice(0, 2).map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className={`transition-colors ${
                                activeSection === item.href.substring(1) 
                                ? "border-b-2 border-white text-white"
                                : "hover:text-white"
                            }`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Center Logo */}
            <div className="text-xl font-bold text-white text-center"> thechescau </div>

            <ul className="flex space-x-20 pr-10 text-white">
                {navItems.slice(2).map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className={`transition-colors ${
                                activeSection === item.href.substring(1) 
                                ? "border-b-2 border-white text-white"
                                : "hover:text-white"
                            }`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar