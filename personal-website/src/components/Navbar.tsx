import { useState, useEffect } from "react"

type NavItem = {
    label: string;
    href: string
}

const navItems: NavItem[] = [
    { label: "Home", href: "#" },
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
            }, {threshold: 0.6}
        )

        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.observe(section))
        }
    }, [])


    return (
        <nav className="bg-dawn-pink px-6 py-4 justify-between items-center flex sticky top-0 z-50">

            {/* Logo */}
            <div className="text-xl font-bold pl-5 text-dune"> thechescau </div>

            {/* Links */}
            <ul className="flex space-x-8 pr-5">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className={`transition-colors ${
                                activeSection === item.href.substring(1) 
                                ? "border-b-2 border-dune text-dune"
                                : "hover:text-dune"
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