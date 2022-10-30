import { Layout } from "@/layout/index";
import { formattedPrice } from "@/utils/index";
import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export default function CashFlow() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout>
      <Box flex="1" borderRadius={8} w="100%" bg="gray.800" p={["4", "8"]}>
        <Flex justifyContent="space-between" flexDir={["column"]} mb="2">
          <Flex justifyContent="space-between">
            <Heading as="h2" size={"md"} fontWeight="bold" mb={["4", "0"]}>
              Balanço Patrimonial
            </Heading>
            <Button onClick={onOpen}>Gerar DRE</Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Debito</Th>
                <Th>Credito</Th>
                <Th />
                <Th />
                <Th />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Text fontWeight="bold">Ativo</Text>
                </Td>
                <Td>
                  <Text> {formattedPrice({ number: 19595.05 })}</Text>
                </Td>
                <Td>
                  <Text> - </Text>
                </Td>
                <Td>
                  <Text fontWeight="bold">Passivo</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight="bold">Ativo Circulante</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>
                  <Text> - </Text>
                </Td>
                <Td>
                  <Text fontWeight="bold">Passivo Circulante</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight="bold">Banco</Text>
                </Td>
                <Td>
                  <Text> {formattedPrice({ number: 1214.79 })}</Text>
                </Td>
                <Td>
                  <Text> - </Text>
                </Td>
                <Td>
                  <Text>Forncedores a pagar</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>
                  <Text>{formattedPrice({ number: 16846.01 })}</Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight="bold">Clientes</Text>
                </Td>
                <Td>
                  <Text> {formattedPrice({ number: 18360.8 })}</Text>
                </Td>
                <Td>
                  <Text> - </Text>
                </Td>
                <Td>
                  <Text>Distribuição de Lucro</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>
                  <Text>{formattedPrice({ number: 300 })}</Text>
                </Td>
              </Tr>
              <Tr bgColor="gray.700">
                <Td>
                  <Text fontWeight="bold">Total Passivo Circulante</Text>
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td>
                  <Text>{formattedPrice({ number: 17146.01 })}</Text>
                </Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>

                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight="bold">Ativo</Text>
                </Td>
                <Td>
                  <Text> {formattedPrice({ number: 19595.05 })}</Text>
                </Td>
                <Td>
                  <Text> - </Text>
                </Td>
                <Td>
                  <Text fontWeight="bold">Passivo</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="gray.800">
          <ModalHeader>DRE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th>DRE</Th>
                  <Th>Valores</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>
                    <Text fontWeight="bold">Receita Bruta</Text>
                  </Td>
                  <Td>
                    <Text> {formattedPrice({ number: 15595.05 })}</Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>Impostos Incidentes sobre Vendas</Text>
                  </Td>
                  <Td>
                    <Text> -</Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text fontWeight="bold">Receita liquida</Text>
                  </Td>
                  <Td>
                    <Text> {formattedPrice({ number: 19595.05 })}</Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>Custo das Mercadorias vendidas - CMV</Text>
                  </Td>
                  <Td>
                    <Text> -</Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button onClick={onClose}>OK</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
