import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { v4 } from "uuid";

import { NavSection } from "./navSection.widget";
import { NavLink } from "./navLink.widget";

export function SideBarNav() {
  const sectionAndPages = [
    {
      id: v4(),
      name: "Geral",
      pages: [
        {
          id: v4(),
          name: "Inicio",
          href: "/dashboard",
          icon: RiDashboardLine,
        },
        {
          id: v4(),
          name: "Usuários",
          href: "/users",
          icon: RiContactsLine,
        },
      ],
    },
  ];
  return (
    <Stack
      spacing="8"
      align="flex-start"
      outlineColor="gray.400"
      outline="0"
      boxShadow="none"
    >
      {sectionAndPages.map((section) => (
        <NavSection title={section.name} key={section.id}>
          {section.pages.map((page) => (
            <NavLink href={page.href} key={page.id} icon={page.icon}>
              {page.name}
            </NavLink>
          ))}
        </NavSection>
      ))}
    </Stack>
  );
}
