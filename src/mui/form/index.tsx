import React from "react";

import Button from "@mui/material/Button";
import {
  PageBox,
  ContentPaper,
  ContentCard,
} from "src/_shared/components/Content";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const MuiIndex = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <PageBox>
        <ContentPaper>
          <ContentCard>
            <Button variant="contained">Hello World</Button>
          </ContentCard>
        </ContentPaper>
      </PageBox>
    </ThemeProvider>
  );
};

export default MuiIndex;
