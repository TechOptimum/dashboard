import { Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../store/AuthContext";

function createcourse() {
  const [partValues, setPartValues] = React.useState({});
  const [partCounter, setPartCounter] = React.useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const authCtx = useContext(AuthContext);

  const addPartHandler = (e) => {
    e.preventDefault();
    setPartCounter((prevState) => prevState + 1);
  };

  const partChangeHandler = (e, partid) => {
    e.preventDefault();
    const { value } = e.target;
    const partTitle = value.split(",")[0];
    const partNotionPgId = value.split(",")[1];
    setPartValues((prevState) => ({
      ...prevState,
      [partid]: { title: partTitle, notionPgId: partNotionPgId },
    }));
  };

  const submitHandler = () => {
    const courseTitle = getValues("title");
    const courseDescription = getValues("desc");
    const courseLanguage = getValues("language");
    const courseParts = partValues;
    fetch("http://localhost:3000/course/new-course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authCtx.token,
      },
      body: JSON.stringify({
        courseTitle,
        courseDescription,
        courseParts,
        courseLanguage,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Course created successfully!"); // TODO: Display a success message on page instead of alert.
        } else {
          alert("Course creation failed!"); // TODO: Display a success message on page instead of alert.
        }
      });
  };

  return (
    <Flex w="100%" justify="center">
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          placeholder="Course Title"
          {...register("title", { required: true })}
          style={{
            color: "black",
          }}
        />
        <input
          placeholder="Course Description"
          {...register("desc", { required: true })}
          style={{
            color: "black",
          }}
        />
        <input
          placeholder="Course Language"
          {...register("language", { required: true })}
          style={{
            color: "black",
          }}
        />
        <button onClick={addPartHandler}>Add a part +</button>
        <div>
          {Array.from(Array(partCounter)).map((_, index) => (
            <div key={index + 1}>
              <input
                placeholder={`Part ${index + 1} title..., Notion Page ID`}
                onChange={(e) => partChangeHandler(e, index + 1)}
                style={{
                  color: "black",
                }}
                required
              />
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </Flex>
  );
}

export default createcourse;
