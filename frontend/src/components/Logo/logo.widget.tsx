import { Text, TextProps } from "@chakra-ui/react";

type LogoProps = TextProps;

export function Logo({ ...rest }: LogoProps) {
  return (
    <Text
      fontSize={["2xl", "4xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      _hover={{
        cursor: "pointer",
      }}
      w="64"
      {...rest}
    >
      lOGO
    </Text>
  );
}
