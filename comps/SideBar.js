import { Flex, Stack, Box, Button, Spacer } from "@chakra-ui/react";
import { FaWrench, FaHome } from "react-icons/fa";
import { AiOutlineForm } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { IconButton } from "@chakra-ui/button";

import Image from "next/image";
import Link from "next/link";

function SideBar() {
  return (
    <>
      <Flex
        w="100%"
        direction="column"
        position="fixed"
        maxWidth="250px"
        className="bar"
        h="100vh"
      >
        <Flex direction="column" flex="1" pt="5" pb="4" overflowY="auto" px="4">
          <Link href="/">
            <Box mb="6">
              <Image
                width="200px"
                height="70px"
                src="/logo.png"
                priority
                className=".logo"
              />
            </Box>
          </Link>
          <Stack spacing="4">
            <Stack spacing="10">
              <Link href="/workshop">
                <Button
                  leftIcon={<FaHome />}
                  variant="ghost"
                  _hover={{
                    bg: "rgba( 245, 166, 35, 0.10 )",
                  }}
                  height="55px"
                  colorScheme="orange"
                >
                  Home
                </Button>
              </Link>
              <Link href="/workshop">
                <Button
                  leftIcon={<FaWrench />}
                  variant="ghost"
                  _hover={{
                    bg: "rgba( 245, 166, 35, 0.10 )",
                  }}
                  height="55px"
                  colorScheme="orange"
                >
                  Workshop
                </Button>
              </Link>
              <Link href="/workshop">
                <Button
                  colorScheme="orange"
                  leftIcon={<HiOutlineCode />}
                  variant="ghost"
                  _hover={{
                    bg: "rgba( 245, 166, 35, 0.10 )",
                  }}
                  height="55px"
                >
                  Hackathons
                </Button>
              </Link>
              <Link href="/workshop">
                <Button
                  colorScheme="orange"
                  leftIcon={<AiOutlineForm />}
                  variant="ghost"
                  _hover={{
                    bg: "rgba( 245, 166, 35, 0.10 )",
                  }}
                  height="55px"
                >
                  Feedback Form
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Spacer />
        <IconButton
          w="0%"
          variant="ghost"
          aria-label="Logout"
          icon={<FiLogOut />}
          isRound="true"
          alignSelf="flex-end"
          mb="10px"
          mr="15px"
          _hover={{
            bg: "rgb( 0 0 0 / 40%)",
          }}
        />
      </Flex>
    </>
  );
}

export default SideBar;
