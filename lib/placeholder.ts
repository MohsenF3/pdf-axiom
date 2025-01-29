import {
  IconConversation,
  IconDocuments,
  IconSetting,
} from "@/components/ui/icons";

export const PAGES = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Features", url: "/" },
  { id: 5, name: "Blog", url: "/" },
  { id: 4, name: "Contact", url: "/" },
];

export const SOCIALS = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohsen-faramarzi",
    isExternal: true,
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/MohsenF3/pdf-axiom",
    isExternal: true,
  },
];

export const REGISTER = [{ id: 1, name: "Login", url: "/login" }];

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    id: 1,
    name: "Conversations",
    url: "/conversations",
    Icon: IconConversation,
  },
  {
    id: 2,
    name: "Documents",
    url: "/documents",
    Icon: IconDocuments,
  },
  {
    id: 3,
    name: "Setting",
    url: "/setting",
    Icon: IconSetting,
  },
];
