import React from "react";
import Register from "../components/Register";
import Background from "../components/Background";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  ScrollToTop();

  return (
    <>
      <Background>
        <Register />
      </Background>
    </>
  );
}
