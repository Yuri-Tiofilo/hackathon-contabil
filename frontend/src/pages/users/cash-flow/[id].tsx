import { Layout } from "@/layout/index";
import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export default function CashFlow() {
  return (
    <Layout>
      <Box flex="1" borderRadius={8} w="100%" bg="gray.800" p={["4", "8"]}>
        <div>fluxo de caixa</div>
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
