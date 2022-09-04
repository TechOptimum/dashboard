import { Flex } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { NotionRenderer } from "react-notion";
import AuthContext from "../store/AuthContext";

function coursepage({ courseId, part }) {
  const [notionPageId, setNotionPageId] = useState();
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    fetch(
      "http://localhost:3000/course/get-course-item/6313ec5994f76e8d5d85b985/1",
      {
        headers: {
          Authorization: "Bearer " + authCtx.token,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setNotionPageId(data.pageId);
        }
      });
  }, []);
  return (
    <Flex w="100%" justify="center">
      <div>{notionPageId}</div>
    </Flex>
  );
}

export default coursepage;
