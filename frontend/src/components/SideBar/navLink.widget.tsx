import { Link as ChackraLink, Icon, Text, LinkProps } from '@chakra-ui/react'
import { ElementType } from 'react'
import { ActiveLink } from '../ActiveLink/activeLink.widget'

interface NavLinkProps extends LinkProps {
  icon: ElementType
  children: string
  href: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChackraLink
        display="flex"
        align="center"
        {...rest}
        _hover={{
          bg: 'gray.900'
        }}
        w="250px"
        p="3"
        borderRadius="8"
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChackraLink>
    </ActiveLink>
  )
}
