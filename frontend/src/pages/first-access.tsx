import { useContext } from "react";
import type { GetServerSideProps } from "next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseCookies } from "nookies";
import { Flex, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

import { AuthContext } from "@/contexts/AuthContext";

import { ButtonWidget } from "@/components/Button/button.widget";
import { InputForm } from "@/components/Form/inputForm.widget";
import { Logo } from "@/components/Logo/logo.widget";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  cnpj: yup.string().required("CNPJ é obrigatório"),
});

export default function FirstAccess() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const { signIn } = useContext(AuthContext);

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await signIn(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={["360px", "380px"]}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Logo pb="4" />
        <Stack spacing="2">
          <InputForm
            label="Email"
            nameForInput="email"
            type="email"
            placeholder="E-mail"
            error={errors.email && errors.email?.message}
            {...register("email")}
          />
        </Stack>

        <ButtonWidget w="100%" type="submit" isLoading={isSubmitting}>
          Confirmar
        </ButtonWidget>
      </Flex>
    </Flex>
  );
}
