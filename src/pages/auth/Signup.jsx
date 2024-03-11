import { Link } from "react-router-dom";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import MyContext from "../../context/data/myContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const signup = async () => {
    setLoading(true)
    if (name === "" || email === "" || password === "") {
        return toast.error("All fields are required")
    }

    try {
        const users = await createUserWithEmailAndPassword(auth, email, password);

        // console.log(users)

        const user = {
            name: name,
            uid: users.user.uid,
            email: users.user.email,
            time : Timestamp.now()
        }
        const userRef = collection(fireDB, "users")
        await addDoc(userRef, user);
        toast.success("Signup Succesfully")
        setName("");
        setEmail("");
        setPassword("");
        setLoading(false)
        
    } catch (error) {
        console.log(error)
        toast.error(error.code)
        setLoading(false)
    }
}

  return (
    <Flex h="100vh" align="center" justify="center">
      <Box bg="gray.800" px="10" py="10" rounded="xl" w="25rem" position='relative'>
          {loading && <Loader  />}


        <Box>
          <Text
            textAlign="center"
            color="white"
            fontSize="xl"
            fontWeight="bold"
            mb="4"
          >
            Signup
          </Text>
        </Box>
        <Box>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            bg="gray.600"
            mb="4"
            px="2"
            py="2"
            w="full"
            maxW="20em"
            rounded="lg"
            color="white"
            placeholder="Name"
            _placeholder={{ color: "gray.200" }}
            outline="none"
          />
        </Box>
        <Box>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            bg="gray.600"
            mb="4"
            px="2"
            py="2"
            w="full"
            maxW="20em"
            rounded="lg"
            color="white"
            placeholder="Email"
            _placeholder={{ color: "gray.200" }}
            outline="none"
          />
        </Box>
        <Box>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            bg="gray.600"
            mb="4"
            px="2"
            py="2"
            w="full"
            maxW="20em"
            rounded="lg"
            color="white"
            placeholder="Password"
            _placeholder={{ color: "gray.200" }}
            outline="none"
          />
        </Box>
        <Box display="flex" justifyContent="center" marginBottom="3">
          <Button
            bg="yellow.500"
            color="black"
            fontWeight="bold"
            px="2"
            py="2"
            rounded="lg"
            width="full"
            onClick={signup}
          >
            Signup
          </Button>
        </Box>
        <Box>
          <Text color="white">
            Have an acoount{" "}
            <Link to="/login" fontWeight="bold">
              <Box as="span" color="red">
                {" "}
                Login
              </Box>
            </Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default Signup;
