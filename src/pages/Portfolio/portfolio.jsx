import React from "react";
import { connect, useSelector } from "react-redux";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Accordions from "../../component/accordion";
import PersonalDetails from "./personalDetails";
import EducationForm from "./Education";
import SkillsForm from "./skills";
import ProjectsForm from "./Projects";
import "./Portfolio.css";

const fields = [
  {
    name: "Personal Details",
    element: <PersonalDetails />,
  },
  {
    name: "Qualifictions",
    element: <EducationForm />,
  },
  {
    name: "Skills",
    element: <SkillsForm />,
  },
  {
    name: "Projects",
    element: <ProjectsForm />,
  },
];

export const Portfolio = () => {


  return (
    <div className="portfolio">
      <Container>
        <Grid
          container
          sx={{
            border: "2px solid black",
            borderRadius: 4,
            overflow: "hidden",
            bgcolor: "white",
          }}
          marginTop={3}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "calc(100vh - 6rem)",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  width: "2px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "transparent",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "black",
                  borderRadius: "1px",
                },
              }}
            >
              <Accordions fields={fields} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "calc(100vh - 6rem)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 1,
                  marginBottom: 1,
                }}
              >
                <Button variant="contained">Download</Button>
              </Box>

              <Box
                sx={{
                  height: { xs: 350, md: "auto" },
                  overflowY: "auto",
                  flexGrow: 1,
                  padding: 2,
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
