import React from "react";
import Container from "@mui/material/Container";
import "./App.css";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Login />
      </Container>
    </React.Fragment>
  );
}
