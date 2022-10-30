import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Layout } from "../layout";
import {
  Box,
  Flex,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getUserLogged } from "@/utils/getUserLogged";

export default function Dasboard() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <Box flex="1" borderRadius={8} w="100%" bg="gray.800" p="8">
        <div>Bem vindo! 🚀</div>
      </Box>
      <Flex color='white' mt={8}>
        <Box flex="1" borderRadius={8} w="33%" bg="gray.800" p="8" mr={4}>
          <StatGroup>
            <Stat>
              <StatLabel>Usuários ativos</StatLabel>
              <StatNumber>4.899</StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                23.36% ao mês
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Box>
        <Box flex="1" borderRadius={8} w="33%" bg="gray.800" p="8">
          <StatGroup>
            <Stat>
              <StatLabel>Usuários inativos</StatLabel>
              <StatNumber>148</StatNumber>
              <StatHelpText>
                <StatArrow type='decrease' />
                5% ao mês
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Box>
        <Box flex="1" borderRadius={8} w="33%" bg="gray.800" p="8" ml={4}>
          <StatGroup>
            <Stat>
              <StatLabel>Novos usuários</StatLabel>
              <StatNumber>450</StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                15% ao mês
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Box>
      </Flex>
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
