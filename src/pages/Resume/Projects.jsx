import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Grid, Typography, Container, InputLabel } from "@mui/material";
import {
  addProject,
  updateProject,
  deleteProject,
} from "../../redux/slices/resumeslice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const ProjectsForm = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.resume.projects);

  const [projectInput, setProjectInput] = useState({
    name: "",
    link: "",
    description: "",
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [name]: value,
    };
    dispatch(updateProject({ index, data: updatedProjects[index] }));
  };

  const handleAddProject = () => {
    dispatch(
      addProject({
        name: "",
        link: "",
        description: "",
      })
    );
  };


  const handleDeleteProject = (index) => {
    dispatch(deleteProject(index));
  };

  const modules= {
    toolbar: [[{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }]]
  }

  return (
    <>
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
                onChange={(value) =>
                  handleChange(
                    { target: { name: "description", value } },
                    index
                  )
                }
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
    </>
  );
};

export default ProjectsForm;
