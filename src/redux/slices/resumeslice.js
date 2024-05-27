import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetails: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title:"",
    address: "",
    summary: "",
    github: "",
    linkedin: "",
  },
  workExperience: [],
  education: [],
  skills: [],
  projects: [],
  languages: [],
  achievements: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updatePersonalDetails(state, action) {
      state.personalDetails = { ...state.personalDetails, ...action.payload };
    },
    addWorkExperience(state, action) {
      state.workExperience.push(action.payload);
    },
    updateWorkExperience(state, action) {
      const { index, data } = action.payload;
      state.workExperience[index] = data;
    },
    deleteWorkExperience(state, action) {
      const index = action.payload;
      state.workExperience.splice(index, 1);
    },
    addEducation(state, action) {
      state.education.push(action.payload);
    },
    updateEducation(state, action) {
      const { index, data } = action.payload;
      state.education[index] = data;
    },
    deleteEducation(state, action) {
      const index = action.payload;
      state.education.splice(index, 1);
    },
    setSkills(state, action) {
      state.skills = action.payload;
    },
    addProject(state, action) {
      state.projects.push(action.payload);
    },
    updateProject(state, action) {
      const { index, data } = action.payload;
      state.projects[index] = data;
    },
    deleteProject(state, action) {
      state.projects.splice(action.payload, 1);
    },
    setLanguages(state, action) {
      state.languages = action.payload;
    },
    addAchievement(state, action) {
      state.achievements.push(action.payload);
    },
    updateAchievement(state, action) {
      const { index, data } = action.payload;
      state.achievements[index] = data;
    },
    deleteAchievement(state, action) {
      state.achievements.splice(action.payload, 1);
    },
  },
});

export const {
  updatePersonalDetails,
  addWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
  addEducation,
  updateEducation,
  deleteEducation,
  setSkills,
  addProject,
  updateProject,
  deleteProject,
  setLanguages,
  addAchievement,
  updateAchievement,
  deleteAchievement,
} = resumeSlice.actions;
export default resumeSlice.reducer;
