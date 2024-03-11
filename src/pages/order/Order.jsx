import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import Loader from "../../components/loader/Loader";
import { useContext } from "react";
import MyContext from "../../context/data/myContext";

function Order() {
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const context = useContext(MyContext);
  const { mode, loading, order } = context;

  return (
    <>
      {loading && <Loader />}
      {order.length > 0 ? (
        <Flex direction="column" align="center" pt="10">
          {order
            .filter((obj) => obj.userid === userid)
            .map((order) => (
              <Box
                key={order.id}
                maxW="5xl"
                mx="auto"
                p="6"
                shadow="md"
                bg={mode === "dark" ? "#282c34" : "white"}
                color={mode === "dark" ? "white" : ""}
                rounded="lg"
                mb="6"
                w="full"
              >
                {order.cartItems.map((item) => (
                  <Flex
                    key={item.id}
                    justify="space-between"
                    align="center"
                    mb="6"
                    p={10}
                    border='1px solid gray'
                    borderRadius={10}
                  >
                    <Image
                      src={item.imageUrl}
                      alt="product-image"
                      w="20"
                      rounded="lg"
                    />
                    <Box ml="4" flex="1">
                      <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color={mode === "dark" ? "white" : "gray.900"}
                      >
                        {item.title}
                      </Text>
                      <Text
                        fontSize="sm"
                        color={mode === "dark" ? "white" : "gray.700"}
                      >
                       {item.description.length > 250 ? `${item.description.substring(0, 250)}...` : item.description}
                      </Text>
                      <Text
                        fontSize="lg"
                        color={mode === "dark" ? "white" : "gray.700"}
                      >
                        ₹ {item.price}
                      </Text>
                    </Box>                   
                  </Flex>                
                ))}
              </Box>
            ))}
        </Flex>
      ) : (
        <Text textAlign="center" fontSize="2xl" color="white">
          Not Ordered
        </Text>
      )}
    </>
  );
}

export default Order;
