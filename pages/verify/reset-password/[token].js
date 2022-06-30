import { useRouter } from "next/router";
import React from "react";

function token() {
  const router = useRouter();
  const { token } = router.query;
  return <div>{token}</div>;
}

export default token;
