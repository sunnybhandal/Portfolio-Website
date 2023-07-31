import {
  Box,
  ChakraProvider,
  ListItem,
  OrderedList,
  Text,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  extendTheme,
  Image,
  ModalOverlay,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

export default function Location() {
  const {
    isOpen: isOpenLocation,
    onOpen: onOpenLocation,
    onClose: onCloseLocation,
  } = useDisclosure();

  const OverlayLocation = () => <ModalOverlay backdropFilter="blur(10px)" />;

  const [overlay, setOverlay] = React.useState(<OverlayLocation />);

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
      id="location"
      mt={{ base: "20px", md: "30px" }}
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
      <Box
        mt="25px"
        align="center"
        cursor="pointer"
        onClick={() => {
          setOverlay(<OverlayLocation />);
          onOpenLocation();
        }}
      >
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

      {/* Movie Modal */}
      <ChakraProvider theme={theme}>
        <Modal isCentered isOpen={isOpenLocation} onClose={onCloseLocation}>
          {overlay}
          <ModalContent color="#fff">
            <ModalCloseButton borderRadius="10px" _hover={{ bg: "#89CFF0" }} />
            <ModalHeader>It's A Wonderful City</ModalHeader>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </Box>
  );
}
