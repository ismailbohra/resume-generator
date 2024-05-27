import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MuiChipsInput } from "mui-chips-input";
import { setSkills } from "../../redux/slices/resumeslice";

const SkillsForm = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills);

  const handleChange = (newChips) => {
    dispatch(setSkills(newChips));
  };

  return <MuiChipsInput value={skills} onChange={handleChange} fullWidth />;
};

export default SkillsForm;
