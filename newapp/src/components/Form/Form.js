import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

import "./Form.styles.css";

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log("did mount", inputRef);
    inputRef.current?.focus();

    return () => {
      console.log("will unmount");
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {/* <input value={value} onChange={handleChange} type="text" ref={inputRef} /> */}
      {/* <input type="submit" /> */}
      <TextField value={value} onChange={handleChange} inputRef={inputRef} />
      <Button className="mybtn" type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};