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
  StatArrow,
  theme,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getUserLogged } from "@/utils/getUserLogged";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Charts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {},
  // dataLabels: {
  //   enabled: false,
  // },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-10-29T00:00:00.000Z",
      "2021-10-28T00:00:00.000Z",
      "2021-10-27T00:00:00.000Z",
      "2021-10-26T00:00:00.000Z",
      "2021-10-25T00:00:00.000Z",
      "2021-10-24T00:00:00.000Z",
      "2021-10-23T00:00:00.000Z",
    ],
  },
  colors: [theme.colors.blue[500]],
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 28, 51, 20, 0] }];

export default function Dasboard() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <Box flex="1" borderRadius={8} w="100%" bg="gray.800" p="8">
        <div>Bem vindo! 🚀</div>
      </Box>
      <Flex color="white" mt={8}>
        <Box flex="1" borderRadius={8} w="33%" bg="gray.800" p="8" mr={4}>
          <StatGroup>
            <Stat>
              <StatLabel>Usuários ativos</StatLabel>
              <StatNumber>4.899</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
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
                <StatArrow type="decrease" />
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
                <StatArrow type="increase" />
                15% ao mês
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Box>
      </Flex>
      <Charts options={options} series={series} type="area" height={320} />
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
