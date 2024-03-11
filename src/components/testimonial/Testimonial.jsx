import { useContext } from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import MyContext from "../../context/data/myContext";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  const context = useContext(MyContext);
  const { mode } = context;

  return (
    <Box as="section" color="gray.600" fontFamily="body" mb="10">
      <Stack w="80vw" px="5" py="0" mx="auto">
        <Heading
          textAlign="center"
          fontSize="3xl"
          fontWeight="bold"
          color={mode === "dark" ? "white" : "black"}
        >
          Testimonial
        </Heading>
        <Heading
          textAlign="center"
          fontSize="2xl"
          fontWeight="semibold"
          mb="10"
          mt={2}
          color={mode === "dark" ? "white" : "black"}
        >
          What our{" "}
          <Text as="span" color="pink.500">
            customers
          </Text>{" "}
          are saying
        </Heading>
        <HStack mt="15">
          <Box
            width={{ base: "full", md: "1/3" }}
            mb={{ base: "6", lg: "0" }}
            p="4"
            justifyContent="center"
          >
            <TestimonialCard
              imgUrl="https://ecommerce-sk.vercel.app/img/kamal.png"
              occupation="Senior Product Designer"
              heading=" Kamal Nayan Upadhyay"
              des="Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware."
            />
          </Box>
          <Box boxShadow='sm'
            width={{ base: "full", lg: "1/3" }}
            mb={{ base: "6", lg: "0" }}
            p="4"
          >
            <TestimonialCard
              imgUrl="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
              occupation="UI Developer"
              heading="React Js"
              des="Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware."
            />
          </Box>
          <Box width={{ base: "full", lg: "1/3" }} p="4">
            <TestimonialCard
              imgUrl="https://webknudocs.vercel.app/logo/react.png"
              occupation="CTO"
              heading="React Js"
              des="Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk.
                Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
            />
          </Box>
        </HStack>
      </Stack>
    </Box>
  );
}

export default Testimonial;
