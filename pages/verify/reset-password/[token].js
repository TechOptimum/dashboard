import { Box, Flex, FormLabel, Input, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function token() {
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [msg, setMsg] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const router = useRouter();
  const { token } = router.query;

  const submitHandler = () => {
    setLoading(true);
    const password = getValues("password");
    const confirmPassword = getValues("cpassword");
    if (password !== confirmPassword) {
      return setError(
        "cpassword",
        { type: "nomatch" },
        {
          shouldFocus: true,
        }
      );
    }
    fetch("http://localhost:3000/auth/reset-password?token=" + token, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          setVerified(true);
        } else {
          if (data.code === "nuf") {
            setError(
              "password",
              { type: "nuf" },
              {
                shouldFocus: true,
              }
            );
          }
        }
      });
    setLoading(false);
  };

  return (
    <>
      {!verified ? (
        <form onSubmit={handleSubmit(submitHandler)}>
          <Box maxWidth="100%" mb="30px" className="loginUtil" mx="30px">
            <Box>
              <FormLabel htmlFor="name">New Password</FormLabel>
              <Input
                {...register("password", { required: true, minLength: 8 })}
                minH="fit-content"
                placeholder="Enter new password."
                resize="none"
                type="password"
              />
              <div>
                {errors.password?.type === "required" && (
                  <p style={{ color: "red" }}>Password is required.</p>
                )}
                {errors.password?.type === "minLength" && (
                    <p style={{ color: "red" }}>Password must be atleast 8 characters long.</p>
                )}
                {errors.password?.type === "nuf" && (
                  <p
                    style={{
                      color: "red",
                    }}
                  >
                    No user found.
                  </p>
                )}
              </div>
            </Box>
            <Box>
              <FormLabel htmlFor="name">Confirm New Password</FormLabel>
              <Input
                {...register("cpassword", { required: true, minLength: 8 })}
                minH="fit-content"
                placeholder="Enter new password."
                resize="none"
                type="password"
              />
              <div>
                {errors.cpassword?.type === "required" && (
                  <p style={{ color: "red" }}>Password is required.</p>
                )}
                {errors.cpassword?.type === "minLength" && (
                    <p style={{ color: "red" }}>Password must be atleast 8 characters long.</p>
                )}
                {errors.cpassword?.type === "nomatch" && (
                  <p
                    style={{
                      color: "red",
                    }}
                  >
                    Passwords don't match.
                  </p>
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
      ) : (
        <p>Password successfully changed. <Link href="/login">Continue.</Link></p>
      )}
    </>
  );
}

export default token;
