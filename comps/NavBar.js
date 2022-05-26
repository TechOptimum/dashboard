import { HStack, Heading, Spacer, Flex, Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { motion } from "framer-motion";

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
    <HStack>
      <Flex>
        <Heading>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            variants={SvgVariants}
            initial="hidden"
            animate="visible"
            width="64"
            height="64"
          >
            <motion.path
              d="M9.372 86.63C-3.124 74.13-3.124 53.87 9.372 41.37C21.87 28.88 42.13 28.88 54.63 41.37L246.6 233.4C259.1 245.9 259.1 266.1 246.6 278.6L54.63 470.6C42.13 483.1 21.87 483.1 9.372 470.6C-3.124 458.1-3.124 437.9 9.372 425.4L178.7 256L9.372 86.63zM544 416C561.7 416 576 430.3 576 448C576 465.7 561.7 480 544 480H256C238.3 480 224 465.7 224 448C224 430.3 238.3 416 256 416H544z"
              fill="transparent"
              variants={PathVariants}
              color="white"
            />
          </motion.svg>
        </Heading>
      </Flex>
    </HStack>
  );
};

export default NavBar;
