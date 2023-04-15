import {
  Box,
  Flex,
  HStack,
  Image,
  ListItem,
  OrderedList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [openChallengeModal, setOpenChallengeModal] = useState(false);
  const [openMovieModal, setOpenMovieModal] = useState(false);
  const modalRef = useRef(null);

  const challengeModal = () => {
    setOpenChallengeModal(true);
    setOpenMovieModal(false);
  };

  const movieModal = () => {
    setOpenMovieModal(true);
    setOpenChallengeModal(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenChallengeModal(false);
        setOpenMovieModal(false);
      }
    }

    // Add event listener to detect clicks outside of the div
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

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
      <HStack justify="center" spacing={3}>
        <Flex
          width={{ base: "190px", sm: "215px", md: "240px", lg: "290px" }}
          height={{ base: "40px", sm: "45px", md: "50px", lg: "55px" }}
          bg="#89CFF0"
          _hover={{ bg: "#2D2A2A", border: "2px solid #89CFF0" }}
          borderRadius="20px"
          justify="center"
          align="center"
          cursor="pointer"
          onClick={() => challengeModal()}
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
          // _hover={{ opacity: ".8" }}
          _hover={{ bg: "#89CFF0" }}
          borderRadius="20px"
          justify="center"
          align="center"
          cursor="pointer"
          onClick={() => movieModal()}
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

      {openChallengeModal ? (
        <Box justifyContent="center" display="flex" left="50%">
          <Stack
            position="absolute"
            bottom="16"
            wrap="wrap"
            color="#fff"
            spacing={-3}
            width={{ base: "325px", sm: "350px", md: "450px", lg: "550px" }}
            bg="#2D2A2A"
            borderRadius="20px"
            border="2px solid #89CFF0"
            textAlign="center"
            ref={modalRef}
          >
            <Flex position="relative" justify="center">
              <Box
                boxSize={{ base: "16px", sm: "20px", md: "24px" }}
                position="absolute"
                left="15px"
                top={{ base: "16px", md: "20px" }}
                cursor="pointer"
                onClick={() => setOpenChallengeModal(false)}
                color="#89CFF0"
              >
                <Image src="./img/x-icon.png" alt="" />
              </Box>
              <Text
                fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}
                fontWeight="semibold"
                p="10px"
              >
                The Challenge
              </Text>
            </Flex>
            <Text
              p={{ base: "10px", sm: "15px", md: "20px" }}
              fontSize={{ base: "sm", sm: "md", md: "xl", lg: "2xl" }}
            >
              I love challenging myself and enjoy getting uncomfortable because
              this leads to a lot of personal growth and builds resilience. I do
              this by setting a goal for the year which involves selecting a
              difficult task to work towards.
            </Text>
            <Text
              p={{ base: "10px", sm: "15px", md: "20px" }}
              fontSize={{ base: "sm", sm: "md", md: "xl", lg: "2xl" }}
            >
              This year it's a marathon!
            </Text>
            <Text
              p={{ base: "10px", sm: "15px", md: "20px" }}
              fontSize={{ base: "sm", sm: "md", md: "xl", lg: "2xl" }}
            >
              42.2 km (26 miles). A marathon has been on and off my bucket list
              for the past few years. I thought this would be the year, so here
              we go!
            </Text>
          </Stack>
        </Box>
      ) : (
        <div></div>
      )}
      {openMovieModal ? (
        <Box justifyContent="center" display="flex" left="50%">
          <Stack
            position="absolute"
            bottom="16"
            wrap="wrap"
            color="#fff"
            width={{ base: "325px", sm: "350px", md: "450px", lg: "550px" }}
            bg="#2D2A2A"
            borderRadius="20px"
            border="2px solid #89CFF0"
            textAlign="center"
            ref={modalRef}
          >
            <Flex position="relative" justify="center">
              <Box
                boxSize={{ base: "16px", sm: "20px", md: "24px" }}
                position="absolute"
                left="15px"
                top={{ base: "16px", md: "20px" }}
                cursor="pointer"
                onClick={() => setOpenMovieModal(false)}
              >
                <Image src="./img/x-icon.png" alt="" />
              </Box>
              <Text
                fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}
                fontWeight="semibold"
                p="10px"
              >
                My Top 10 Movies
              </Text>
            </Flex>
            <Box align="center">
              <OrderedList
                p={{ base: "15px", sm: "20px", md: "25px" }}
                fontSize={{ base: "sm", sm: "md", md: "xl", lg: "2xl" }}
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
              <a
                href="https://www.imdb.com/user/ur68350159/ratings?sort=your_rating,desc&ratingFilter=0&mode=detail&ref_=undefined&lastPosition=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flex
                  width={{
                    base: "190px",
                    sm: "215px",
                    md: "240px",
                    lg: "290px",
                  }}
                  height={{ base: "40px", sm: "45px", md: "50px", lg: "55px" }}
                  bg="#89CFF0"
                  _hover={{ bg: "#2D2A2A", border: "2px solid #89CFF0" }}
                  mb="15px"
                  borderRadius="20px"
                  justify="center"
                  align="center"
                  cursor="pointer"
                  onClick={() => movieModal()}
                >
                  <Box
                    fontWeight="semibold"
                    fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
                    textAlign="center"
                    color="#fff"
                  >
                    My IMDB
                  </Box>
                </Flex>
              </a>
            </Box>
          </Stack>
        </Box>
      ) : (
        <div></div>
      )}
    </Box>
  );
}
