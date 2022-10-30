import { Layout } from "@/layout/index";
import {
  Box,
  Button,
  Flex,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

import type { GetServerSideProps } from "next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseCookies } from "nookies";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputForm } from "@/components/Form/inputForm.widget";
import { colorPrimary } from "@/styles/global";
import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "@/services/api";

type CreateUserDto = {
  cnpj: string;
  corporate_name: string;
};

const createUserSign = yup.object().shape({
  cnpj: yup.string().required("CNPJ obrigatório"),
  corporate_name: yup.string().required("Razão Social é obrigatório"),
});

export default function CreateUser() {
  const { back, push } = useRouter();
  const [type, setType] = useState("");
  const toast = useToast();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<CreateUserDto>({
    resolver: yupResolver(createUserSign),
  });

  const handleCreateUser: SubmitHandler<CreateUserDto> = async (values) => {
    if (type === "") {
      return toast({
        status: "error",
        title: "Coloque uma Permissão",
      });
    }

    const response = await api.post(`/api/user/office/create`, {
      ...values,
      type,
    });
    if (response.status === 200) {
      return push(`/users`);
    }
    return toast({
      status: "error",
      title: "Error in request create User",
    });
  };

  return (
    <Layout>
      <Box
        as="form"
        flex="1"
        borderRadius={8}
        w="100%"
        bg="gray.800"
        p={["4", "8"]}
        onSubmit={handleSubmit(handleCreateUser)}
      >
        <Stack spacing="2">
          <InputForm
            label="CNPJ"
            nameForInput="NCPJ"
            placeholder="CNPJ"
            error={errors.cnpj && errors.cnpj?.message}
            {...register("cnpj")}
          />
          <InputForm
            label="Razão Soial"
            nameForInput="corporate_name"
            placeholder="Razão Soial"
            error={errors.corporate_name && errors.corporate_name?.message}
            {...register("corporate_name")}
          />

          <Text fontWeight="medium">Selcione o tipo de usuário</Text>

          <Select
            placeholder="Tipos"
            bg="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900",
              borderColor: `${colorPrimary}.500`,
            }}
            size="lg"
            onChange={(e) => setType(e.target.value)}
          >
            <option style={{ color: "black" }} value="ADMIN">
              Admin - Associação
            </option>
            <option style={{ color: "black" }} value="business">
              Escritório de contabilidade
            </option>
            <option style={{ color: "black" }} value="clients">
              Cliente
            </option>
          </Select>
        </Stack>

        <Flex justifyContent="flex-end" mt="6">
          <Button
            bg="transparent"
            border="1px"
            borderColor="blue.500"
            color="blue.500"
            mr="2"
            onClick={() => back()}
            _hover={{
              bg: "transparent",
            }}
          >
            Voltar
          </Button>
          <Button isLoading={isSubmitting} type="submit">
            Continuar
          </Button>
        </Flex>
      </Box>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  if (!cookies["hackathon.token"]) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
