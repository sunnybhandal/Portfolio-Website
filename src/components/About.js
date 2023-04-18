import {
  Box,
  Flex,
  HStack,
  ChakraProvider,
  extendTheme,
  ListItem,
  OrderedList,
  Stack,
  Text,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

export default function About() {
  const OverlayChallenge = () => <ModalOverlay backdropFilter="blur(10px)" />;
  const OverlayMovie = () => <ModalOverlay backdropFilter="blur(10px)" />;

  const {
    isOpen: isOpenChallenge,
    onOpen: onOpenChallenge,
    onClose: onCloseChallenge,
  } = useDisclosure();

  const {
    isOpen: isOpenMovie,
    onOpen: onOpenMovie,
    onClose: onCloseMovie,
  } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayChallenge />);

  const theme = extendTheme({
    components: {
      Modal: {
        baseStyle: (props) => ({
          dialog: {
            width: ["80%", "72.6%"],
            bg: "#2D2A2A",
            borderRadius: "20px",
            border: "2px solid #89CFF0",
          },
        }),
      },
    },
  });

  return (
    <Box
      id="about"
      position="relative"
      mt="50px"
      mx={{ base: "10%", sm: "15%", md: "15%", lg: "16%" }}
    >
      <Text
        align="center"
        fontWeight="semibold"
        fontSize={{ base: "3xl", md: "4xl" }}
        color="#fff"
      >
        About Me
      </Text>
      <Stack mt="25px" align="center">
        <Stack
          color="#fff"
          mb="15px"
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          spacing={4}
        >
          <Text>
            I'm extremely passionate about health & fitness. Most of my free
            time over the past decade has gone towards studying nutrition, human
            physiology, and different aspects of resistance training. I'm
            addicted to learning and podcasts/ebooks/YouTube have been life
            changing for me as they've introduced me to some of the smartest
            professionals in various industries.
          </Text>
          <Text>
            My other passions are sports and hiking. I grew up playing
            basketball but in recent years my love for learning has fused with
            my love for sports. This has resulted in trying out many different
            sports to try my best to learn them and be effective at each one. I
            started hiking during the pandemic and it's become a true love of
            mine. Kananaskis and the Banff area become a 2nd home for me come
            summer time.
          </Text>
        </Stack>
      </Stack>
      <HStack justify="center" spacing={3} mt="10px">
        <Flex
          width={{ base: "190px", sm: "215px", md: "240px", lg: "290px" }}
          height={{ base: "40px", sm: "45px", md: "50px", lg: "55px" }}
          bg="#89CFF0"
          _hover={{ bg: "#2D2A2A", border: "2px solid #89CFF0" }}
          borderRadius="20px"
          justify="center"
          align="center"
          cursor="pointer"
          onClick={() => {
            setOverlay(<OverlayChallenge />);
            onOpenChallenge();
          }}
        >
          <Box
            fontWeight="semibold"
            fontSize={{ base: "md", sm: "lg", md: "2xl", lg: "3xl" }}
            textAlign="center"
            color="#fff"
          >
            Current Challenge
          </Box>
        </Flex>
        <Flex
          width={{ base: "180px", sm: "215px", md: "240px", lg: "290px" }}
          height={{ base: "40px", sm: "45px", md: "50px", lg: "55px" }}
          bg="#2D2A2A"
          border="2px solid #89CFF0"
          _hover={{ bg: "#89CFF0" }}
          borderRadius="20px"
          justify="center"
          align="center"
          cursor="pointer"
          onClick={() => {
            setOverlay(<OverlayMovie />);
            onOpenMovie();
          }}
        >
          <Box
            fontWeight="semibold"
            fontSize={{ base: "md", sm: "lg", md: "2xl", lg: "3xl" }}
            textAlign="center"
            color="#fff"
          >
            Movies
          </Box>
        </Flex>
      </HStack>

      {/* Current Challenge Modal */}
      <ChakraProvider theme={theme}>
        <Modal isCentered isOpen={isOpenChallenge} onClose={onCloseChallenge}>
          {overlay}
          <ModalContent color="#fff" pb="3px">
            <ModalCloseButton borderRadius="10px" _hover={{ bg: "#89CFF0" }} />
            <ModalHeader>The Challenge</ModalHeader>
            <ModalBody>
              <Text
                p={{ base: "2px", sm: "5px" }}
                fontSize={{ base: "sm", sm: "md", md: "xl" }}
              >
                I love challenging myself and enjoy getting uncomfortable
                because this leads to a lot of personal growth and builds
                resilience. I do this by setting a goal for the year which
                involves selecting a difficult task to work towards.
              </Text>
              <Text
                p={{ base: "2px", sm: "5px" }}
                fontSize={{ base: "sm", sm: "md", md: "xl" }}
              >
                This year it's a marathon!
              </Text>
              <Text
                p={{ base: "2px", sm: "5px" }}
                fontSize={{ base: "sm", sm: "md", md: "xl" }}
              >
                42.2 km (26 miles). A marathon has been on and off my bucket
                list for the past few years. I thought this would be the year,
                so here we go!
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>

      {/* Movie Modal */}
      <ChakraProvider theme={theme}>
        <Modal isCentered isOpen={isOpenMovie} onClose={onCloseMovie}>
          {overlay}
          <ModalContent color="#fff">
            <ModalCloseButton borderRadius="10px" _hover={{ bg: "#89CFF0" }} />
            <ModalHeader>My Top 10 Movies</ModalHeader>
            <ModalBody>
              <OrderedList
                p="5px"
                fontSize={{ base: "md", sm: "md", md: "xl" }}
                mb="10px"
              >
                <ListItem>Interstellar</ListItem>
                <ListItem>Inception</ListItem>
                <ListItem>The Dark Knight Rises</ListItem>
                <ListItem>The Dark Knight</ListItem>
                <ListItem>Inglorious Basterds</ListItem>
                <ListItem>The Wolf of Wall Street</ListItem>
                <ListItem>The Shawshank Redemption</ListItem>
                <ListItem>Joker</ListItem>
                <ListItem>NightCrawler</ListItem>
                <ListItem>The Curious Case of Benjamin Button</ListItem>
              </OrderedList>
            </ModalBody>
            <ModalFooter justifyContent="center">
              <a
                href="https://www.imdb.com/user/ur68350159/ratings?sort=your_rating,desc&ratingFilter=0&mode=detail&ref_=undefined&lastPosition=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  width={{
                    base: "160px",
                    sm: "190px",
                  }}
                  height={{ base: "40px", sm: "45px" }}
                  bg="#89CFF0"
                  borderRadius="20px"
                  justify="center"
                  _hover={{ bg: "#2D2A2A", border: "2px solid #89CFF0" }}
                  align="center"
                  fontWeight="semibold"
                  fontSize={{ base: "xl", sm: "2xl" }}
                  textAlign="center"
                  color="#fff"
                >
                  My IMDB
                </Button>
              </a>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </Box>
  );
}
