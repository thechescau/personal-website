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
    return (
        <nav className="bg-dawn-pink text-white px-6 py-4 justify-between items-center flex">

            {/* Logo */}
            <div className="text-xl font-bold pl-5 text-dune"> thechescau </div>

            {/* Links */}
            <ul className="flex space-x-8 pr-5">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="hover: text-dune transition-colors"
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