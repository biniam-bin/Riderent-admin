import Layout from "@/components/Layout";
import React from "react";
import "../app/globals.css";

function employees() {
  return (
    <>
      <Layout active="/employees">
        <main>Employees</main>
      </Layout>
    </>
  );
}

export default employees;
