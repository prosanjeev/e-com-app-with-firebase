import { Box,  Img, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import MyContext from "../../context/data/myContext"
import { useContext } from "react"

const AllOrder = () => {
    const context = useContext(MyContext)
    const {   order } = context
  return (
    <Box  mx='auto' my={5}>    
    <Table>
        <Thead>
            <Tr>
                <Th>S.No.</Th>
                <Th>Payment Id</Th>
                <Th>Image</Th>
                <Th>Title</Th>
                <Th>Price</Th>
                <Th>Category</Th>
                <Th>Name</Th>
                <Th>Address</Th>
                <Th>Pincode</Th>
                <Th>Phone Number</Th>
                <Th>Email</Th>
                <Th>Date</Th>
            </Tr>
        </Thead>
        <Tbody>
            {order.map((allorder, index) => (
                <Tr key={index}>
                    <Td>{index + 1}.</Td>
                    <Td>{allorder.paymentId}</Td>
                    <Td>
                        <Img boxSize={20} src={allorder.cartItems[0].imageUrl} alt="img" />
                    </Td>
                    <Td>{allorder.cartItems[0].title}</Td>
                    <Td>₹{allorder.cartItems[0].price}</Td>
                    <Td>{allorder.cartItems[0].category}</Td>
                    <Td>{allorder.addressInfo.name}</Td>
                    <Td>{allorder.addressInfo.address}</Td>
                    <Td>{allorder.addressInfo.pincode}</Td>
                    <Td>{allorder.addressInfo.phoneNumber}</Td>
                    <Td>{allorder.email}</Td>
                    <Td>{allorder.date}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
</Box>

  )
}

export default AllOrder