import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Grid, Typography, Checkbox, InputLabel } from "@mui/material";
import {
  addWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
} from "../../redux/slices/resumeslice";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const WorkExperienceForm = () => {
  const dispatch = useDispatch();
  const workExperience = useSelector((state) => state.resume.workExperience);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = [...workExperience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    dispatch(updateWorkExperience({ index, data: updatedExperience[index] }));
  };


  const modules= {
    toolbar: [[{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }]]
  }

  const handleDateChange = (date, name, index) => {
    const updatedExperience = [...workExperience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: date ? date.format("YYYY-MM-DD") : "",
    };
    dispatch(updateWorkExperience({ index, data: updatedExperience[index] }));
  };

  const handleAddExperience = () => {
    dispatch(
      addWorkExperience({
        company: "",
        role: "",
        location: "",
        startDate: dayjs().format("YYYY-MM-DD"),
        endDate: dayjs().format("YYYY-MM-DD"),
        description: "",
        present: false,
      })
    );
  };

  const handleDeleteExperience = (index) => {
    dispatch(deleteWorkExperience(index));
  };

  const handleTogglePresent = (index) => {
    const updateExperience = [...workExperience];
    updateExperience[index] = {
      ...updateExperience[index],
      present: !updateExperience[index].present,
    };
    dispatch(updateWorkExperience({ index, data: updateExperience[index] }));
  };

  return (
    <div>
      {workExperience.map((exp, index) => (
        <form key={index} style={{ marginBottom: "1rem" }}>
          <Typography
            mb={3}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Company-{index + 1}</span>

            <HighlightOffIcon
              sx={{ cursor: "pointer" }}
              onClick={() => handleDeleteExperience(index)}
            />
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="company"
                label="Company"
                fullWidth
                value={exp.company}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="role"
                label="Role"
                fullWidth
                value={exp.role}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="location"
                label="Location"
                fullWidth
                value={exp.location}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Start Date"
                  value={dayjs(exp.startDate)}
                  onChange={(date) =>
                    handleDateChange(date, "startDate", index)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="startDate"
                      fullWidth
                      required
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container alignItems="center">
                <Grid item>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="End Date"
                      disabled={exp.present}
                      value={dayjs(exp.endDate)}
                      onChange={(date) =>
                        handleDateChange(date, "endDate", index)
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="endDate"
                          fullWidth
                          disabled={exp.present}
                          required={!exp.present}
                        />
                      )}
                      showToolbar={false}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item>
                  <Checkbox
                    checked={exp.present}
                    onChange={() => handleTogglePresent(index)}
                  />
                  Present
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Description</InputLabel>
              <ReactQuill
                modules={modules}
                theme="snow"
                value={exp.description}
                onChange={(value) => handleChange({target:{name:"description",value}}, index)}
              />
            </Grid>
          </Grid>
        </form>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddExperience}
        style={{ marginTop: "1rem" }}
      >
        Add
      </Button>
    </div>
  );
};

export default WorkExperienceForm;
