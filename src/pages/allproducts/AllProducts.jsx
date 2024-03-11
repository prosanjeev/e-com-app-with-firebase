import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Img,
} from "@chakra-ui/react";
import MyContext from "../../context/data/myContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const context = useContext(MyContext);
  const { product, edithandle, deleteProduct } = context;

  return (
    <Box w="80vw" mx="auto" my={10}>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>S.NO</Th>
            <Th>Image</Th>
            <Th>Title</Th>
            <Th>Price</Th>
            <Th>Category</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {product.map((item, index) => (
            <Tr key={item.id}>
              <Td>{index + 1}</Td>
              <Td>
                <Img src={item.imageUrl} boxSize={10} />
              </Td>
              <Td>{item.title}</Td>
              <Td>{item.price}</Td>
              <Td>{item.category}</Td>
              <Td>{item.date}</Td>
              <Td>
                <Link to='/update-product'>
                  <Button colorScheme="blue" onClick={() => edithandle(item)}>
                    Update
                  </Button>
                </Link>
                <Button
                  colorScheme="red"
                  ml={2}
                  onClick={() => deleteProduct(item)}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AllProduct;
