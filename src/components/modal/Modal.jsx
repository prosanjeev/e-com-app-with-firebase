import { Button, Modal as ChakraModal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, FormControl, FormLabel } from '@chakra-ui/react';
import {  useState } from 'react';

export default function Modal({ name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  } 

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button
        onClick={openModal}
        w="full"
        // bg="violet.600"
        colorScheme='orange'
        py="2"
        rounded="lg"
        fontWeight="bold"
        _hover={{ bg: 'violet.800' }}
      >
        Buy Now
      </Button>

      <ChakraModal isOpen={isOpen} onClose={closeModal} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="name">Enter Full Name</FormLabel>
              <Input
              value={name} onChange={(e)=>setName(e.target.value)}
                type="text"
                id="name"
                border="1px"
                borderColor="gray.300"
                bg="gray.100"
                required
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel htmlFor="address">Enter Full Address</FormLabel>
              <Input
              value={address} onChange={(e)=>setAddress(e.target.value)}
                type="text"
                id="address"
                border="1px"
                borderColor="gray.300"
                bg="gray.100"
                required
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel htmlFor="pincode">Enter Pincode</FormLabel>
              <Input
              value={pincode} onChange={(e)=>setPincode(e.target.value)} 
                type="text"
                id="pincode"
                border="1px"
                borderColor="gray.300"
                bg="gray.100"
                required
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel htmlFor="mobileNumber">Enter Mobile Number</FormLabel>
              <Input
              value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
                type="text"
                id="mobileNumber"
                border="1px"
                borderColor="gray.300"
                bg="gray.100"
                required
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={()=>{buyNow(); closeModal()}}
            //   bg="violet.600"
            colorScheme='orange'
              color="white"
              _hover={{ bg: 'violet.800' }}
            //   mr={3}
              w='full'
            >
              Order Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
}
