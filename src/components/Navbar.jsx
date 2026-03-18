import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActive(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({
      behavior: "smooth"
    });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 onClick={() => handleClick("home")}>Firdaus Fatima</h2>

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a
            href="#about"
            className={active === "about" ? "active-link" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleClick("about");
            }}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active-link" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleClick("skills");
            }}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active-link" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleClick("projects");
            }}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active-link" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleClick("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;