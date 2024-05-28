import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetails: {
    firstName: "",
    lastName: "",
    motivatoion: "",
    title:"",
    summary: "",
    github:"",
    linkedin:""
  },
  education: [],
  skills: [],
  projects: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    updatePersonalDetails(state, action) {
      state.personalDetails = { ...state.personalDetails, ...action.payload };
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
  },
});

export const {
  updatePersonalDetails,
  addEducation,
  updateEducation,
  deleteEducation,
  setSkills,
  addProject,
  updateProject,
  deleteProject,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
