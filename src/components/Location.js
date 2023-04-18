import { Box, Image, Text } from "@chakra-ui/react";

export default function Location() {
  return (
    <Box
      id="location"
      mt="50px"
      mx={{ base: "10%", sm: "15%", md: "15%", lg: "16%" }}
    >
      <Text
        color="#fff"
        align="center"
        fontWeight="semibold"
        fontSize={{ base: "3xl", md: "4xl" }}
      >
        Current Location
      </Text>
      <Box mt="25px" align="center">
        <Image
          width="100%"
          borderRadius="20px"
          src="./img/Calgary-Alberta.jpg"
          alt=""
        />
      </Box>
      <Text
        color="#fff"
        align="center"
        pt="10px"
        fontWeight="semibold"
        fontSize={{ base: "lg", md: "2xl" }}
      >
        (Calgary, AB)
      </Text>
      <Text
        padding="10px"
        fontSize={{ base: "9px", sm: "11px" }}
        color="#fff"
        mt="50px"
      >
        Made by Sunny Bhandal with React, Chakra UI, and Figma
      </Text>
    </Box>
  );
}
