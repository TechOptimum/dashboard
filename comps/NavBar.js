import {
  VStack,
  Heading,
  Spacer,
  Flex,
  Button,
  Container,
  HStack,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../public/logo.png";

const SvgVariants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const PathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transiiton: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const NavBar = () => {
  return (
    <VStack className="bar">
      <Flex w="100%">
        <Heading ml={5}>
          <Image src={logo} width={200} height={70} />
        </Heading>
        <Spacer></Spacer>
        {/* <Button colorScheme="teal" variant="ghost">
          Button
        </Button> */}
        <HStack spacing={20} mr={10}>
          <Button
            _hover={{ bg: "rgba(192, 86, 33, 0.158)" }}
            colorScheme="orange"
            variant="ghost"
            alignSelf="center"
          >
            Dashboard
          </Button>
          <Button
            _hover={{ bg: "rgba(192, 86, 33, 0.158)" }}
            colorScheme="orange"
            variant="ghost"
            alignSelf="center"
          >
            Workshop
          </Button>
          <Button
            _hover={{ bg: "rgba(192, 86, 33, 0.158)" }}
            colorScheme="orange"
            variant="ghost"
            alignSelf="center"
          >
            bruhMoment
          </Button>
        </HStack>
      </Flex>
    </VStack>
  );
};

export default NavBar;
