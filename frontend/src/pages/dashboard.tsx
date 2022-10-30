import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Layout } from "../layout";
import { Box } from "@chakra-ui/react";
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
