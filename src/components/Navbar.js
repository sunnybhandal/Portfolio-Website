import { Box, Flex, Image, HStack, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      p="10px"
      alignItems="center"
      justify="space-between"
      mx={{ base: "15%", sm: "15%", md: "15%", lg: "16%" }}
    >
      <Box>
        <a href="#home">
          <Image
            boxSize={{ base: "40px", md: "50px" }}
            src="./img/Sunny_Logo_Light_Blue 1.png"
            alt=""
          />
        </a>
      </Box>
      <HStack
        fontSize={{ base: "20px", md: "xl" }}
        spacing={{ base: "20px", sm: "25px" }}
        color="#fff"
      >
        <a href="#home">
          <Text _hover={{ color: "#89CFF0" }}>Home</Text>
        </a>
        <a href="#about">
          <Text _hover={{ color: "#89CFF0" }}>About</Text>
        </a>
      </HStack>
      <a href="#location">
        <Box>
          <Image
            boxSize={{ base: "50px", md: "60px" }}
            src="./img/material-symbols_location-away.png"
            alt=""
          />
        </Box>
      </a>
    </Flex>
  );
}
