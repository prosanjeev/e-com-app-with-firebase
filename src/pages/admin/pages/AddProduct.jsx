import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useContext } from "react";
import MyContext from "../../../context/data/myContext";

const AddProduct = () => {
  const context = useContext(MyContext);
  const { products, setProducts, addProduct } = context;

  return (
    <Box maxW="400px" mx="auto" p={4}>
      <FormControl id="title" isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          name="title"
          onChange={(e) => setProducts({ ...products, title: e.target.value })}
          value={products.title}
        />
      </FormControl>
      <FormControl id="image" isRequired mt={4}>
        <FormLabel>Image URL</FormLabel>
        <Input
          type="text"
          name="image"
          onChange={(e) =>
            setProducts({ ...products, imageUrl: e.target.value })
          }
          value={products.imageUrl}
        />
      </FormControl>
      <FormControl id="price" isRequired mt={4}>
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          name="price"
          onChange={(e) => setProducts({ ...products, price: e.target.value })}
          value={products.price}
        />
      </FormControl>
      <FormControl id="category" isRequired mt={4}>
        <FormLabel>Category</FormLabel>
        <Select
          name="category"
          onChange={(e) =>
            setProducts({ ...products, category: e.target.value })
          }
          value={products.category}
        >
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </Select>
      </FormControl>
      <FormControl id="title" isRequired>
        <FormLabel>Details</FormLabel>
        <Textarea
          name="Details"
          onChange={(e) =>
            setProducts({ ...products, description: e.target.value })
          }
        />
      </FormControl>
      <Button colorScheme="blue" mt={4} onClick={addProduct}>
        Add Product
      </Button>
    </Box>
  );
};

export default AddProduct;
