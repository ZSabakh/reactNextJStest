import React from "react";
import Link from "next/link";

const errorPage = () => (
  <div>
    <h1>No page here!!</h1>
    <p>
      Go
      <Link href="/">
        <a>back !</a>
      </Link>
    </p>
  </div>
);

export default errorPage;
