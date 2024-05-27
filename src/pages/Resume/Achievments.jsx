import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { addAchievement, updateAchievement, deleteAchievement } from "../../redux/slices/resumeslice";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const AchievementsForm = () => {
  const dispatch = useDispatch();
  const achievements = useSelector((state) => state.resume.achievements);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedAchievements = [...achievements];
    updatedAchievements[index] = {
      ...updatedAchievements[index],
      [name]: value,
    };
    dispatch(updateAchievement({ index, data: updatedAchievements[index] }));
  };

  const handleAddAchievement = () => {
    dispatch(addAchievement({
      title: "",
      description: "",
    }));
  };

  const handleDeleteAchievement = (index) => {
    dispatch(deleteAchievement(index));
  };

  return (
    <>
      {achievements.map((achievement, index) => (
        <form key={index} style={{ marginBottom: "1rem" }}>
          <Typography mb={3} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Achievement-{index + 1}</span>
            <HighlightOffIcon onClick={() => handleDeleteAchievement(index)} style={{ cursor: "pointer" }} />
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="title"
                label="Title"
                fullWidth
                value={achievement.title}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                fullWidth
                multiline
                rows={4}
                value={achievement.description}
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
        onClick={handleAddAchievement}
        style={{ marginTop: "1rem" }}
      >
        Add Achievement
      </Button>
    </>
  );
};

export default AchievementsForm;
