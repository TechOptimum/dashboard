import { Box, Flex, FormLabel, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function forgotPassword() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const submitHandler = () => {
    const email = getValues("email");
    fetch("http://localhost:3000/auth/reset-password-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSuccess(true);
        }
      });
  };
  return !success ? (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Box maxWidth="100%" mb="30px" className="loginUtil" mx="30px">
          <Box>
            <FormLabel htmlFor="name">Email</FormLabel>
            <Input
              {...register("email", { required: true })}
              minH="fit-content"
              placeholder="johnDoe@outlook.com"
              resize="none"
              type="email"
            />
            <div>
              {errors.email?.type === "required" && (
                <p style={{ color: "red" }}>Email is required.</p>
              )}
              {errors.email?.type === "lgnfail" && (
                <p style={{ color: "red" }}>Invalid email or password.</p>
              )}
            </div>
          </Box>
        </Box>
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
              type="submit"
              color="whiteAlpha"
            >
              Submit
            </Button>
          </Flex>
      </form>
    </div>
  ) : (
    <p>Email sent. Please follow instructions disclosed.</p>
  );
}

export default forgotPassword;
