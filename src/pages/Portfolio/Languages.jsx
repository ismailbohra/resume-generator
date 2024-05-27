import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MuiChipsInput } from "mui-chips-input";
import { setLanguages } from "../../redux/slices/resumeslice";

const LanguagesForm = () => {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.resume.languages);

  const handleChange = (newChips) => {
    dispatch(setLanguages(newChips));
  };

  return <MuiChipsInput value={languages} onChange={handleChange} fullWidth />;
};

export default LanguagesForm;
