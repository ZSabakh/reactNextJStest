import React from "react";
import User from "../../components/User";

const authPage = () => (
  <div>
    <h1>Welcome to auth!</h1>
    <User name="Namee" age={21} />
  </div>
);

export default authPage;
