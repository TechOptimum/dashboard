import {
  Button,
  Box,
  Text,
  VStack,
  Flex,
  Avatar,
  Badge,
  Divider,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { MdPersonOutline } from "react-icons/md";
import { VscSignIn } from "react-icons/vsc";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from '../store/AuthContext';

export default function Hero() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Flex w="100%" justifyContent="center">
        <VStack ml="200px" spacing="80px" mb="50px">
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
              <span className="gradient userWelcome">Welcome</span> {authCtx.username}
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
              className="Desc"
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
          <Box width="800px" height="200px" className="welcome desc">
            {" "}
            <Text
              lineHeight="100px"
              fontSize="5xl"
              fontWeight="semibold"
              ml="20px"
              alignSelf="center"
              mr="25px"
            >
              {" "}
              Join our <span className="gradient">Commmunity</span>
            </Text>
            <Divider
              className="divider"
              alignSelf="center"
              height="80px"
              orientation="vertical"
              mr="70px"
            />
            <Flex
              flexDirection="column"
              justifyContent="center"
              flexWrap="wrap"
            >
              <Link href="http://www.linkedin.com" isExternal>
                <IconButton
                  icon={<FaLinkedinIn fontSize="35px" />}
                  variant="link"
                  colorScheme="orange"
                  mb="10px"
                  aria-label="Linkedin"
                  _hover={{
                    color: "#c0770a",
                  }}
                />
              </Link>
              <Link href="http://www.instagram.com" isExternal>
                <IconButton
                  icon={<FaInstagram fontSize="35px" />}
                  variant="link"
                  colorScheme="orange"
                  mt="10px"
                  aria-label="Instagram"
                  _hover={{
                    color: "#c0770a",
                  }}
                />
              </Link>
            </Flex>
            <Flex
              flexDir="column"
              justifyContent="center"
              flexWrap="wrap"
              ml="15px"
            >
              <Link href="http:///www.twitter.com" isExternal>
                <IconButton
                  icon={<FaTwitter fontSize="35px" />}
                  rounded
                  variant="link"
                  colorScheme="orange"
                  mb="10px"
                  aria-label="Twitter"
                  _hover={{
                    color: "#c0770a",
                  }}
                />
              </Link>
              <Link href="http://www.discord.com" isExternal>
                <IconButton
                  icon={<FaDiscord fontSize="35px" />}
                  rounded
                  variant="link"
                  colorScheme="orange"
                  mt="10px"
                  aria-label="Discord"
                  _hover={{
                    color: "#c0770a",
                  }}
                />
              </Link>
            </Flex>
          </Box>
          <iframe
            src="https://discord.com/widget?id=970544398192508948&theme=dark"
            width="550"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </VStack>
      </Flex>
    </>
  );
}
