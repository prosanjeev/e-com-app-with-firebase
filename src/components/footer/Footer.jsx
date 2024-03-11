import { useContext } from 'react';
import { Box, Container, Link, Text } from '@chakra-ui/react';
import { FaCalendarDays } from "react-icons/fa6";
import { HiOutlineHandRaised } from "react-icons/hi2";
import MyContext from '../../context/data/myContext';

export default function Footer() {
    const context = useContext(MyContext);
    const { toggleMode, mode } = context;

    return (
        <Box as="footer" color="gray.600" fontFamily="body" bg={mode === 'dark' ? 'rgb(46 49 55)' : 'gray.300'}>
            <Container maxW="container.xl" px="5" py="24" mx="auto">
                <Box display={{ base: 'block', md: 'flex' }} justifyContent="space-between" alignItems="flex-start" textAlign={{ base: 'center', md: 'left' }} flexDirection={{ base: 'column', md: 'row' }}>
                    <Box flex="1" maxW={{ base: 'full', md: '1/4' }} mb={{ base: '10', md: '0' }} px="4">
                        <Text fontWeight="medium" textTransform="uppercase" fontSize="sm" mb="3" color={mode === 'dark' ? 'white' : ''}>
                            Categories
                        </Text>
                        <Box as="nav" listStyleType="none">
                            <Box as="li">
                                <Link href="#" color="gray.600" _hover={{ color: 'gray.800' }}>
                                    Home
                                </Link>
                            </Box>
                            <Box as="li">
                                <Link href="#" color="gray.600" _hover={{ color: 'gray.800' }}>
                                    Order
                                </Link>
                            </Box>
                            <Box as="li">
                                <Link href="#" color="gray.600" _hover={{ color: 'gray.800' }}>
                                    Local For Vocal
                                </Link>
                            </Box>
                            <Box as="li">
                                <Link href="#" color="gray.600" _hover={{ color: 'gray.800' }}>
                                    Cart
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box flex="1" maxW={{ base: 'full', md: '1/4' }} mb={{ base: '10', md: '0' }} px="4">
                        <Text fontWeight="medium" textTransform="uppercase" fontSize="sm" mb="3" color={mode === 'dark' ? 'white' : ''}>
                            Customer Service
                        </Text>
                        <Box as="nav" listStyleType="none">
                            <Box as="li">
                                <Link to="/returnpolicy" color="gray.600" _hover={{ color: 'gray.800' }}>
                                    Return Policy
                                </Link>
                            </Box>
                            <Box as="li">
                                <Link to="/about" color="gray.600" _hover={{ color: 'gray.800' }}>
                                    About
                                </Link>
                            </Box>
                            <Box as="li">
                                <Link to="/contact" color="gray.600" _hover={{ color: 'gray.800' }}>
                                    Contact Us
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box flex="1" maxW={{ base: 'full', md: '1/4' }} mb={{ base: '10', md: '0' }} px="4">
                        <Text fontWeight="medium" textTransform="uppercase" fontSize="sm" mb="3" color={mode === 'dark' ? 'white' : ''}>
                            Services
                        </Text>
                        <Box as="nav" listStyleType="none">
                            <Box as="li">
                                <Link to="/privacypolicy" color="gray.600" _hover={{ color: 'gray.800' }}>
                                    Privacy
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box flex="1" maxW={{ base: 'full', md: '1/4' }} px="4">
                        <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
                    </Box>
                </Box>
            </Container>
            <Box bg={mode === 'dark' ? 'rgb(55 57 61)' : 'gray.200'}>
                <Container maxW="container.xl" px="5" py="3" mx="auto" display="flex" alignItems="center" justifyContent="space-between">
                    <Link to="/" flex="1" display="flex" alignItems="center">
                        <Text fontSize="2xl" fontWeight="bold" color="black" px="2" py="1" rounded="md" bg={mode === 'dark' ? 'white' : ''}>
                            E-Kart
                        </Text>
                    </Link>
                    <Text fontSize="sm" color="gray.500" flex="1" textAlign="center" mt={{ base: '4', sm: '0' }}>
                        © 2024 E-Kart —
                        <Link href="https://twitter.com/knyttneve" rel="noopener noreferrer" target="_blank" color="gray.600" ml="1">
                            www.ekart.com
                        </Link>
                    </Text>
                    <Box display="flex" flex="1" justifyContent="center" mt={{ base: '4', sm: '0' }}>
                        <Link href="#" color="gray.500" ml="3">
                            <FaCalendarDays  h="5" w="5" />
                        </Link>
                        <Link href="#" color="gray.500" ml="3">
                            <HiOutlineHandRaised h="5" w="5" />
                        </Link>
                        <Link href="#" color="gray.500" ml="3">
                            <HiOutlineHandRaised h="5" w="5" />
                        </Link>
                        <Link href="#" color="gray.500" ml="3">
                            <HiOutlineHandRaised h="5" w="5" />
                        </Link>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
