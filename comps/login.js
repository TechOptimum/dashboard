import { Formik, Field, Form } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

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
          <Text className="gradient" mt="90px">
            Other Options:
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Login;
