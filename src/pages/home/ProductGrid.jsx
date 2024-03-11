import { useContext, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import myContext from "../../context/data/myContext";
import ProductCard from "../../components/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

function ProductGrid() {
  const context = useContext(myContext);
  const { mode, product } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  // add to cart
  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("add to cart",{ autoClose: 800 });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Box as="section" color="gray.600" fontFamily="body">
      <Box maxW="80vw" px="5" py={{ base: "8", md: "16" }} mx="auto">
        <Box width={{ base: "full", lg: "1/2" }} mb={{ base: "6", lg: "10" }}>
          <Box
            fontSize={{ base: "2xl", sm: "3xl" }}
            fontWeight="medium"
            fontFamily="title"
            marginBottom="2"
            color={mode === "dark" ? "white" : ""}
            marginTop="4"
          >
            Our Latest Collection
          </Box>

          <Box
            height="1"
            width="20"
            backgroundColor="pink.600"
            borderRadius="md"
          />
        </Box>

        <Flex m={4} gap={10} flexWrap="wrap">
          {product.map((item, index) => (
            <Box key={index} p="4" width={{ base: "full", md: "300px" }}>
              <ProductCard item={item} onClick={() => addCart(item)} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default ProductGrid;
