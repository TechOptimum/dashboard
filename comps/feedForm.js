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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
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

function Feedform() {
  return (
    <>
      <Flex w="100%" justify="center">
        <VStack mt="100px" mb="100px" ml="220px" spacing="20px">
          <Box width="700px" height="160px" className="formBox">
            <Text align="center" fontSize="3xl" mt="10px" className="gradient">
              Feedback Form
            </Text>
            <Text align="left" mx="20px" mt="15px">
              Using this Feedback form, you can respond to the questions below
              regarding Tech Optimum's staff. Responses are anonymous so please
              feel free with your responses. Constructive feedback is very much
              appreciated, Please be respectful
            </Text>
          </Box>
          <Box className="formBox" width="700px">
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
                        <FormLabel htmlFor="name">
                          On a scale of 1-10, How good is the User Interface of
                          the Dashboard
                        </FormLabel>
                        <NumberInput
                          defaultValue="0"
                          min={0}
                          max={10}
                          keepWithinRange={true}
                          clampValueOnBlur={true}
                          width="650px"
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Form>
              )}
            </Formik>
          </Box>
          <Box className="formBox" width="700px">
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
                        <FormLabel htmlFor="name">
                          Are their any bugs you're experiencing with the
                          dashboard?
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
          </Box>
          <Box className="formBox" width="700px">
            <Formik initialValues={{ name: "" }}>
              {(props) => (
                <Form>
                  <Field name="name" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl mx="20px" my="20px">
                        <FormLabel htmlFor="name">
                          What is one feature that you would like to see
                          added/removed/changed to the dashboard?
                        </FormLabel>
                        <Textarea
                          {...field}
                          minH="fit-content"
                          placeholder="respond here"
                          resize="none"
                          as={TextareaAutosize}
                          width="650px"
                        />
                      </FormControl>
                    )}
                  </Field>
                </Form>
              )}
            </Formik>
          </Box>
          <Box className="formBox" width="700px">
            <Formik initialValues={{ name: "" }}>
              {(props) => (
                <Form>
                  <Field name="name" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl mx="20px" my="20px">
                        <FormLabel htmlFor="name">
                          Where did you hear about Tech Optimum?
                        </FormLabel>
                        <Flex justifyContent="start">
                          <VStack alignItems="baseline">
                            <Checkbox colorScheme="orange">
                              Through the Tech Optimum's Website
                            </Checkbox>
                            <Checkbox colorScheme="orange" mb="5px">
                              Through Social Media
                            </Checkbox>
                            <Textarea
                              resize="none"
                              placeholder="Specify here"
                              minH="fit-content"
                              width="200px"
                              size="md"
                              borderTop="none"
                              borderX="none"
                              borderRadius="0px"
                            />
                            <Checkbox colorScheme="orange">Friends</Checkbox>
                            <Checkbox colorScheme="orange">Other</Checkbox>
                            <Textarea
                              resize="none"
                              placeholder="Specify here"
                              minH="fit-content"
                              width="200px"
                              size="md"
                              borderTop="none"
                              borderX="none"
                              borderRadius="0px"
                            />
                          </VStack>
                        </Flex>
                      </FormControl>
                    )}
                  </Field>
                </Form>
              )}
            </Formik>
          </Box>
        </VStack>
      </Flex>
    </>
  );
}
export default Feedform;
