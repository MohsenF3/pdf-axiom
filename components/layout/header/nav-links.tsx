import { PAGES } from "@/lib/placeholder";
import NavLink from "./nav-link";

export default function NavLinks() {
  return (
    <nav>
      <ul className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-1.5">
        {PAGES.map((link) => (
          <NavLink key={link.id} {...link} />
        ))}
      </ul>
    </nav>
  );
}
