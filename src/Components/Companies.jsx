import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import logoImg from "../media/logo.png";
import starsImg from "../media/Star.png";
import logosImg from "../media/logos.png";
import { CenterFocusStrongOutlined } from "@mui/icons-material";

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <img src={logoImg} alt="logo"  height={320} style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            More than 45,000 trust us
          </Typography>
        </CustomBox>

        <Box>
          <img src={starsImg} alt="stars" height={40} style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "34px",
              fontWeight: "bold",
              mt: 2,
            
            }}
          >
            5-Star Rating (2k+ Reviews) all organic <br></br>
            Shows our Trust Worthiness.<br></br>
            We show emotions as well.
          </Typography>
        </Box>
      </CustomContainer>

      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <img src={logosImg} alt="logos" /> 
      </Container>
    </Box>
  );
};

export default Companies;
