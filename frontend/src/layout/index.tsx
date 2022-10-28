import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { Header } from '@/components/Header/header.widget'
import { SideBar } from '@/components/SideBar/sideBar.widget'

// import { SideBar } from '../components/SideBar'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" pr={["0", "4"]} h="100%">
        <SideBar />
        <Box w="100%" p={["2", "0"]} ml={['1', '320px']} mr={['1', '0']} mt="60px">
          {children}
        </Box>
      </Flex>
    </Flex>
  )
}
