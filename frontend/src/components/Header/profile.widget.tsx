import {
  Flex,
  Text,
  Box,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
  user: {
    email: string
    name: string
  }
  handleSignOut: () => void
}

export function Profile({
  showProfileData = true,
  user,
  handleSignOut
}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          {user ? (
            <>
              <Text>{user.name}</Text>
              <Text color="gray.300" fontSize="small">
                {user.email}
              </Text>
            </>
          ) : null}
        </Box>
      )}
      <Menu>
        <MenuButton>
          <Avatar size="md" bg="blue.500" />
        </MenuButton>
        <MenuList
          bgColor="gray.800"
          border="1px"
          borderColor="gray.700"
          outline={0}
        >
          <MenuItem
            bgColor="gray.800"
            _hover={{ bgColor: 'gray.800' }}
            outline={0}
            onClick={() => handleSignOut()}
            _active={{
              bgColor: 'gray.800'
            }}
            _focus={{
              bgColor: 'transparent'
            }}
          >
            SignOut
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
