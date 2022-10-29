import { InputProps } from '@chakra-ui/react'

import { InputSearch } from './InputSearch'

type Props = InputProps & {
  value?: string | number | readonly string[]
  handleSearch?: () => void
  title?: string
}

export function FilterUser({ value, handleSearch, title, ...rest }: Props) {
  return (
    <InputSearch
      value={value}
      handleSearch={handleSearch}
      title={title}
      {...rest}
    />
  )
}
