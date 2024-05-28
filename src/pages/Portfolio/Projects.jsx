import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  InputLabel,
} from "@mui/material";
import {
  addProject,
  updateProject,
  deleteProject,
} from "../../redux/slices/portfolioslice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MuiChipsInput } from "mui-chips-input";

const ProjectsForm = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.portfolio.projects);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [name]: value,
    };
    dispatch(updateProject({ index, data: updatedProjects[index] }));
  };

  const handleQuillChange = (value, index) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      description: value,
    };
    dispatch(updateProject({ index, data: updatedProjects[index] }));
  };

  const handleSkillsChange = (newSkills, index) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      skills: newSkills,
    };
    dispatch(updateProject({ index, data: updatedProjects[index] }));
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProjects = [...projects];
        updatedProjects[index] = {
          ...updatedProjects[index],
          image: reader.result,
        };
        dispatch(updateProject({ index, data: updatedProjects[index] }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProject = () => {
    dispatch(
      addProject({
        name: "",
        link: "",
        description: "",
        skills: [],
        image: "",
      })
    );
  };

  const handleDeleteProject = (index) => {
    dispatch(deleteProject(index));
  };

  const modules = {
    toolbar: [[{ list: "ordered" }, { list: "bullet" }, { list: "check" }]],
  };

  return (
    <Container>
      {projects.map((project, index) => (
        <form key={index} style={{ marginBottom: "1rem" }}>
          <Typography
            mb={3}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Project-{index + 1}</span>
            <HighlightOffIcon
              onClick={() => handleDeleteProject(index)}
              style={{ cursor: "pointer" }}
            />
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Project Name"
                fullWidth
                value={project.name}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="link"
                label="Project Link"
                fullWidth
                value={project.link}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Description</InputLabel>
              <ReactQuill
                modules={modules}
                theme="snow"
                value={project.description}
                onChange={(value) => handleQuillChange(value, index)}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Skills</InputLabel>
              <MuiChipsInput
                value={project.skills}
                onChange={(newChips) => handleSkillsChange(newChips, index)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Image</InputLabel>
              <input
                accept="image/*"
                type="file"
                onChange={(e) => handleImageChange(e, index)}
              />
              
            </Grid>
          </Grid>
        </form>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddProject}
        style={{ marginTop: "1rem" }}
      >
        Add Project
      </Button>
    </Container>
  );
};

export default ProjectsForm;
