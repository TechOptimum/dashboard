import { useForm } from "react-hook-form";
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
  Input,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub, FaDiscord, FaGit } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "../store/AuthContext";

function Login() {
  const [err, setErr] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const authCtx = useContext(AuthContext);

  const router = useRouter();

  const submitHandler = () => {
    const email = getValues("email");
    const password = getValues("password");
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const expirationTime = new Date(new Date().getTime() + 3600 * 1000);
          authCtx.login(null, expirationTime, data.username);
          router.push("/dashboard");
        } else {
          if (data.errType === "lgnfail") {
            setError("email", { type: "lgnfail" });
            setError("password", { type: "lgnfail" });
          } else if (data.errType === "dberr") {
            setErr(data.msg);
          }
        }
      });
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="950px">
      <Box
        className="formBox"
        maxW="100%"
        justifyItems="center"
        width="400px"
        height="600px"
      >
        <Text fontSize="xl" align="center" my="20px" mb="45px">
          Welcome to{" "}
          <span className="gradient org" fontWeight="semibold" fontSize="3xl">
            Tech Optimum
          </span>
        </Text>
        <Text mt="60px" align="center">
          Don't have an account? <Link href="/register">Sign Up!</Link>
        </Text>
        {err && (
          <Text mt="60px" align="center">
            {err}
          </Text>
        )}
        {/* -------------------------------------------------------------------------------------------------------------------------------- */}
        <form onSubmit={handleSubmit(submitHandler)}>
          <Box maxWidth="100%" mb="30px" className="loginUtil" mx="30px">
            <Box>
              <FormLabel htmlFor="name">Email</FormLabel>
              <Input
                {...register("email", { required: true })}
                minH="fit-content"
                placeholder="JohnDoe@outlook.com"
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
            <Box mt="1.3rem">
              <FormLabel htmlFor="name" maxW="100%">
                Password
              </FormLabel>
              <Input
                {...register("password", { required: true, minLength: 8 })}
                minH="fit-content"
                placeholder=""
                resize="none"
                type="password"
              />
              <div>
                {errors.password?.type === "required" && (
                  <p style={{ color: "red" }}>Password is required.</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p style={{ color: "red" }}>
                    Password must be at least 8 characters long.
                  </p>
                )}
                {errors.password?.type === "lgnfail" && (
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
              Login
            </Button>
          </Flex>
        </form>
        <Flex justifyContent="center">
          <Text className="gradient" mt="60px" position="absolute">
            Other Options:
          </Text>
          <Tooltip hasArrow label="Login with Github" bg="gray.800" mt="4px">
            <IconButton
              icon={<FaGithub fontSize="35px" />}
              variant="link"
              colorScheme="orange"
              aria-label="Github"
              _hover={{
                color: "#c0770a",
              }}
              mt="120px"
              mr="25px"
            />
          </Tooltip>
          <Tooltip hasArrow label="Login with Discord" bg="gray.800" mt="4px">
            <IconButton
              icon={<FaDiscord fontSize="35px" />}
              variant="link"
              colorScheme="orange"
              aria-label="Github"
              _hover={{
                color: "#c0770a",
              }}
              mt="120px"
            />
          </Tooltip>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Login;
