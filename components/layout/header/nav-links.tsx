import NavLink from "./nav-link";

const LINKS = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Features", url: "/" },
  { id: 4, name: "Blog", url: "/" },
  { id: 3, name: "Contact", url: "/" },
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
