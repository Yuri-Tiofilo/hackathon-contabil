import { Layout } from "@/layout/index";
import axios from "axios";
import { formattedPrice } from "@/utils/index";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stat,
  StatArrow,
  StatHelpText,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
// import { apiKey } from "@/services/getToken";
import { useEffect, useState } from "react";
// import Calendar from "react-calendar";
import apiTransaction from "../../mock/api.json";
import { mdata } from "@/utils/maskInput";
import { TransactionDTO } from "@/dtos/transactions";
import { RiArrowLeftFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { Pagination } from "@/components/Pagination";

export default function UserDetails() {
  const { back, push, query } = useRouter();

  const [date, setDate] = useState("");
  const [dateTwo, setDateTwo] = useState("");
  const [transactions, setTransactions] = useState<TransactionDTO[]>(
    [] as TransactionDTO[]
  );

  async function fetchTransactions() {
    const transactionResponse = apiTransaction.results;

    const transactionData = await axios.get("https://localhost:8000/api/", {
      headers: {
        "X-API-KEY": "",
        accept: "application/json",
        "content-type": "application/json",
      },
    });

    setTransactions(apiTransaction.results as TransactionDTO[]);

    console.log("transactionResponse", transactionResponse);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <Layout>
      <Box flexDir="row">
        <Box flex="1" borderRadius={8} w="100%" bg="gray.800" p={["4", "8"]}>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h3" size="lg" display="flex">
              <RiArrowLeftFill
                style={{ marginRight: 10, cursor: "pointer" }}
                onClick={() => back()}
              />
              Detalhes do usuário
            </Heading>
            <Button>Pedir permissão</Button>
          </Flex>
          <Flex mt="4">
            <Text>Razão Social: </Text>
            <Text ml="1" fontWeight="bold">
              {" "}
              Yuri Tiofilo escritório LTDA{" "}
            </Text>
          </Flex>
          <Flex>
            <Text>CNPJ: </Text>
            <Text ml="1" fontWeight="bold">
              {" "}
              02.628.768/0001-30{" "}
            </Text>
          </Flex>
          <Heading as="h4" size="md" mt="4">
            Extrato
          </Heading>
          <Flex mt="4">
            <Input
              value={date}
              onChange={(e) => setDate(mdata(e.target.value))}
              placeholder="Selecione uma data inicial"
              w={["100%", "320px"]}
              maxLength={10}
            />
            <Input
              value={dateTwo}
              onChange={(e) => setDateTwo(mdata(e.target.value))}
              placeholder="Selecione uma data final"
              maxLength={10}
              w={["100%", "320px"]}
              ml="2"
            />
            <Flex justifyContent="flex-end" ml="2">
              <Button
                colorScheme="green"
                onClick={() => push(`/users/cash-flow/${query.id}`)}
              >
                Gerar fluxo de caixa
              </Button>
            </Flex>
          </Flex>
          <Box>
            <TableContainer mt="2">
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th>Descricão e Data</Th>
                    <Th>Tipo</Th>
                    <Th>Valor</Th>
                    <Th>Saldo</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {transactions.map((element) => (
                    <Tr key={element.id} _hover={{ cursor: "pointer" }}>
                      <Td>
                        <Box>
                          <Text color="gray.500">
                            {format(new Date(element.date), "dd/MM/yyyy")}
                          </Text>
                          <Text
                            style={{
                              width: "270px",
                              display: "inline-block",
                              whiteSpace: "pre",
                              overflow: "hidden",
                            }}
                            w="14"
                            textOverflow="ellipsis"
                          >
                            {element.description}
                          </Text>
                        </Box>
                      </Td>
                      <Td>
                        <Text>
                          {element.type === "DEBIT" ? "Saída" : "Entrada"}
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          color={element.type === "DEBIT" ? "red" : "green"}
                        >
                          <Stat>
                            <StatArrow
                              type={
                                element.type !== "DEBIT"
                                  ? "increase"
                                  : "decrease"
                              }
                            />
                            {formattedPrice({ number: element.amount })}
                          </Stat>
                        </Text>
                      </Td>
                      <Td>
                        <Text>
                          {formattedPrice({ number: element.balance })}
                        </Text>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Pagination />
          </Box>

          {/* <Calendar onChange={setDate} value={date} />
          <Calendar onChange={setDate} value={date} /> */}
        </Box>
      </Box>
    </Layout>
  );
}
