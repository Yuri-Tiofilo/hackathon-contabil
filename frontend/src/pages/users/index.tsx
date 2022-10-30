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
} from "@chakra-ui/react";
import { Layout } from "@/layout/index";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { FilterUser } from "@/components/FilterUser";
import { colorPrimaryBg } from "@/styles/global";
import { AiOutlineEye } from "react-icons/ai";
import { useRouter } from "next/router";
import { UserDTO } from "@/dtos/users.types";
import { api } from "@/services/api";
import { parseCookies } from "nookies";

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

  function handleDetailsUser(id: string) {
    push(`/users/${id}`);
  }

  async function fetchUsers() {
    const { "hackathon.token": token } = parseCookies();
    const response = await api.post("/api/business/all-users", {
      token,
    });

    console.log(response);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function renderTable() {
    return (
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>Usuário</Th>
            {isWideVersion && <Th>Termo aceito?</Th>}
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
                <Td>{element.isAccept ? "Aceito" : "Não aceito"}</Td>
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
