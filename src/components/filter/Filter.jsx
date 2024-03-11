import { useContext } from "react";
import {
  Box,
  Input,
  Select,
  Button,
  Container,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaRegPaperPlane } from "react-icons/fa";
import myContext from "../../context/data/myContext";

function Filter() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <Container maxW="container.lg" mx="auto" px="4" mt="5">
      <Box
        p="5"
        rounded="lg"
        bg={mode === "dark" ? "#282c34" : "gray.100"}
        boxShadow="xl"
        border="1px"
        borderColor="gray.200"
        style={{ color: mode === "dark" ? "white" : "" }}
      >
        <Box position="relative">
          <Box
            position="absolute"
            display="flex"
            alignItems="center"
            marginLeft="2"
            height="full"
          >
            <Icon
              as={FaRegPaperPlane}
              boxSize="4"
              color="primary-gray-dark"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            />
          </Box>
          <Input
            type="text"
            name="searchkey"
            id="searchkey"
            placeholder="Search here"
            px="8"
            py="3"
            width="full"
            rounded="md"
            bg={mode === "dark" ? "rgb(64 66 70)" : ""}
            border="transparent"
            outline="0"
            fontSize="sm"
            color={mode === "dark" ? "white" : ""}
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt="4"
        >
          <Text ml={2} fontSize="medium">
            Filters
          </Text>
          <Button
            px="4"
            py="2"
            // bg="gray.50"
            bg={mode === "dark" ? "rgb(64 66 70)" : ""}
            _hover={{ bg: "gray.200", color: "black" }}
            color={mode === "dark" ? "white" : ""}
            text="gray.800"
            textSm
            fontWeight="medium"
            roundedMd
          >
            Reset Filter
          </Button>
        </Box>
        <Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            md={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            xl={{ gridTemplateColumns: "repeat(4, 1fr)" }}
            gap="4"
            mt="4"
          >
            <Select
              px="1"
              py="3"
              w="full"
              rounded="md"
              bg={mode === "dark" ? "rgb(64 66 70)" : "gray.50"}
              border="transparent"
              outline="0"
              focusBorderColor="gray.500"
              focusBg="white"
              focusRing="0"
              fontSize="lg"
              color={mode === "dark" ? "white" : "black"}
            >
              <option value="jacket">Jacket</option>
              <option value="shirt">shirt</option>
              <option value="mobile">mobile</option>
              <option value="jacket">Jacket</option>
            </Select>
            <Select
               px="1"
               py="3"
               w="full"
               rounded="md"
               bg={mode === "dark" ? "rgb(64 66 70)" : "gray.50"}
               border="transparent"
               outline="0"
               focusBorderColor="gray.500"
               focusBg="white"
               focusRing="0"
               fontSize="lg"
               color={mode === "dark" ? "white" : ""}
            >
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Filter;
