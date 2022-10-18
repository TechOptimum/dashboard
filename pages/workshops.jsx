import React, { useContext, useEffect, useState } from "react";
import CourseCard from "../comps/courseCard";
import { Container } from "@chakra-ui/react";
import Layout from "../comps/layout";
import AuthContext from "../store/AuthContext";
export default function workshops() {
  const [courses, setCourses] = useState([]);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:3000/course/get-all-courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authCtx.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses);
      });
  }, []);

  return (
    <>
      <Layout>
        <Container maxW="100%" w="60%" className="courses">
          {courses.length > 0 && courses.map((course) => (
            <CourseCard
              title={course.courseName}
              description={course.description}
              id={course._id}
              language={course.language}
            />
          ))}
        </Container>
      </Layout>
    </>
  );
}
