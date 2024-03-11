import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import MyContext from "../../context/data/myContext";

const TestimonialCard = ({ imgUrl, occupation, heading, des}) => {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <Stack textAlign="center" align='center' >
      <Box
        as="img"
        src={imgUrl}
        w="20"
        h="20"
        mb="8"
        objectFit="cover"
        objectPosition="center"
        borderRadius="full"
        border="2px"
        borderColor="gray.200"
        bg="gray.100"
        alt="testimonial"
      />
      <Text color={mode === "dark" ? "white" : ""} lineHeight="relaxed">
       {des}
      </Text>
      <Box w="10" h="1" bg="pink.500" rounded="full" mt="6" mb="4" />
      <Heading
        as="h2"
        fontSize="sm"
        fontWeight="medium"
        textTransform="uppercase"
        color="gray.900"
      >
       {heading}
      </Heading>
      <Text color="gray.500">{occupation}</Text>
    </Stack>
  );
};

export default TestimonialCard;
