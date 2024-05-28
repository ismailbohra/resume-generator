import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Checkbox,
} from "@mui/material";
import {
  addEducation,
  updateEducation,
  deleteEducation,
} from "../../redux/slices/portfolioslice";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const EducationForm = () => {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.portfolio.education);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    dispatch(updateEducation({ index, data: updatedEducation[index] }));
  };

  const handleDateChange = (date, name, index) => {
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: date ? date.format("YYYY-MM-DD") : "",
    };
    dispatch(updateEducation({ index, data: updatedEducation[index] }));
  };

  const handleAddEducation = () => {
    const opt = {
      title: "Higher Secondary School ",
      description:
        "Achieved two years higher secondary degree from Science major from a reputed institute.",
      institute:
        "Carmel Convent Senior Secondary School,Neemuch,Madhya Pradesh",
      startDate: dayjs().format("YYYY-MM-DD"),
      endDate: dayjs().format("YYYY-MM-DD"),
      present:false
    };
    dispatch(
      addEducation(opt)
    );
  };

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };

  const handleTogglePresent = (index) => {
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      present: !updatedEducation[index].present,
    };
    dispatch(updateEducation({ index, data: updatedEducation[index] }));
  };

  return (
    <>
      {education.map((edu, index) => (
        <form key={index} style={{ marginBottom: "1rem" }}>
          <Typography
            mb={3}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Institute-{index + 1}</span>
            <span>
              <HighlightOffIcon
                sx={{ cursor: "pointer" }}
                onClick={() => handleDeleteEducation(index)}
              />
            </span>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="institute"
                label="Institute"
                fullWidth
                value={edu.institute}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="title"
                label="Title"
                fullWidth
                value={edu.degree}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Start Date"
                  value={dayjs(edu.startDate)}
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
                      disabled={edu.present}
                      value={dayjs(edu.endDate)}
                      onChange={(date) =>
                        handleDateChange(date, "endDate", index)
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="endDate"
                          fullWidth
                          disabled={edu.present}
                          required={!edu.present}
                        />
                      )}
                      showToolbar={false}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item>
                  <Checkbox
                    checked={edu.present}
                    onChange={() => handleTogglePresent(index)}
                  />
                  Present
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="institute"
                label="Institute"
                fullWidth
                value={edu.institute}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                fullWidth
                value={edu.description}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </Grid>
          </Grid>
        </form>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddEducation}
        style={{ marginTop: "1rem" }}
      >
        Add Education
      </Button>
    </>
  );
};

export default EducationForm;
