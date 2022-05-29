import CourseCard from "../comps/courseCard";
import { Container, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Container maxW="100%" w="60%" className="courses">
        <CourseCard />
      </Container>
    </>
  );
}
