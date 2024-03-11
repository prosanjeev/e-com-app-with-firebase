import  { useContext } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FaUserTie } from 'react-icons/fa';
import myContext from '../../../context/data/myContext';
import DashboardTab from './DashboardTab';

function Dashboard() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <>
      <Box as="section" color="gray.600" mt="10" mb="10" w='80vw' mx='auto'>
        <Box  px='10' mx='auto' mb='10'>
          <Flex  textAlign='center' m={4}>
            <Box flex="1 0 25%" p="4">
              <Box border="2px" bg={mode === 'dark' ? 'rgb(46 49 55)' : 'gray.100'} borderColor="gray.300" px="4" py="3" rounded="xl">
                <Box color="purple.500" w="12" h="12" mb="3" mx="auto">
                  <FaUserTie size={50} />
                </Box>
                <Heading as="h2" fontSize="3xl" fontWeight="medium" mb="1" color={mode === 'dark' ? 'white' : 'black'}>10</Heading>
                <Text fontSize="sm" fontWeight="bold"  color={mode === 'dark' ? 'white' : 'purple.500'}>Total Products</Text>
              </Box>
            </Box>
            <Box flex="1 0 25%" p="4">
              <Box border="2px" bg={mode === 'dark' ? 'rgb(46 49 55)' : 'gray.100'} borderColor="gray.300" px="4" py="3" rounded="xl">
                <Box color="purple.500" w="12" h="12" mb="3" mx="auto">
                  <FaUserTie size={50} />
                </Box>
                <Heading as="h2" fontSize="3xl" fontWeight="medium" mb="1" color={mode === 'dark' ? 'white' : 'black'}>10</Heading>
                <Text fontSize="sm" fontWeight="bold"  color={mode === 'dark' ? 'white' : 'purple.500'}>Total Orders</Text>
              </Box>
            </Box>
            <Box flex="1 0 25%" p="4">
              <Box border="2px" bg={mode === 'dark' ? 'rgb(46 49 55)' : 'gray.100'} borderColor="gray.300" px="4" py="3" rounded="xl">
                <Box color="purple.500" w="12" h="12" mb="3" mx="auto">
                  <FaUserTie size={50} />
                </Box>
                <Heading as="h2" fontSize="3xl" fontWeight="medium" mb="1" color={mode === 'dark' ? 'white' : 'purple.500'}>20</Heading>
                <Text fontSize="sm" fontWeight="bold"  color={mode === 'dark' ? 'white' : 'black'}>Total Users</Text>
              </Box>
            </Box>
           
          </Flex>
        <DashboardTab/>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
