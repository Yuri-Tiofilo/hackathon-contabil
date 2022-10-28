import { colorPrimary } from "@/styles/global";
import {
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps as ChackraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChackraInputProps {
  name: string;
  nameForInput: string;
  label?: string;
  error?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, nameForInput, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error} h="90px">
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackraInput
        name={nameForInput}
        id={nameForInput}
        focusBorderColor={`${colorPrimary}.500`}
        bg="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
          borderColor: `${colorPrimary}.500`,
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
      {!!error && (
        <FormErrorMessage h="12px" fontSize="12px">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const InputForm = forwardRef(InputBase);
