import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function token() {
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [msg, setMsg] = useState(null);
  const router = useRouter();
  const { token } = router.query;
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/auth/verify?token=" + token, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          if (data.code === "emav") {
            setVerified(true);
            setMsg(data.msg);
          }
          setVerified(true);
        }
      });
  }, [token]);
  return (
    <div>
      {verified && (
        <p>
          Successfully Verified Account.{" "}
          <Link href="/">Continue to login.</Link>
        </p>
      )}
      {verified && msg && (
        <p>
          Email already verified.{" "}
          <Link href="/">Continue to login.</Link>
        </p>
      )}
    </div>
  );
}

export default token;
