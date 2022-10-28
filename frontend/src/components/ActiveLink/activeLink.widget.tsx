import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement } from 'react'

interface ActiceLinkProps extends LinkProps {
  children: React.ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiceLinkProps) {
  const { asPath } = useRouter()
  let isActive = false

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true
  }

  return (
    <Link {...rest} style={{ outline: 0, outlineOffset: 0 }}>
      {cloneElement(children, {
        color: isActive ? 'blue.500' : 'gray.50',
        bg: isActive ? 'gray.900' : 'gray.800'
      })}
    </Link>
  )
}
