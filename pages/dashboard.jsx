import { useContext } from "react";
import Hero from "../comps/hero";
import Layout from "../comps/layout";
import AuthContext from "../store/AuthContext";

export default function Home() {
  const authCtx = useContext(AuthContext);
  return authCtx.isLoggedIn && (
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
