import { Container } from "@mui/material";
import FaqAccordion from "./FaqAccordion";

const FaqsContainer = () => {
  return (
    <Container style={{ margin: "7% auto 19%" }}>
      <h1
        style={{
          textAlign: "center",
          fontWeight: 500,
          fontSize: "45px",
          lineHeight: "30px",
          marginBottom: "41px",
        }}
      >
        F.A.Q
      </h1>
      <FaqAccordion />
    </Container>
  );
};

export default FaqsContainer;
