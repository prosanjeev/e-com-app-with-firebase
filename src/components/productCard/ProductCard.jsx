import  { useContext } from 'react';
import {  Button, Card, Img, Stack, Tag, Text } from '@chakra-ui/react';
import myContext from '../../context/data/myContext';

function ProductCard({item, onClick}) {
    const {title, price, imageUrl} = item
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <Card borderRadius='25px' w='280px'  bg={mode === "dark" ? "rgb(64 66 70)" : "gray.50"}  color={mode === "dark" ? "white" : "black"}>
            <Img borderRadius='25px' h='240px' src={imageUrl} />
            <Stack p={5}>
                <Tag w='60px'>E-Kart</Tag >
                <Text fontSize='20px' fontWeight='600' noOfLines={1}>{title}</Text>
                <Text fontSize='20px' fontWeight='600'>₹{price}</Text>
                {/* <Text color='red'> {product.inStock ? (
                    <Text color='green'>In Stock</Text>
                ) : (
                    <Text color='red'>Out of Stock</Text>
                )}</Text> */}
                {/* <Button
                    onClick={product.inStock ? () => handleAddToCart(product) : undefined}
                    disabled={!product.inStock}
                    colorScheme={product.inStock ? "orange" : "gray"}
                >
                    Add to Cart
                </Button> */}

                <Button 
                onClick={onClick} 
                colorScheme='pink'>Add to Cart</Button>
            </Stack>
        </Card>
    );
}

export default ProductCard;
