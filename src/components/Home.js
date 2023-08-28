import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box id="home" align="center">
      <Stack mt="50px">
        <Box>
          <Image
            height={{ base: "240px", md: "300px" }}
            borderRadius="20px"
            src="./img/selfiePic.png"
            alt=""
          />
        </Box>
        <Stack spacing={2} align={{ base: "center", md: "normal" }}>
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
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
      </Stack>
    </Box>
  );
}
