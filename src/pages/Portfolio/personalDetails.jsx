import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Grid, InputLabel } from "@mui/material";
import { updatePersonalDetails } from "../../redux/slices/resumeslice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PersonalDetailsForm = () => {
  const dispatch = useDispatch();
  const personalDetails = useSelector((state) => state.resume.personalDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updatePersonalDetails({ [name]: value }));
  };

  const modules = {
    toolbar: [[{ list: "ordered" }, { list: "bullet" }, { list: "check" }]],
  };

  return (
    <div>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              label="First Name"
              fullWidth
              value={personalDetails.firstName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              label="Last Name"
              fullWidth
              value={personalDetails.lastName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              value={personalDetails.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="title"
              label="Professional Title"
              fullWidth
              value={personalDetails.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phone"
              label="Phone Number"
              fullWidth
              value={personalDetails.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="github"
              label="Github"
              fullWidth
              value={personalDetails.github}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="linkedin"
              label="Linkedin"
              fullWidth
              value={personalDetails.linkedin}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address"
              fullWidth
              value={personalDetails.address}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Description</InputLabel>
            <ReactQuill
              modules={modules}
              theme="snow"
              value={personalDetails.summary}
              onChange={(value) =>
                handleChange({ target: { name: "summary", value } })
              }
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
