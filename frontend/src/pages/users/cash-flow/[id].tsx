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
            <Flex>
              <Button
                bg="transparent"
                border="1px"
                borderColor="blue.500"
                mr="2"
                color="blue.500"
                _hover={{
                  bg: "transparent",
                }}
              >
                Gerar EXCEL
              </Button>
              <Button onClick={onOpen}>Gerar DRE</Button>
            </Flex>
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
                  <Text> {formattedPrice({ number: 51214.79 })}</Text>
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
                  <Text> {formattedPrice({ number: 51214.79 })}</Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight="bold">Ativo Circulante</Text>
                </Td>
                <Td>
                  <Text> {formattedPrice({ number: 11214.79 })}</Text>
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
                  <Text fontWeight="bold">Caixa</Text>
                </Td>
                <Td>
                  <Text> {formattedPrice({ number: 9980.54 })}</Text>
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
                  <Text>-</Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight="bold">Banco</Text>
                </Td>
                <Td>
                  <Text> -</Text>
                </Td>
                <Td>
                  <Text> - </Text>
                </Td>
                <Td>
                  <Text>-</Text>
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
                  <Text fontWeight="bold">Clientes</Text>
                </Td>
                <Td>
                  -{/* <Text> {formattedPrice({ number: 18360.8 })}</Text> */}
                </Td>
                <Td>
                  <Text> - </Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>-</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight="bold">Aplicações Financeira</Text>
                </Td>
                <Td>
                  -{/* <Text> {formattedPrice({ number: 18360.8 })}</Text> */}
                </Td>
                <Td>
                  <Text> - </Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>-</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight="bold">ATIVO NÃO CIRCULANTE</Text>
                </Td>
                <Td>
                  <Text> {formattedPrice({ number: 40000.0 })}</Text>
                </Td>
                <Td>
                  <Text> - </Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>-</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight="bold">Imobilizado</Text>
                </Td>
                <Td>
                  <Text> {formattedPrice({ number: 40000.0 })}</Text>
                </Td>
                <Td>
                  <Text> - </Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>-</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight="bold">Imobilizado</Text>
                </Td>
                <Td>
                  <Text> {formattedPrice({ number: 40000.0 })}</Text>
                </Td>
                <Td>
                  <Text> - </Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>
                  <Text>-</Text>
                </Td>
                <Td>-</Td>
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
                <Td></Td>
                <Td></Td>
                <Td></Td>

                <Td>
                  <Text fontWeight="bold">Patrimonio Liquido</Text>
                </Td>
                <Td>-</Td>
                <Td>{formattedPrice({ number: 51214.79 })}</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>

                <Td>
                  <Text>Capital Social</Text>
                </Td>
                <Td>-</Td>
                <Td>{formattedPrice({ number: 49700.0 })}</Td>
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
                <Td></Td>
                <Td></Td>
                <Td></Td>

                <Td>
                  <Text fontWeight="bold">Reservas de Lucros ou prejuizos</Text>
                </Td>
                <Td>-</Td>
                <Td>{formattedPrice({ number: 1514.79 })}</Td>
              </Tr>

              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>

                <Td>
                  <Text>Lucro do exercicio anteriores</Text>
                </Td>
                <Td>-</Td>
                <Td>-</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>

                <Td>
                  <Text>Lucro do exercicio</Text>
                </Td>
                <Td>-</Td>
                <Td>{formattedPrice({ number: 1514.79 })}</Td>
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
                    <Text> {formattedPrice({ number: 18360.8 })}</Text>
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
                    <Text fontWeight="bold">
                      {" "}
                      {formattedPrice({ number: 18360.8 })}
                    </Text>
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
                <Tr>
                  <Td>
                    <Text>Lucro Bruto</Text>
                  </Td>
                  <Td>
                    <Text fontWeight="bold">
                      {" "}
                      {formattedPrice({ number: 18360.8 })}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>Despesas Operacionais</Text>
                  </Td>
                  <Td>
                    <Text>-{formattedPrice({ number: 301.02 })}</Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>Despesas com vendas</Text>
                  </Td>
                  <Td>
                    <Text fontSize="15px">
                      -{formattedPrice({ number: 16544.99 })}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>Despesas Financeiras</Text>
                  </Td>
                  <Td>-</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>Receitas Financeiras</Text>
                  </Td>
                  <Td>-</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>Despesas gerais e administrativas</Text>
                  </Td>
                  <Td>-</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text fontWeight="bold">Lucro/prejuízo operacional</Text>
                  </Td>
                  <Td>
                    <Text fontWeight="bold">
                      {formattedPrice({ number: 1514.79 })}
                    </Text>
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
