type NavItem = {
    label: string;
    href: string
}

const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" } 
]

function Navbar()  {
    return (
        <nav className="bg-green-800 text-white px-6 py-4 justify-between items-center flex">

            {/* Logo */}
            <div className="text-xl font-bold"> thechescau </div>

            {/* Links */}
            <ul className="flex space-x-6">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="hover: text-yellow-300 transition-colors"
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