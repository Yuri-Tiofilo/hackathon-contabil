import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useContext } from "react";

import { useSideBarDrawer } from "@/contexts/SidebarDrawerContext";
import { AuthContext } from "@/contexts/AuthContext";

import { Logo } from "../Logo/logo.widget";
import { Profile } from "./profile.widget";
import { colorPrimaryBg } from "@/styles/global";
import { NotificationNav } from "./notificationNav";

export function Header() {
  const { user } = useContext(AuthContext);
  const { onOpen } = useSideBarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      bg="gray.800"
      h="68px"
      mx="auto"
      px={["4", "6"]}
      align="center"
      position="fixed"
      zIndex="1"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          icon={<Icon as={RiMenuLine} color="#fff" />}
          mr="2"
          _active={{
            border: 0,
          }}
          _selected={{
            border: 0,
          }}
        ></IconButton>
      )}

      {isWideVersion && <Logo />}

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile
          showProfileData={isWideVersion}
          user={{
            email: 'yuri@test.com.br',
            name: 'Yuri',
          }}
          handleSignOut={() => {}}
        />
      </Flex>
    </Flex>
  );
}
