import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { setSkills } from "../../redux/slices/portfolioslice";

const availableIcons = [
  { name: "Figma", icon: "fa-figma" },
  { name: "Canva", icon: "fa-canva" },
  { name: "MS PowerPoint", icon: "fa-powerpoint" },
];
const availableColor = [
  { name: "green", value: "fa-green" },
  { name: "orange", value: "fa-orange" },
  { name: "red", value: "fa-red" },
];

const SkillsForm = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.portfolio.skills);

  const [newCategory, setNewCategory] = useState("");

  const handleCategoryChange = (e, categoryIndex, skillIndex) => {
    const { name, value } = e.target;
    const updatedSkills = skills.map((category, index) => {
      if (index === categoryIndex) {
        const updatedCategory = { ...category };
        if (skillIndex !== undefined) {
          updatedCategory.skills = updatedCategory.skills.map((skill, i) => {
            if (i === skillIndex) {
              return { ...skill, [name]: value };
            }
            return skill;
          });
        } else {
          updatedCategory[name] = value;
        }
        return updatedCategory;
      }
      return category;
    });
    dispatch(setSkills(updatedSkills));
  };

  const handleAddCategory = () => {
    const newSkills = [...skills, { title: newCategory, skills: [] }];
    dispatch(setSkills(newSkills));
    setNewCategory("");
  };

  const handleAddSkill = (categoryIndex) => {
    const updatedSkills = skills.map((category, index) => {
      if (index === categoryIndex) {
        return {
          ...category,
          skills: [
            ...category.skills,
            { name: "", icon: "", color: "", label: "" },
          ],
        };
      }
      return category;
    });
    dispatch(setSkills(updatedSkills));
  };

  const handleDeleteSkill = (categoryIndex, skillIndex) => {
    const updatedSkills = skills.map((category, index) => {
      if (index === categoryIndex) {
        const updatedCategory = {
          ...category,
          skills: category.skills.filter((_, i) => i !== skillIndex),
        };
        return updatedCategory;
      }
      return category;
    });
    dispatch(setSkills(updatedSkills));
  };

  const handleDeleteCategory = (categoryIndex) => {
    const updatedSkills = skills.filter((_, i) => i !== categoryIndex);
    dispatch(setSkills(updatedSkills));
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Add Skill Category
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            label="New Category"
            fullWidth
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddCategory}
            style={{ height: "100%" }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      {skills.map((category, categoryIndex) => (
        <div key={categoryIndex} style={{ marginTop: "2rem" }}>
          <Typography
            mb={3}
            variant="h6"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>{category.title}</span>
            <DeleteOutlineIcon
              onClick={() => handleDeleteCategory(categoryIndex)}
              style={{ cursor: "pointer" }}
            />
          </Typography>
          {category.skills.map((skill, skillIndex) => (
            <form key={skillIndex} style={{ marginBottom: "1rem" }}>
              <Grid container spacing={1.5}>
                <Grid item xs={12} sm={2.5}>
                <InputLabel>Skill Name</InputLabel>
                  <TextField
                    name="name"
                    fullWidth
                    value={skill.name}
                    onChange={(e) =>
                      handleCategoryChange(e, categoryIndex, skillIndex)
                    }
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                <InputLabel>Label</InputLabel>
                  <TextField
                    name="label"
                    fullWidth
                    value={skill.label}
                    onChange={(e) =>
                      handleCategoryChange(e, categoryIndex, skillIndex)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <InputLabel>Icon</InputLabel>
                  <Select
                    name="icon"
                    fullWidth
                    value={skill.icon}
                    onChange={(e) =>
                      handleCategoryChange(e, categoryIndex, skillIndex)
                    }
                    required
                  >
                    {availableIcons.map((icon) => (
                      <MenuItem key={icon.icon} value={icon.icon}>
                        {icon.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={3}>
                <InputLabel>Color</InputLabel>
                  <Select
                    name="color"
                    fullWidth
                    value={skill.color}
                    onChange={(e) =>
                      handleCategoryChange(e, categoryIndex, skillIndex)
                    }
                    required
                  >
                    {availableColor.map((color,index) => (
                      <MenuItem key={index} value={color.value}>
                        {color.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                
                <Grid
                  item
                  xs={12}
                  sm={0.5}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IconButton
                    onClick={() => handleDeleteSkill(categoryIndex, skillIndex)}
                    style={{ marginLeft: "auto" }}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </form>
          ))}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleAddSkill(categoryIndex)}
            style={{ marginTop: "1rem" }}
          >
            Add Skill
          </Button>
        </div>
      ))}
    </Container>
  );
};

export default SkillsForm;
