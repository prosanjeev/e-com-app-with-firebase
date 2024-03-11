import React from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
  IconButton,
  Tooltip,
  Spacer,
  Button,
  Divider,
} from '@chakra-ui/react';
import {  FaHeart } from 'react-icons/fa';
import { StarIcon } from '@chakra-ui/icons';

const ProductInfo = () => {
  // Hardcoded product data
  const product = {
    id: 1,
    name: 'Product Name',
    brand: 'Brand Name',
    image: 'https://via.placeholder.com/400',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis justo nec diam convallis scelerisque.',
    rating: 3.5,
    price: '$19.99',
  };

  return (
    <Box maxW="1000px" mx="auto" p={4} height="600px" mt={10}>
      <Flex>
        <Box mr={4}>
          <Image src={product.image} alt={product.name} h='500px' w='500px'/>
        </Box>
        <Box flex={2} w='300px'>
          <Text fontSize="2xl" fontWeight="bold">
            {product.name}
          </Text>
          <Text fontSize="lg" mt={2}>
            {product.brand}
          </Text>
          <Text fontSize="lg" my={2}>
            {product.description}
          </Text>
          <Divider />
          <Flex align="center" mt={4}>
            <Box>
              {Array(5)
                .fill('')
                .map((_, index) => (
                  <StarIcon
                    key={index}
                    color={index < product.rating ? 'yellow.500' : 'gray.300'}
                  />
                ))}
            </Box>
            <Spacer />
            <Text fontSize="xl" fontWeight="bold" mr={4}>
              {product.price}
            </Text>
            <Button colorScheme="blue" variant="solid">
              Add to Cart
            </Button>
            <Tooltip label="Add to Wishlist" aria-label="Add to Wishlist">
              <IconButton
                aria-label="Add to Wishlist"
                icon={<FaHeart />}
                ml={2}
              />
            </Tooltip>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductInfo;
