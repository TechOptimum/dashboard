import { Formik, Field, Form } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Textarea,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { FaGoogle, FaGithub, FaDiscord, FaGit } from "react-icons/fa";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Email is required";
  }
  return error;
}

function validatePassword(value) {
  let error;
  if (!value) {
    error = "Password is required";
  }
  return error;
}

function Login() {
  return (
    <Flex justifyContent="center" alignItems="center" height="900px">
      <Box
        className="formBox"
        maxW="100%"
        justifyItems="center"
        width="400px"
        height="500px"
      >
        <Text fontSize="xl" align="center" my="20px" mb="45px">
          Welcome to{" "}
          <span className="gradient org" fontWeight="semibold" fontSize="3xl">
            Tech Optimum
          </span>
        </Text>
        {/* -------------------------------------------------------------------------------------------------------------------------------- */}
        <Box maxWidth="100%" mb="30px" className="loginUtil" mx="30px">
          <Box>
            <Formik initialValues={{ name: "" }} className="loginForm">
              {(props) => (
                <Form>
                  <Field name="name" validate={validateEmail}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor="name">Email or Username</FormLabel>
                        <Textarea
                          {...field}
                          minH="fit-content"
                          placeholder="JohnDoe@outlook.com"
                          resize="none"
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Form>
              )}
            </Formik>
          </Box>
          <Box mt="1.3rem">
            <Formik initialValues={{ name: "" }} className="loginForm">
              {(props) => (
                <Form>
                  <Field name="name" validate={validatePassword}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor="name" maxW="100%">
                          Password
                        </FormLabel>
                        <Textarea
                          {...field}
                          minH="fit-content"
                          placeholder=""
                          resize="none"
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
        {/* ------------------------------------------------------------------------------------------------------------------------------ */}
        <Flex justifyContent="center">
          <Button
            position="absolute"
            colorScheme="orange"
            variant="solid"
            width="300px"
            height="40px"
            mt="0px"
            _hover={{
              bg: "rgba(255, 255, 255, 0)",
              border: "1px",
              borderColor: "#fea31c",
              transform: "scale(1.05, 1.05)",
            }}
            color="whiteAlpha"
          >
            Login
          </Button>
          <Text className="gradient" mt="60px" position="absolute">
            Other Options:
          </Text>
          <Tooltip
            hasArrow
            label="Login with Github"
            mr="25px"
            bg="gray.800"
            mt="2px"
          >
            <IconButton
              icon={<FaGithub fontSize="35px" />}
              variant="link"
              colorScheme="orange"
              aria-label="Github"
              _hover={{
                color: "#c0770a",
              }}
              pt="120px"
              pr="25px"
            />
          </Tooltip>
          <Tooltip hasArrow label="Login with Discord" bg="gray.800">
            <IconButton
              icon={<FaDiscord fontSize="35px" />}
              variant="link"
              colorScheme="orange"
              aria-label="Github"
              _hover={{
                color: "#c0770a",
              }}
              pt="120px"
            />
          </Tooltip>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Login;
