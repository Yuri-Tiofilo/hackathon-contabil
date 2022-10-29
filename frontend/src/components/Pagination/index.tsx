import { Stack, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

type PaginationProps = {
  number: string;
};

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong> 13</strong> de <strong>13</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem isCurrent number={1} />
        {/* <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} /> */}
      </Stack>
    </Stack>
  );
}
