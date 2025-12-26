import { useState, useEffect } from "react";
import { Button } from "../index";
import { Logo } from "../../assets";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Industries", id: "industries" },
  { label: "Products", id: "products" },
  { label: "Blog", id: "blog" },
  { label: "Contact Us", id: "contact" },
  { label: "About Us", route: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("home");
  useEffect(() => {
    if (location.pathname === "/about") {
      setActive("about");
    }
  }, [location.pathname]);

  const handleNavClick = (item) => {
    // About Us → go to route
    if (item.route) {
      navigate(item.route);
      setActive("about");
      setOpen(false);
      return;
    }

    // If we are NOT on home → go home first then scroll
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById(item.id)
          ?.scrollIntoView({ behavior: "smooth" });
        setActive(item.id); // <-- add this
      }, 200);
    } else {
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      setActive(item.id); // <-- add this
    }

    setOpen(false);
  };

  useEffect(() => {
    const sectionIds = ["home", "industries", "products", "blog", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // <header className="w-full flex justify-center bg-white">
    <header className="fixed top-2 left-0 w-full z-50">
      {/* Outer container (1440px) */}
      <div className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-2xl" />
      <div className="relative w-full max-w-[1440px] px-4 m-auto">
        {/* Inner container (1280px) */}
        <nav
          role="navigation"
          className="w-full max-w-[1280px] mx-auto flex items-center py-4 gap-6"
        >
          {/* Logo (left) */}
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="Aadrila Technologies"
              className="h-10 w-auto"
            />
          </div>

          {/* Nav Links (center — evenly spaced) */}
          <ul className="hidden md:flex flex-1 justify-center gap-8 text-[16px] text-[var(--color-text-dark)] font-manrope">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link)}
                  className={`transition ${
                    active === link.id || (link.route && active === "about")
                      ? "text-[var(--color-primary)] font-semibold"
                      : "text-[var(--color-text-dark)]"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button (right) */}
          <div className="hidden md:flex flex-shrink-0">
            <Button variant="primary">Get a Demo</Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden ml-auto flex flex-col gap-1.5"
            onClick={() => setOpen((p) => !p)}
          >
            <span className="w-6 h-[2px] bg-black" />
            <span className="w-6 h-[2px] bg-black" />
            <span className="w-6 h-[2px] bg-black" />
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden w-full max-w-[1280px] mx-auto mt-2 pb-3">
            <ul className="flex flex-col gap-3 text-[14px] font-manrope">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className={`block py-2 px-2 rounded-md text-left w-full transition ${
                      active === link.id || (link.route && active === "about")
                        ? "bg-gray-100 text-[var(--color-primary)] font-semibold"
                        : ""
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-3">
              <Button className="w-full">Get a Demo</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
