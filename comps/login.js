import React from "react";
import {
  Box,
  VStack,
  Flex,
  Text,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

function login() {
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

export default login;
