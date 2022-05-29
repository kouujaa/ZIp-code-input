import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const EditInputWrapper = styled("div")({
  marginBottom: "2rem",
  marginTop: "2rem",
  display: "block",
});

export const TextFieldStyled = styled(TextField)({
  display: "block",
  marginBottom: 5,
});

export const MainWrapper = styled("div")({
  display: "grid",
  placeItems: "center",
  height: "100vh",
  width: "100vw",
});
