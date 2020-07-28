import React from "react";
import Link from "next/link";
import Router from "next/router";

const mainPage = () => (
  <div>
    <h1>Welcome to main!</h1>
    <p>
      To:
      <Link href="/auth">
        <a>Auth</a>
      </Link>
      <button onClick={() => Router.push("/auth")}>Go to auth</button>
    </p>
  </div>
);

export default mainPage;
