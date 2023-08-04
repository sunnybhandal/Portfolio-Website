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
  Link,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import React from "react";

export default function About() {
  const OverlayHike = () => <ModalOverlay backdropFilter="blur(10px)" />;
  const OverlayMovie = () => <ModalOverlay backdropFilter="blur(10px)" />;

  const {
    isOpen: isOpenHike,
    onOpen: onOpenHike,
    onClose: onCloseHike,
  } = useDisclosure();

  const {
    isOpen: isOpenMovie,
    onOpen: onOpenMovie,
    onClose: onCloseMovie,
  } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayHike />);

  const theme = extendTheme({
    components: {
      Modal: {
        baseStyle: (props) => ({
          dialog: {
            width: ["87%", "72.6%"],
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
      mt={{ base: "25px", md: "40px" }}
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
            time goes towards studying nutrition, human physiology, and
            different aspects of resistance training. I'm addicted to learning
            and podcasts/ebooks/YouTube have been life changing for me as
            they've introduced me to some of the smartest professionals in
            various industries.
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
      <HStack justify="center" spacing={3} mt={{ base: "5px", sm: "10px" }}>
        <Flex
          width={{ base: "190px", sm: "215px", md: "240px", lg: "290px" }}
          height={{ base: "40px", sm: "45px", md: "50px", lg: "55px" }}
          fontWeight="semibold"
          fontSize={{ base: "md", sm: "lg", md: "2xl", lg: "3xl" }}
          bg="#89CFF0"
          textColor="#fff"
          _hover={{
            bg: "#2D2A2A",
            border: "2px solid #89CFF0",
            textColor: "#89CFF0",
          }}
          borderRadius="20px"
          justify="center"
          align="center"
          cursor="pointer"
          onClick={() => {
            setOverlay(<OverlayHike />);
            onOpenHike();
          }}
        >
          Top 10 Hikes
        </Flex>
        <Flex
          width={{ base: "180px", sm: "215px", md: "240px", lg: "290px" }}
          height={{ base: "40px", sm: "45px", md: "50px", lg: "55px" }}
          fontWeight="semibold"
          fontSize={{ base: "md", sm: "lg", md: "2xl", lg: "3xl" }}
          bg="#2D2A2A"
          border="2px solid #89CFF0"
          textColor="#89CFF0"
          _hover={{ bg: "#89CFF0", textColor: "#fff" }}
          borderRadius="20px"
          justify="center"
          align="center"
          cursor="pointer"
          onClick={() => {
            setOverlay(<OverlayMovie />);
            onOpenMovie();
          }}
        >
          Top 10 Movies
        </Flex>
      </HStack>

      {/* Top 10 Hikes Modal */}
      <ChakraProvider theme={theme}>
        <Modal isCentered isOpen={isOpenHike} onClose={onCloseHike}>
          {overlay}
          <ModalContent color="#fff" pb="3px">
            <ModalCloseButton borderRadius="10px" _hover={{ bg: "#89CFF0" }} />
            <ModalHeader>My Top 10 Hikes</ModalHeader>
            <ModalBody lineHeight={1.7}>
              <OrderedList
                p={{ base: "0px", sm: "5px" }}
                fontSize={{ base: "md", sm: "md", md: "xl" }}
                mb="10px"
              >
                <ListItem>
                  <Link
                    href="https://www.alltrails.com/trail/canada/alberta/wasootch-peak?search=true"
                    isExternal
                    textDecoration="none"
                    _hover={{ textColor: "#89CFF0" }}
                  >
                    Wasootch Peak <LinkIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.alltrails.com/trail/canada/alberta/mount-yamnuska-traverse-and-west-col-descent"
                    isExternal
                    textDecoration="none"
                    _hover={{ textColor: "#89CFF0" }}
                  >
                    Mount Yamnuska <LinkIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.alltrails.com/trail/canada/alberta/mount-temple"
                    isExternal
                    textDecoration="none"
                    _hover={{ textColor: "#89CFF0" }}
                  >
                    Mount Temple <LinkIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.alltrails.com/trail/canada/alberta/cirque-peak-via-helen-lake-trail"
                    isExternal
                    textDecoration="none"
                    _hover={{ textColor: "#89CFF0" }}
                  >
                    Cirque Peak <LinkIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.alltrails.com/trail/canada/alberta/east-end-of-rundle-eeor"
                    isExternal
                    textDecoration="none"
                    _hover={{ textColor: "#89CFF0" }}
                  >
                    East End of Rundle <LinkIcon />
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    href="https://www.alltrails.com/trail/canada/alberta/tent-ridge-horseshoe"
                    isExternal
                    textDecoration="none"
                    _hover={{ textColor: "#89CFF0" }}
                  >
                    Tent Ridge Horseshoe <LinkIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.alltrails.com/trail/canada/alberta/crypt-lake-trail-loop"
                    isExternal
                    textDecoration="none"
                    _hover={{ textColor: "#89CFF0" }}
                  >
                    Crypt Lake <LinkIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.alltrails.com/trail/canada/alberta/mount-lipsett"
                    isExternal
                    textDecoration="none"
                    _hover={{ textColor: "#89CFF0" }}
                  >
                    Mount Lipsett <LinkIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.alltrails.com/trail/canada/alberta/mount-lady-macdonald-trail"
                    isExternal
                    textDecoration="none"
                    _hover={{ textColor: "#89CFF0" }}
                  >
                    Lady MacDonald <LinkIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.alltrails.com/trail/canada/alberta/devils-thumb-via-lake-agnes-trail"
                    isExternal
                    textDecoration="none"
                    _hover={{ textColor: "#89CFF0" }}
                  >
                    Devil's Thumb <LinkIcon />
                  </Link>
                </ListItem>
              </OrderedList>
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
            <ModalBody letterSpacing={0} lineHeight={1.7}>
              <OrderedList
                p={{ base: "0px", sm: "5px" }}
                fontSize={{ base: "md", sm: "md", md: "xl" }}
                mb="10px"
              >
                <ListItem>Interstellar</ListItem>
                <ListItem>Inception</ListItem>
                <ListItem>The Dark Knight Rises</ListItem>
                <ListItem>The Dark Knight</ListItem>
                <ListItem>Inglourious Basterds</ListItem>
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
                  _hover={{
                    bg: "#2D2A2A",
                    border: "2px solid #89CFF0",
                    color: "#89CFF0",
                  }}
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
