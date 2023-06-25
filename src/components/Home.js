import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box id="home">
      <HStack
        justifyContent={{ base: "center", md: "space-between" }}
        mt="50px"
        wrap="wrap-reverse"
        mx={{ base: "10%", sm: "15%", md: "15%", lg: "16%" }}
      >
        <Stack
          spacing={2}
          align={{ base: "center", md: "normal" }}
          p={{ base: "10px", sm: "31px", md: "0px" }}
        >
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            color="#89CFF0"
            fontWeight="semibold"
          >
            Sunny Bhandal
          </Text>
          <a
            href="https://www.linkedin.com/in/sunnybhandal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              width="10px"
              height="40px"
              color="#fff"
              colorScheme="linkedin"
              fontStyle="myriad"
              fontSize="4xl"
            >
              in
            </Button>
          </a>
        </Stack>
        <Box>
          <Image
            height={{ base: "220px", sm: "247px", md: "250px" }}
            borderRadius="20px"
            src="./img/profilePic.png"
            alt=""
          />
        </Box>
      </HStack>
    </Box>
  );
}
