import { Container } from "@mui/material";
import { Fragment } from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Container maxWidth="xl">
        <Header />
        {children}
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
