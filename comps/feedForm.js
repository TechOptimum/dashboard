import { Formik, Field, Form } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Text,
  Center,
} from "@chakra-ui/react";
import React from "react";

function validateName(value) {
  let error;
  if (!value) {
    error = "Name is required";
  } else if (value.toLowerCase() !== "naruto") {
    error = "Jeez! You're not a fan 😱";
  }
  return error;
}

function Feedform() {
  return (
    <>
      <Flex w="100%" justify="center" ml="200px">
        <VStack mb="100px">
          <Formik
            initialValues={{ name: "Sasuke" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Form>
                <Field name="name" validate={validateName}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name">First name</FormLabel>
                      <Input {...field} id="name" placeholder="name" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </VStack>
      </Flex>
    </>
  );
}
export default Feedform;

// <Flex align="center" justify="center" ml="120px" h="100vh">
//         <Box bg="rgba(5, 0, 59, 0.439)" p={6} rounded="md" w={64}>
//           <Formik
//             initialValues={{
//               email: "",
//               password: "",
//               rememberMe: false,
//             }}
//             onSubmit={(values) => {
//               alert(JSON.stringify(values, null, 2));
//             }}
//           >
//             {({ handleSubmit, errors, touched }) => (
//               <form onSubmit={handleSubmit}>
//                 <VStack spacing={4} align="flex-start">
//                   <FormControl>
//                     <FormLabel color="white" htmlFor="email">
//                       Email Address
//                     </FormLabel>
//                     <Field
//                       as={Input}
//                       id="email"
//                       name="email"
//                       type="email"
//                       variant="filled"
//                     />
//                   </FormControl>
//                   <FormControl
//                     isInvalid={!!errors.password && touched.password}
//                   >
//                     <FormLabel htmlFor="password" color="white">
//                       Password
//                     </FormLabel>
//                     <Field
//                       as={Input}
//                       id="password"
//                       name="password"
//                       type="password"
//                       variant="filled"
//                       color="white"
//                       validate={(value) => {
//                         let error;

//                         if (value.length < 5) {
//                           error = "Password must contain at least 6 characters";
//                         }

//                         return error;
//                       }}
//                     />
//                     <FormErrorMessage>{errors.password}</FormErrorMessage>
//                   </FormControl>
//                   <Field
//                     as={Checkbox}
//                     id="rememberMe"
//                     name="rememberMe"
//                     colorScheme="orange"
//                     color="white"
//                   >
//                     Remember me?
//                   </Field>
//                   <Button type="submit" colorScheme="orange" width="full">
//                     Login
//                   </Button>
//                 </VStack>
//               </form>
//             )}
//           </Formik>
//         </Box>
//       </Flex>
//       ;
