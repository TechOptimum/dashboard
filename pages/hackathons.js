import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

function hackathons() {
  return (
    <Center ml="200px">
      <Box
        as="div"
        width="400px"
        height="200px"
        bg="rgba(5, 0, 59, 0.5)"
        position="relative"
        mt="350px"
      >
        <Box>
          <Text
            position="absolute"
            fontSize="8xl"
            fontWeight="semibold"
            ml="85px"
            mt="20px"
          >
            <span className="gradient">Shh...</span>
          </Text>
        </Box>
      </Box>
    </Center>
  );
}

export default hackathons;
