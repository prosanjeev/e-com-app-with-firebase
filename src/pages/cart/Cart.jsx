import { useContext, useEffect, useState } from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import myContext from "../../context/data/myContext";
import Modal from "../../components/modal/Modal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";

function Cart() {
  const context = useContext(myContext);
  const { mode } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("delete item from cart");
  };
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price);
    });
    setTotalAmount(temp);
    // console.log(temp)
  }, [cartItems]);

  const shipping = parseInt(100);
  const grandTotal = shipping + totalAmount;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    // validation
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    console.log(addressInfo);

    var options = {
      key: "rzp_test_a1aLmcZsls6CW0",
      key_secret: "2YppQt3AGdn1oNGTaGquYVUw",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "E-Kart",
      description: "for testing purpose",
      handler: function (response) {
        // console.log(response)
        toast.success("Payment Successful");
        const paymentId = response.razorpay_payment_id;
        // store in firebase
        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId,
        };

        try {
          const result = addDoc(collection(fireDB, "orders"), orderInfo);
        } catch (error) {
          console.log(error);
        }
      },

      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  };

  return (
    <>
      <Box h="auto" bg={mode === "dark" ? "#282c34" : ""} pt="5" my={20}>
        <Heading mb="10" textAlign="center" fontSize="2xl" fontWeight="bold">
          Cart Items
        </Heading>
        <Flex
          mx="auto"
          maxW="5xl"
          justify="center"
          px="6"
          flexDirection={{ base: "column", md: "row" }}
          spaceX="6"
        >
          <Stack w="5xl">
            {cartItems.map((item, index) => (
              <Box key={index} rounded="lg" w={{ base: "full", md: "2/3" }}>
                <Flex
                  justify="between"
                  mb="6"
                  rounded="lg"
                  border="1px"
                  borderColor="gray.200"
                  boxShadow="xl"
                  p="6"
                  flexDirection={{ base: "column", sm: "row" }}
                  alignItems="center"
                  bg={mode === "dark" ? "rgb(32 33 34)" : ""}
                  color={mode === "dark" ? "white" : ""}
                >
                  <Image
                    src={item.imageUrl}
                    alt="product-image"
                    w="150px"
                    rounded="lg"
                    mb={{ base: 5, sm: 0 }}
                    boxSize={20}
                  />
                  <Box
                    ml={{ sm: 4 }}
                    flex={{ base: "none", sm: "1" }}
                    mt={{ base: 5, sm: 0 }}
                  >
                    <Box mt={{ base: 5, sm: 0 }}>
                      <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color={mode === "dark" ? "white" : ""}
                      >
                        {item.title}
                      </Text>
                      <Text
                        mt="1"
                        fontSize="lg"
                        fontWeight="semibold"
                        color={mode === "dark" ? "white" : ""}
                      >
                        ₹{item.price}
                      </Text>
                    </Box>
                    <Flex
                      mt={{ base: 4, sm: 0 }}
                      justify={{ base: "none", sm: "between" }}
                      spaceX="6"
                      alignItems="center"
                    >
                      <Icon
                        onClick={() => deleteCart(item)}
                        as={RiDeleteBin6Line}
                        w="6"
                        h="6"
                      />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Stack>

          <Box
            mt={{ base: 6, md: 0 }}
            h="full"
            rounded="lg"
            border="1px"
            borderColor="gray.200"
            p="6"
            boxShadow="md"
            w={{ base: "full", md: "1/4" }}
            bg={mode === "dark" ? "rgb(32 33 34)" : ""}
            color={mode === "dark" ? "white" : ""}
          >
            <Flex mb="2" justify="space-between" fontSize="22px">
              <Text color={mode === "dark" ? "white" : ""}>Subtotal</Text>
              <Text color={mode === "dark" ? "white" : ""}>
                ₹ {totalAmount}
              </Text>
            </Flex>
            <Flex justify="space-between" fontSize="22px">
              <Text color={mode === "dark" ? "white" : ""}>Shipping</Text>
              <Text color={mode === "dark" ? "white" : ""}>₹ {shipping}</Text>
            </Flex>
            <Divider my="4" />
            <Flex justify="space-between" mb="3" fontSize="26px">
              <Text fontWeight="bold" color={mode === "dark" ? "white" : ""}>
                Total
              </Text>
              <Box>
                <Text
                  mb="1"
                  fontWeight="bold"
                  color={mode === "dark" ? "white" : ""}
                >
                  ₹ {grandTotal}
                </Text>
              </Box>
            </Flex>
            <Modal
              name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Cart;
