import Logo from "@/components/shared/logo";
import { PAGES, REGISTER, SOCIALS } from "@/lib/placeholder";
import Link from "next/link";

type LinkItem = {
  id: number;
  name: string;
  url: string;
  isExternal?: boolean;
};

type RenderLinksProps = {
  title: string;
  links: LinkItem[];
};

const renderLinks = ({ title, links }: RenderLinksProps) => (
  <div className="flex flex-col justify-center space-y-4">
    <p className="font-bold text-foreground">{title}</p>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.id}>
          {link.isExternal ? (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline underline-offset-4 hover:underline"
            >
              {link.name}
            </a>
          ) : (
            <Link
              href={link.url}
              className="no-underline underline-offset-4 hover:underline"
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="relative border-t">
      <div className="px-5 pb-16 pt-20 md:pb-32">
        <div className="relative">
          <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between text-sm text-muted-foreground sm:flex-row lg:items-start">
            <div>
              <div className="mb-4 mr-4 md:flex">
                <Logo className="p-0 text-foreground" />
              </div>
              <div>Copyright © 2025 Every Labs</div>
              <div className="mt-2">All rights reserved</div>
            </div>

            <div className="mt-10 grid grid-cols-2 items-start gap-10 sm:mt-0 md:mt-0 lg:grid-cols-3">
              {renderLinks({ title: "Pages", links: PAGES })}
              {renderLinks({ title: "Socials", links: SOCIALS })}
              {renderLinks({ title: "Register", links: REGISTER })}
            </div>
          </div>
        </div>
      </div>
      <p className="inset-x-0 bg-gradient-to-b from-background to-muted bg-clip-text text-center text-6xl font-bold text-transparent md:text-9xl lg:text-[15rem]">
        PDF AXIOM
      </p>
    </footer>
  );
}
