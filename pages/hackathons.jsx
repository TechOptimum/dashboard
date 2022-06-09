import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

function hackathons() {
  return (
    <Center ml="200px">
      <Box
        as="div"
        margin="auto"
        
      >
        <Box>
          <Text
            position="absolute"
            fontSize="8xl"
            fontWeight="semibold"
            ml="85px"
            mt="20px"
          >
            <span className="gradient">July 8th - 10th, 2022</span>
          </Text>
        </Box>
      </Box>
    </Center>
  );
}

export default hackathons;
