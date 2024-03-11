import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiMenu, FiSun } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Button,
  Flex,
  Box,
  Text,
  Image,
  Stack,
  VisuallyHidden,
  Icon,
  HStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import myContext from "../../context/data/myContext";
import { useSelector } from "react-redux";

export default function Navbar() {
 

  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  
  const user = JSON.parse(localStorage.getItem('user'))
  const logout = () => {
    localStorage.clear('user');
    window.location.href = "/login";
}

  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  const cartItems = useSelector((state) => state.cart)

  return (
    <Flex bg="#B83280" sticky="top" zIndex="50">
      {/* Mobile menu */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Flex direction="column" p="4">
            <Link to="/allproducts" style={{ color: mode === 'dark' ? 'white' : '' }}>
              All Products
            </Link>
            <Link to="/order" style={{ color: mode === 'dark' ? 'white' : '' }}>
              Order
            </Link>
            <Link to="/dashboard" style={{ color: mode === 'dark' ? 'white' : '' }}>
              Admin
            </Link>
            <Text
              onClick={() => {
                // perform logout action
              }}
              style={{ color: mode === 'dark' ? 'white' : '' }}
              cursor="pointer"
            >
              Logout
            </Text>
            <Link to="/">
              <Image
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan Abromov"
                w="10"
                h="10"
                rounded="full"
              />
            </Link>
            <Box mt="4">
              <Text display="flex" alignItems="center">
                <Image
                  src="img/indiaflag.png"
                  alt=""
                  w="5"
                  mr="3"
                />
                <Text>{'INDIA'}</Text>
              </Text>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

      {/* desktop  */}
      <Stack position="relative" w="100vw">
        <Flex
          height="10"
          alignItems="center"
          justifyContent="center"
          bg={mode === "dark" ? "rgb(62 64 66)" : "pink.600"}
          px="4"
          fontSize="lg"
          fontWeight="medium"
          color={mode === "dark" ? "white" : "white"}
          sm={{ px: "6" }}
          lg={{ px: "8" }}
        >
          Get free delivery on orders over ₹300
        </Flex>

        <Box
          aria-label="Top"
          mt="-8px"
          bg={mode === "dark" ? "#282c34" : "gray.100"}
          px={{ base: "4", sm: "6", lg: "8" }}
          shadow="xl"
          color={mode === "dark" ? "white" : ""}
        >
          <Box height="16" alignItems="center">
            <Button
              variant="unstyled"
              onClick={onOpen}
              rounded="md"
              bg="white"
              p="0"
              color="gray.400"
              display={{ base: "block", lg: "none" }}
            >
              <Box>
                <VisuallyHidden>Open menu</VisuallyHidden>
              </Box>
              <Icon as={FiMenu} boxSize="6" color="currentColor" />
            </Button>

            <Flex justify={{md:"space-between", base:'end'}} h={{md:"100%", base:'0'}} align="center"  w={{base:'90vw', md:'100%'}}>
              {/* Logo */}
              <Box ml="4">
                <Link to="/">
                  <Text
                    fontSize={{md:'2xl', base:'larger'}}
                    fontWeight="bold"
                    color={mode === "dark" ? "white" : "black"}
                    px="2"
                    py="1"
                    rounded="md"
                    bg={mode === "dark" ? "gray.800" : ""}
                  >
                    E-Kart
                  </Text>
                </Link>
              </Box>

              <Flex
                ml="auto"
                items="center"
                align="center"
                fontSize="18px"
                fontWeight="500"
              >
                <Flex
                  display={{ base: "none", lg: "flex" }}
                  flex="1"
                  gap={5}
                  alignItems="center"
                  justifyContent="flex-end"
                  spaceX="6"
                >
                  <Link
                    to="/allproducts"
                    // fontSize="sm"
                    fontWeight="medium"
                    color={mode === "dark" ? "white" : "gray.700"}
                    _hover={{ color: "pink.600" }}
                  >
                    All Products
                  </Link>
                  <Link
                    to="/order"
                    fontSize="sm"
                    fontWeight="medium"
                    color={mode === "dark" ? "white" : "gray.700"}
                    _hover={{ color: "pink.600" }}
                  >
                    Order
                  </Link>

                  {user?.user?.email === 'sanjeevcse2k23@gmail.com' ?
                  <Link
                    to="/dashboard"
                    fontSize="sm"
                    fontWeight="medium"
                    color={mode === "dark" ? "white" : "gray.700"}
                    _hover={{ color: "pink.600" }}
                  >
                    Admin
                  </Link> : ""}

                  {user? <Text
                  onClick={logout}
                    color={mode === "dark" ? "white" : "gray.700"}
                    cursor="pointer"
                    _hover={{ color: "pink.600" }}
                  >
                    Logout
                  </Text> : <Link to='login'>Login</Link>}
                </Flex>

                <Flex ml="8" alignItems="center" color="gray.700" display={{base:'none'}}>
                  <Image
                    src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                    alt=""
                    boxSize="5"
                    flexShrink="0"
                  />
                  <Text ml="3" color={mode === "dark" ? "white" : ""}>
                    INDIA
                  </Text>
                </Flex>

                <Flex ml="8" alignItems="center" color="gray.700">
                  <Image
                    boxSize="10"
                    borderRadius="full"
                    src="https://avatars.githubusercontent.com/u/154009697?s=96&v=4"
                    alt="Dan_Abromov"
                  />
                </Flex>

                {/* Search */}
                <Flex ml="6">
                  <Button onClick={toggleMode} bg="none">
                    {mode === "light" ? (
                      <Icon as={FiSun} boxSize={6} />
                    ) : mode === "dark" ? (
                      <Icon
                        as={BsFillCloudSunFill}
                        boxSize={6}
                        color="white"
                        borderRadius="20%"
                      />
                    ) : (
                      ""
                    )}
                  </Button>
                </Flex>

                {/* Cart */}
                <Box ml="4" className="flow-root lg:ml-6">
                  <Link
                    to="/cart"
                   
                  >
                    <HStack  style={{ color: mode === "dark" ? "white" : "" }} gap={0}>
                      <Icon
                        as={AiOutlineShoppingCart}
                        boxSize="8"
                        color="currentColor"
                      />
                      <Text
                        ml="2"
                        fontSize="18px"
                        fontWeight="medium"
                        color="gray.700"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                      {cartItems.length}
                      </Text>
                    </HStack>
                    <VisuallyHidden>items in cart, view bag</VisuallyHidden>
                  </Link>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
}
