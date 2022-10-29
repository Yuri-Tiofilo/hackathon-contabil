import { colorPrimaryBg } from "@/styles/global";
import {
  Input as ChackraInput,
  InputGroup,
  InputProps as ChackraInputProps,
  Icon,
  InputLeftElement,
  InputRightElement,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";

import { RiSearchLine } from "react-icons/ri";

type InputSearchProps = ChackraInputProps & {
  handleSearch?: () => void;
  title?: string;
};

const InputSearch = ({ handleSearch, title, ...rest }: InputSearchProps) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <InputGroup width={isWideVersion ? "sm" : "100%"} mb={["4", "0"]}>
      <InputLeftElement
        children={<Icon as={RiSearchLine} fontSize="16" />}
        pointerEvents="none"
      />

      <ChackraInput
        id="search"
        focusBorderColor={colorPrimaryBg}
        bg="gray.700"
        width={["100%", "sm"]}
        placeholder="Buscar por CNPJ ou Razão social"
        aria-autocomplete="none"
        variant="filled"
        _hover={{
          borderColor: colorPrimaryBg,
        }}
        color="white"
        size="md"
        {...rest}
      />

      <InputRightElement
        w="20"
        children={
          <Button w="20" colorScheme="blue" onClick={handleSearch}>
            {title}
          </Button>
        }
      />
    </InputGroup>
  );
};

export { InputSearch };
