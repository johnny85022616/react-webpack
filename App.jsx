import React, { useEffect } from "react";
import "./app.scss";

const func = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 3000);
  });
};

export default function App() {


  return (
    <>
      <div className="appH1">Hello, world!</div>
    </>
  );
}
