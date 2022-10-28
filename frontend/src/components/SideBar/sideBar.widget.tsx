import {
  Box,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody
} from '@chakra-ui/react'
import { useSideBarDrawer } from '@/contexts/SidebarDrawerContext'

import { SideBarNav } from './sideBarNav.widget'

export function SideBar() {
  const { isOpen, onClose } = useSideBarDrawer()
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay boxShadow="none">
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="2" />
           

            <DrawerBody
              outline={0}
              outlineColor="none"
              outlineOffset={0}
              boxShadow="none"
              overflow="hidden"
            >
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box
      as="aside"
      w="72"
      mr="8"
      pt="6"
      position="fixed"
      h="88%"
      bg="gray.800"
      pl="5"
      ml="4"
      mt="60px"
      borderRadius="8"
    >
      <SideBarNav />
    </Box>
  )
}
