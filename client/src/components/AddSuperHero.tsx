import React, { useState } from "react";
import { Alert, Autocomplete, Button, Paper, Snackbar, Stack, TextField } from "@mui/material";
import ISuperHero from "../../../API/ISuperHero";
import { useAppSelector, useAppDispatch } from '../hooks';
import { setLoading } from '../redux/features/appSlice';
import { addSuperHero } from "../services/superHeroApi"
import ISuperPower from "../../../API/ISuperPower";
import { AxiosError } from "axios";

//import { useDispatch } from "react-redux";

type Props = {
  //addTodo: (superHero: ISuperHero) => void
};

const AddSuperHero: React.FC<Props> = () => {
  const [name, setName] = useState<string>("");
  const [superPower, setSuperPower] = useState<ISuperPower | null>();
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const loading = useAppSelector((state) => state.app.loading);
  const superpowers = useAppSelector((state) => state.app.superpowers);
  const dispatch = useAppDispatch();

  const saveHero = () => {
    dispatch(setLoading(true));
    const superhero: ISuperHero = {
      name,
      superPower: superPower || { "ability" : ""}
    };
    addSuperHero(superhero)
      .then((message: string) => {
        console.log(message);
      })
      .catch((error: AxiosError) => {
        if (error.response?.data) {
          setErrorMessage(error.response.data as string);
        } else {
          setErrorMessage("Error occured");
        }
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  return (
    <React.Fragment>
      <Snackbar
        open={errorMessage !== undefined && errorMessage !== null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="error"
          onClose={() => setErrorMessage(null)}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
      <Paper className="form">
        <Stack direction="column" spacing={2} >
          <TextField
            label="Name"
            id="name-field"
            variant="outlined"
            disabled={loading}
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setName(event.target.value) }}
          />
          <Autocomplete
            id="super-power-field"
            options={superpowers || []}
            disabled={loading}
            getOptionLabel={(option) => option.ability}
            value={superPower || null}
            onChange={(event: React.SyntheticEvent<Element, Event>, newValue: ISuperPower | null) => {
              setSuperPower(newValue);
            }}
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
    </React.Fragment>
  );
};

export default AddSuperHero;