import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const StyledFormBox = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
  justifyContent: "space-between",
});
