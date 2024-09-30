import React from "react";

import Footer from "../components/Footer";
import { Container } from "./styles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
