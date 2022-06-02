import {
  Button,
  Box,
  Text,
  VStack,
  Flex,
  Avatar,
  Badge,
} from "@chakra-ui/react";
import { MdPersonOutline } from "react-icons/md";
import { VscSignIn } from "react-icons/vsc";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Flex w="100%" justifyContent="center">
        <VStack ml="200px" spacing="30px">
          <Box mt="100px" width="400px" height="100px" className="welcome">
            <Avatar
              size="lg"
              bg="white"
              icon={<MdPersonOutline fontSize="2.5rem" />}
              mt="20px"
              ml="32px"
            />
            <Text className="user" fontSize="3xl" ml="40px">
              {" "}
              <span className="gradient userWelcome">Welcome</span> USER
            </Text>
          </Box>
          <Box
            className="welcome hackathon_background"
            width="900px"
            height="300px"
            pos="relative"
          >
            <Image
              height="300px"
              width="900px"
              src="/hackathon-background.png"
              className="hackImage"
            />
            <Text
              pos="absolute"
              className="hackDesc"
              fontSize="5xl"
              fontWeight="semibold"
              ml="20px"
            >
              Register for our <span className="gradient">Hackathon</span>
            </Text>
            <Badge
              rounded="15px"
              ml="20px"
              mt="170px"
              position="absolute"
              variant="outline"
              colorScheme="orange"
            >
              June 23-26
            </Badge>
            <Button
              position="absolute"
              ml="20px"
              mt="200px"
              colorScheme="orange"
              variant="solid"
              width="150px"
              height="50px"
              _hover={{
                bg: "rgba(255, 255, 255, 0)",
                border: "1px",
                borderColor: "#fea31c",
              }}
              color="whiteAlpha"
              rightIcon={<VscSignIn />}
            >
              Register
            </Button>
          </Box>
          <Box className="community"></Box>
        </VStack>
      </Flex>
    </>
  );
}
