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

function validateName(value) {
  let error;
  if (!value) {
    error = "Response is required";
  }
  return error;
}

function Login() {
  return (
    <Box className="formBox" width="700px">
      <VStack>
        <Formik initialValues={{ name: "" }}>
          {(props) => (
            <Form>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                    isRequired
                    mx="20px"
                    my="20px"
                  >
                    <FormLabel htmlFor="name" placeholder="JohnDoe@outlook.com">
                      Email
                    </FormLabel>
                    <Textarea
                      {...field}
                      minH="fit-content"
                      placeholder="respond here"
                      resize="none"
                      as={TextareaAutosize}
                      width="650px"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </VStack>
    </Box>
  );
}

export default Login;
