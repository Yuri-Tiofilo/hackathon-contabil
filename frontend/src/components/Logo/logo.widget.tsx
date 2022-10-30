import { Text, TextProps } from "@chakra-ui/react";

type LogoProps = TextProps;

export function Logo({ ...rest }: LogoProps) {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      _hover={{
        cursor: "pointer",
      }}
      w="64"
      {...rest}
    >
      Conte
      <Text as="span" ml="1" color="blue.500">
        +
      </Text>
    </Text>
  );
}
