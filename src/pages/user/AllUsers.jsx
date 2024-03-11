import { Box,  Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import MyContext from "../../context/data/myContext"
import { useContext } from "react"

const AllUsers = () => {
    const context = useContext(MyContext)
    const {   user } = context
  return (
    <Box  mx='auto' my={5}>    
    <Table>
        <Thead>
            <Tr>
                <Th>S.No.</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Reg. Date</Th>
            </Tr>
        </Thead>
        <Tbody>
            {user.map((user, index) => (
                <Tr key={index}>
                    <Td>{index + 1}.</Td>
                    <Td>{user.name}</Td>                  
                    <Td>{user.email}</Td>
                    <Td>{user.time.toDate().toLocaleDateString()}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
</Box>

  )
}

export default AllUsers