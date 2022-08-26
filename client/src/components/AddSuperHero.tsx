import React from "react";
import { Autocomplete, Button, Paper, Stack, TextField } from "@mui/material";
import ISuperHero from "../types/ISuperHero";
import { useAppSelector, useAppDispatch } from '../hooks';
import { setLoading } from '../redux/features/appSlice';
//import { useDispatch } from "react-redux";

type Props = {
  //addTodo: (superHero: ISuperHero) => void
};

const AddSuperHero: React.FC<Props> = ({ }) => {
  const loading = useAppSelector((state) => state.app.loading);
  const dispatch = useAppDispatch();

  const saveHero = () => {
    console.log("saving");
    dispatch(setLoading(true));
  };

  return (
    <Paper className="form">
      <Stack direction="column" spacing={2} >
        <TextField
          label="Name"
          id="name-field"
          variant="outlined"
          disabled={loading}
        />
        <Autocomplete
          id="super-power-field"
          options={["one", "two", "three"]}
          disabled={loading}
          renderInput={(params) => <TextField {...params} label="Super Power" />}
        />
        <Button
          variant="contained"
          size="medium"
          disabled={loading}
          onClick={() => saveHero()}
        >
          BEE a Hero
        </Button>
      </Stack>
    </Paper>
  );
};

export default AddSuperHero;