import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Hero from "../comps/hero";
import Layout from "../comps/layout";
import AuthContext from "../store/AuthContext";

export default function Home() {
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
          <Hero />
        </Layout>
      </>
    )
  );
}
