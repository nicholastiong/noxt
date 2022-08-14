import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";

type Content = {
  children: React.ReactNode;
};

type Page = {
  children: React.ReactNode;
};

type Box = {
  children: React.ReactNode;
};

export const PageBox = ({ children }: Page) => {
  return (
    <Box
      sx={{
        marginTop: "64px",
        padding: "24px",
      }}
    >
      {children}
    </Box>
  );
};

export const ContentPaper = ({ children }: Page) => {
  return <Paper>{children}</Paper>;
};

export const ContentCard = ({ children }: Content) => {
  return <Card sx={{ padding: "16px" }}>{children}</Card>;
};
