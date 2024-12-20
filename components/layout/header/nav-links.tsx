import NavLink from "./nav-link";

const LINKS = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Features", url: "/" },
  { id: 3, name: "Blog", url: "/blog" },
  { id: 4, name: "Contact", url: "/contact" },
];

export default function NavLinks() {
  return (
    <nav>
      <ul className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-1.5">
        {LINKS.map((link) => (
          <NavLink key={link.id} {...link} />
        ))}
      </ul>
    </nav>
  );
}
