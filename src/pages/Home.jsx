import React from "react";
import Login from "../components/Login";
import Background from "../components/Background";
import ScrollToTop from "../components/ScrollToTop"

export default function Home() {
  ScrollToTop()

  return (
    <>
      <Background>
        <Login />
      </Background>
    </>
  );
}
