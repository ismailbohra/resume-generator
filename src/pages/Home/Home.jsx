import React from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import banner from "../../assets/resum-writting.svg";
import "./home.css";
import { Link } from "react-router-dom";

export const Home = (props) => {
  return (
    <div className="home">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: { xs: 350, md: "100%" },
              }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Typography
                color={"blue"}
                sx={{ fontSize: 40, fontWeight: "bold" }}
              >
                Create Your Resume
              </Typography>
              <Typography
                color={"blue"}
                sx={{ fontSize: 40, fontWeight: "bold" }}
              >
                {/* & Portfolio Website */}
              </Typography>
              <Typography>Get a free resume in just 30 seconds </Typography>
              <Box sx={{ marginTop: 2 }}>
                <Link to={"/resume"}>
                  <Button sx={{ bgcolor: "#F25C05" }} variant="contained">
                    Get Started
                  </Button>
                </Link>
                {/* <Link to={"/portfolio"}>
                  <Button variant="contained" >
                    Portfolio Website
                  </Button>
                </Link> */}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: { xs: 350, md: "100%" },
                width: "100%",
              }}
              component={"img"}
              src={banner}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
