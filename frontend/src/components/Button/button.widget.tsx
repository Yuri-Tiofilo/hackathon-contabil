import { ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

type PropsButtonWidget = ButtonProps & {
  children: ReactNode;
};

export function ButtonWidget({ children, ...rest }: PropsButtonWidget) {
  return (
    <Button mt="6" size="lg" {...rest}>
      {children}
    </Button>
  );
}
