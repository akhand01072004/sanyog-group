import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Work Profile", href: "#work-profile" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">

        {/* ================= LOGO ================= */}
        <a
          href="#home"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/images/sanyog-logo-1.png"
            alt="Sanyog Group"
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition duration-200 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-blue-500"
          >
            Get in Touch
          </a>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      {/* ================= MOBILE NAVIGATION ================= */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-300 transition duration-200 hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition duration-200 hover:bg-blue-500"
            >
              Get in Touch
            </a>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;