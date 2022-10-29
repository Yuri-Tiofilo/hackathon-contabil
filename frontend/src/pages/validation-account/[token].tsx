import { ButtonWidget } from "@/components/Button/button.widget";
import { colorPrimaryBg } from "@/styles/global";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export default function ValidationAccount() {
  const { query } = useRouter();
  function handleAcceptedInTerms() {
    /**
     * send info api with token
     */

    const token = query.token;
    console.log(token);
  }
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        w="100%"
        maxW={["360px", "380px"]}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Text fontWeight="bold" fontSize="18px">
          Você permite compartilhar seus dados com o escritório de
          contabilidade?
        </Text>
        <ButtonWidget w="100%" type="button">
          Aceitar
        </ButtonWidget>

        <ButtonWidget
          w="100%"
          colorScheme="none"
          border="1px"
          borderColor="blue.500"
          type="submit"
          color={colorPrimaryBg}
        >
          Não aceitar
        </ButtonWidget>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.params;

  if (!params) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
