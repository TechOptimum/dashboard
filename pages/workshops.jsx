import React from "react";
import CourseCard from "../comps/courseCard";
import { Container } from "@chakra-ui/react";
import Layout from "../comps/layout";
export default function workshops() {
  return (
    <>
      <Layout>
        <Container maxW="100%" w="60%" className="courses">
          <CourseCard />
        </Container>
      </Layout>
    </>
  );
}
