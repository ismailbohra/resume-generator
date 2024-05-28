import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetails: {
    firstName: "Ismail ",
    lastName: "Bohra",
    email: "ismailbohra99@gmail.com",
    phone: "+91 7023270086",
    title: "Full Stack Developer",
    address: "Indore, Madhya Pradesh",
    summary:
      '<p><span style="color: rgb(13, 13, 13);">Passionate Full Stack Developer skilled in developing innovative web applications using various technologies such as MERN stack, CodeIgniter 3, NodeJS, and Next JS. Demonstrated ability to deliver efficient, user-centric solutions in dynamic environments. Eager to leverage expertise in these frameworks to drive impactful projects and contribute to the company\'s mission of empowerment.</span></p>',
    github: "https://github.com/ismailbohra",
    linkedin: "https://www.linkedin.com/in/ismailbohraa",
  },
  workExperience: [
    {
      company: "IPS Academy",
      role: "Full Stack Developer Trainee",
      location: "Indore",
      startDate: "2021-12-01",
      endDate: "2024-02-29",
      description:
        "<ul><li>Expanded campus management system that tracks academic events and reduced paperwork by 90%</li><li>Leading development of the Institute’s Autonomous System, which serves approximately 10,000 students and over 500 faculties.</li></ul>",
      present: false,
    },
    {
      company: "OEPP Innovation Pvt Ltd",
      role: "Nodejs Intern",
      location: "remote",
      startDate: "2023-06-01",
      endDate: "2023-09-06",
      description:
        "<ul><li>Utilized Knex and Sequelize for efficient database operations</li><li>Successfully Migrated Excel data to SQL</li><li>contributed to a project by implementing search and order by logic for enhanced data retrieval and management</li></ul>",
      present: false,
    },
  ],
  education: [
    {
      institute: "Institute of Engineering & Science, IPS Academy",
      degree: "B-Tech (computer science)",
      startDate: "2024-07-01",
      endDate: "2024-05-28",
      present: true,
      address: "Indore, Madhya Pradesh, India ",
      detail: "Current CGPA: 9.49/10",
    },
  ],
  skills: [
    "C/C++",
    "MERN",
    "MySql",
    "Git",
    "Githhub",
    "AWS",
    "PHP",
    "Codeigniter 3",
  ],
  projects: [
    {
      name: "Passwordless Auth",
      link: "https://github.com/ismailbohra/passwordless_authentication",
      description:
        '<ul><li><span style="color: rgb(13, 13, 13);">Developed a cutting-edge web application featuring passwordless authentication, inspired by SimpleWebAuth, to revolutionize user security and experience.</span></li><li><span style="color: rgb(13, 13, 13);">\ufeffDesigned a seamless login process where users interact with the server by responding to challenges using their private keys, resulting in a frictionless authentication experience and enhancing overall usability.</span></li></ul>',
    },
    {
      name: "Resume Builder",
      link: "https://github.com/ismailbohra/resume-generator",
      description:
        '<ul><li><span style="color: rgb(13, 13, 13);">Spearheaded the development of a dynamic Resume Builder web application, empowering users to input their details and seamlessly preview their resume in real-time, enhancing the efficiency of the resume-building process.</span></li><li><span style="color: rgb(13, 13, 13);">\ufeffImplemented a side-by-side preview feature, facilitating instant visualization of resume modifications, thereby fostering a user-friendly and interactive experience, and improving overall user satisfaction.</span></li></ul>',
    },
  ],
  languages: [],
  achievements: [
    {
      title: "SIH 2023 Winner",
      description: " Led innovative solution for Slow Learner Identification.",
    },
    {
      title: "Academic Topper",
      description:
        "Achieved 2nd Rank in 2022 & 2023, reflecting commitment to excellence.",
    },
  ],
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
