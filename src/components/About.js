import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [openChallengeModal, setOpenChallengeModal] = useState(false);
  const modalRef = useRef(null);

  const challengeModal = () => {
    setOpenChallengeModal(true);
    console.log("hi", openChallengeModal);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenChallengeModal(false);
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
          <Text align="center">
            Hit the challenge button below to see where my focus is currently
            at.
          </Text>
        </Stack>
        <Flex
          width={{ base: "190px", sm: "215px", md: "240px", lg: "290px" }}
          height={{ base: "40px", sm: "45px", md: "50px", lg: "55px" }}
          bg="#89CFF0"
          _hover={{ opacity: ".8" }}
          borderRadius="20px"
          justify="center"
          align="center"
          cursor="pointer"
          onClick={() => challengeModal()}
        >
          <Box
            fontWeight="semibold"
            fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
            textAlign="center"
            color="#fff"
          >
            Current Challenge
          </Box>
        </Flex>
      </Stack>
      {openChallengeModal ? (
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
                onClick={() => setOpenChallengeModal(false)}
              >
                <Image src="./img/x-icon.png" alt="" />
              </Box>
              <Text
                fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}
                fontWeight="semibold"
                p="10px"
              >
                Marathon
              </Text>
            </Flex>
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
    </Box>
  );
}
