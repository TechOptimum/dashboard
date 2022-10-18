import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import CreateCourse from "../comps/createcourse";
import Layout from "../comps/layout";
import AuthContext from "../store/AuthContext";

export default function CreateCoursePage() {
  const authCtx = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      router.push("/");
    }
  }, []);

  return (
    authCtx.isLoggedIn && (
      <>
        <Layout>
          <CreateCourse />
        </Layout>
      </>
    )
  );
}
