import Link from "next/link";

interface NavLinkProps {
  id: number;
  name: string;
  url: string;
}

export default function NavLink({ name, url }: NavLinkProps) {
  return (
    <li>
      <Link
        href={url}
        className="hover:shadow-navLink toext-sm rounded-md px-4 py-2 transition duration-200 hover:bg-muted"
      >
        {name}
      </Link>
    </li>
  );
}
