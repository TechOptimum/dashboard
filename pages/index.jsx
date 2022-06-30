import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Login from "../comps/login";
import AuthContext from "../store/AuthContext";

function Home() {
  const authCtx = useContext(AuthContext);

  const router = useRouter();
  useEffect(() => {
    if (authCtx.isLoggedIn) {
      router.push("/dashboard");
    }
  }, []);
  return (
    <>
      <Login />
    </>
  );
}

export default Home;
