import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Layout } from "@/layout/index";
import { GetServerSideProps } from "next";
import { useState, useRef } from "react";
import { FilterUser } from "@/components/FilterUser";
import { colorPrimaryBg } from "@/styles/global";
import { AiOutlineEye } from "react-icons/ai";
import { useRouter } from "next/router";
import { UserDTO } from "@/dtos/users.types";

interface UserProps {
  users: UserDTO[];
}

export default function User({ users }: UserProps) {
  const { push } = useRouter();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [usersData, setUsersData] = useState<UserDTO[]>(users);
  const [isLoading, setLoading] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const { isOpen, onOpen , onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);


  const isTermAccepted:string = 'reSendTerm';

  function handleDetailsUser(id: string) {
    push(`/users/${id}`);
  }

  function renderTable() {
    return (
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>Usuário</Th>
            {isWideVersion && <Th>Termo aceito?</Th>}
            <Th width="10px" />
            <Th width="10px" />
          </Tr>
        </Thead>
        <Tbody>
          {users.map((element) => (
            <Tr key={element.cnpj}>
              <Td>
                <Box>
                  <Text fontWeight="bold"> {element.corporate_name}</Text>
                  <Text fontWeight="normal" fontSize="small" color="gray.300">
                    {element.cnpj}
                  </Text>
                  {!isWideVersion ? (
                    <Text
                      fontWeight="normal"
                      mt="1                                                                                                                                                                                                                         "
                    >
                      Termo aceito?{" "}
                      <b>{element.isAccept ? "Aceito" : "Não aceito"}</b>
                    </Text>
                  ) : null}
                </Box>
              </Td>
              {isWideVersion && (
                <>
                  <Td>{element.isAccept ? "Aceito" : "Não aceito"}</Td>
                  { isTermAccepted  === 'reSendTerm' && (
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="small"
                        colorScheme="teal"
                        variant="outline"
                        _hover={{
                          cursor: "pointer",
                        }}
                        onClick={onOpen}
                      >
                        Re-Enviar Termo
                      </Button>
                    </Td>
                  )}
                  { isTermAccepted === 'sendTerm' && (
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="small"
                        colorScheme="teal"
                        variant="outline"
                        _hover={{
                          cursor: "pointer",
                        }}
                        onClick={onOpen}
                      >
                        Enviar Termo
                      </Button>
                    </Td>
                  )}
                </>
              )}
              {isWideVersion && (
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="blue"
                    leftIcon={<Icon as={AiOutlineEye} fontSize="16" />}
                    _hover={{
                      cursor: "pointer",
                    }}
                    onClick={() => handleDetailsUser("1")}
                  >
                    Visualizar
                  </Button>
                </Td>
              )}
              {!isWideVersion && (
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="blue"
                    _hover={{
                      cursor: "pointer",
                    }}
                    onClick={() => handleDetailsUser("1")}
                  >
                    <Icon as={AiOutlineEye} fontSize="16" />
                  </Button>
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay color="white">
            <AlertDialogContent bgColor="gray.800">
              <AlertDialogHeader fontSize='lg' fontWeight='bold' color="white">
                Enviar email de permissão de dados
              </AlertDialogHeader>

              <AlertDialogBody>
                <p>Você tem certeza?</p>
                <p>Você não poderá desfazer esta ação mais tarde.</p>
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button colorScheme='white' variant='outline' color='white' ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme='green' onClick={onClose} ml={3}>
                  Enviar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Table>
    );
  }

  return (
    <Layout>
      <Box flex="1" borderRadius={8} w="100%" bg="gray.800" p={["4", "8"]}>
        <Flex justifyContent="space-between" flexDir={["column", "row"]}>
          <Heading as="h2" size={"md"} fontWeight="bold" mb={["4", "0"]}>
            Listagem de Usuários
          </Heading>

          <FilterUser
            value={valueSearch}
            onChange={(text) => setValueSearch(text.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                // fetchUserSearch(valueSearch);
                console.log("");
              }
            }}
            handleSearch={() => console.log("ve4io ")}
            title="Buscar"
          />
        </Flex>
        {!isLoading ? (
          <>{renderTable()}</>
        ) : (
          <CircularProgress color={colorPrimaryBg} />
        )}
      </Box>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<UserProps> = async () => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  // const users = await response.json();

  return {
    props: {
      users: [
        {
          corporate_name: "Yuri Tiofilo escritório LTDA",
          cnpj: "02.628.768/0001-30",

          isAccept: false,
        },
      ],
    },
  };
};
