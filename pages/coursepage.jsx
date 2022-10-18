import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import CoursePage from "../comps/coursepage";
import Layout from "../comps/layout";
import AuthContext from '../store/AuthContext';

export default function CoursePages() {
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
            <CoursePage />
          </Layout>
        </>
      )
    );
  }
