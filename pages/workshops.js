import React from "react";
import CourseCard from "../comps/courseCard";
import { Container } from "@chakra-ui/react";

export default function workshops() {
  return (
    <>
      <Container maxW="100%" w="60%" className="courses">
        <CourseCard />
      </Container>
    </>
  );
}
