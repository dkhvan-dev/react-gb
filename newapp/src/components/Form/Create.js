import { Container, Button } from '@mui/material';
import React from 'react';
import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";

export default function Create({onSubmit}) {
  const [value, setValue] = useState("");

  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input value={value} onChange={handleChange} type="text" ref={inputRef} /> */}
      {/* <input type="submit" /> */}
      <TextField value={value} onChange={handleChange} inputRef={inputRef} />
      <Button color='secondary' type="submit" variant="contained">
        Submit
      </Button>
    </form>

    // <Container>
    //   <Button
    //     type='submit'
    //     color='secondary'
    //     variant='contained'
    //   >
    //     Submit
    //   </Button>
    // </Container>
  )
}